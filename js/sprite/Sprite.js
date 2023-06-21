import {br, numToSpace, removeTimestampDelimiters, reverseTimestamps} from "../stringManipulation.js";

/**
 * a class to standardize sprite creation and manipulation
 * @author Michael Crockett
 */

export default class Sprite {
    static receiptWidth = 40;
    /**
     * The characters that make up the sprite.
     * Spaces should be non-breaking (represented by `&nbsp;`) and lines are separate elements in the array.
     * @type {String[]}
     */
    spriteRows;

    /**
     * `#marginFill` tracks how we will fill in the blank margins on either side of the sprite.
     * This change is not made to the stored sprite because it can interfere with some methods.
     * @type {{left: string, right: string}}
     */
    #marginFill = {left: '&nbsp;', right: '&nbsp;'};

    /**
     *  @param spriteText {String|String[]} The characters that make up the sprite.
     *  Spaces should be non-breaking (represented by `&nbsp;`)
     *  and lines should be break tags `<br/>` or be separate elements in an array.
     */
    constructor(spriteText) {
        this.spriteRows = typeof spriteText === 'string' ? spriteText.split(br) : spriteText;
    }

    /**
     * finds the width of the sprite
     * @returns {{width: number, start: number, end: number}}
     */
    #findWidth(){
        const [start, end] = this.spriteRows.reduce(([start, end], currString, i) => {
            currString = currString.replaceAll("&nbsp;", " ")
            const trimmedString = currString.trim();
            const noText = trimmedString[0] === undefined; // check if row has no text
            const currStart = noText ? start : currString.indexOf(trimmedString[0]);
            const currEnd = noText ? end : currStart + trimmedString.length;
            // return the smallest start and largest end so far
            return [
                // find smallest starting index
                Math.min(start, currStart),
                // find the largest ending index
                Math.max(end, currEnd),
            ]},
            [Sprite.receiptWidth, 0] // initial start and end
        )
        return {width: end - start, start, end};
    }


    toString() {
        let {left, right} = this.#marginFill;
        if (left === '&nbsp;') left = ' ';
        if (right=== '&nbsp;') right = ' ';
        const filledRows = this.spriteRows.map((row, i) => {
            row = row.replaceAll("&nbsp;", " ");
            row = removeTimestampDelimiters(row); // only useful in our project
            //don't do anything if we are an empty row at the end
            if (row.trim() === "" && this.spriteRows.length - 1 === i) return "";
            // handle left side
            let newRow = row.trimStart();
            newRow = left.repeat(row.length - newRow.length) + newRow;
            // handle right side
            newRow = newRow.trimEnd();
            newRow += right.repeat(Math.max(Sprite.receiptWidth - newRow.length, 0));
            // ensure size
            newRow = newRow.slice(0, Sprite.receiptWidth);
            return newRow.replaceAll(" ", "&nbsp;");
        });
        return filledRows.join("<br/>");
    }

    /**
     * flips this sprite horizontally, replacing all directed characters with their counterparts.
     * For example, '(' is replaced with ')' .
     * @returns {Sprite} this sprite, so we can chain commands
     */
    flipHorizontal() {
        this.spriteRows = this.spriteRows.map(row => {
            //find length, adjusted based on number of non-breaking spaces
            const spaceCount = (row.match(/&nbsp;/g) || []).length;
            const length = row.length - (5*spaceCount);
            const padding = '&nbsp;'.repeat(Math.max(Sprite.receiptWidth - length, 0));

            const flippedRow = row
                .split('').reverse()  // flipped row with spaces and brackets backwards
                .map(char => {  // flip the directed characters
                    switch (char){
                        case '(':
                            return ')';
                        case ')':
                            return '(';
                        case '[':
                            return ']';
                        case ']':
                            return '[';
                        case '{':
                            return '}';
                        case '}':
                            return '{';
                        case '\\':
                            return '/';
                        case '/':
                            return '\\';
                        default:
                            return char;
                    }
                }) // {Character[]}
                .join('')
                .replaceAll(";psbn&", "&nbsp;"); // spaces fixed
            return padding + reverseTimestamps(flippedRow); // reverseTimestamps is only useful for our specific project
        });
        return this; // so we can chain commands
    }

    /**
     * flip this sprite vertically.
     * This method does not turn individual characters (besides slashes) upside down; it only rearranges their positions.
     * @returns {Sprite} this sprite, so we can chain commands
     */
    flipVertical() {
        this.spriteRows = this.spriteRows.reverse() // vertical flip
            .map(row => row.split("").map(char => {  // for each row, flip all slashes
                    switch (char){
                        case '\\':
                            return '/';
                        case '/':
                            return '\\';
                        default:
                            return char;
                    }
                }).join("")
            );
        return this; // so we can chain commands
    }

    /**
     * This method calls `slice` on each row, does not update current sprite
     * Useful if the sprite you are using is too large for your receipt.
     * @param startIndex 0th based index at which to begin, inclusive
     * @param endIndex 0th based index *before* which to end, not inclusive.
     * @return {string[]} sliced sprite rows
     * @see String.slice
     */
    slicedSprite(startIndex, endIndex) {
        if (startIndex < 0 || endIndex < 0) throw new RangeError("Negative Index");
        if (endIndex < startIndex) throw new RangeError("endIndex comes before startIndex");
        return this.spriteRows.map(row => row
            .replaceAll("&nbsp;", " ")
            .slice(startIndex, endIndex)
            .replaceAll(" ", "&nbsp;")
        );
    }

    /**
     * calls sliceSprite and updates current sprite
     * @param startIndex
     * @param endIndex
     * @returns {Sprite} this sprite, so we can chain commands
     * @see Sprite.sliceSprite
     */
    constrictWidth(startIndex, endIndex) {
        this.spriteRows = this.slicedSprite(startIndex, endIndex);
        return this;
    }

    /**
     * set's the characters that will fill in the blank margins on either side of the sprite.
     * @param left
     * @param right
     * @returns {Sprite}
     */
    setMarginFill(left, right) {
        this.#marginFill = {left, right};
        return this;
    }

    /**
     * set sprite alignment
     * @param alignTo "random", "left", "center", or "right
     * @returns {Sprite} this sprite, so we can chain commands
     */
    setAlign(alignTo) {
        this.constrictWidth(0, Sprite.receiptWidth); // make sure sprite is at most as wide as the receipt
        const {width: spriteWidth, start, end} = this.#findWidth(); // find width and position of sprite
        const sprite = this.slicedSprite(start, end); // trimmed sprite
        // figure out where we need to start
        let newStart;
        switch (alignTo) {
            case "random":
                newStart = Math.floor(Math.random() * (Sprite.receiptWidth - spriteWidth));
                break;
            case "left":
                newStart = 0;
                break;
            case "center":
                newStart = Math.floor((Sprite.receiptWidth - spriteWidth)/2);
                break;
            case "right":
                newStart = Sprite.receiptWidth - spriteWidth;
                break;
            default:
                throw new Error("alignTo must be 'left', 'center', or 'right'")
        }
        this.spriteRows = sprite.map(row => numToSpace(newStart) + row);
        return this;
    }

    /**
     * offset the sprite to the left or right. Positive number moves right, negative number moves left.
     * Moving can be destructive to the sprite if it moves past the start or end.
     * @param amount amount to offset by
     * @returns {Sprite} this sprite, so we can chain commands
     */
    offsetBy(amount) {
        if (amount >= 0) this.spriteRows = this.spriteRows.map(row => numToSpace(amount) + row);
        else this.spriteRows = this.spriteRows.map(row =>
            row.replaceAll("&nbsp;", " ")
                .slice(-amount)
                .replaceAll(" ", "&nbsp;")
        );
        return this;
    }

    /**
     * make a deep copy of this sprite (cast as a Sprite)
     */
    copy() {
        return new Sprite(this.spriteRows).setMarginFill(this.#marginFill.left, this.#marginFill.right);
    }
}
