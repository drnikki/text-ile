import {br} from "../stringManipulation.js";

/**
 * a class to standardize sprite creation and manipulation
 * @author Michael Crockett
 */

export default class Sprite {
    static receiptWidth = 40;
    /**
     * The characters that make up the sprite.
     * Spaces should be non-breaking (represented by `&nbsp;`) and line breaks should be break tags `<br/>`.
     * @type {String}
     */
    #spriteText;

    /**
     * @param spriteText {String} The characters that make up the sprite.
     *  Spaces should be non-breaking (represented by `&nbsp;`) and line breaks should be break tags `<br/>`.
     */
    constructor(spriteText) {
        this.#spriteText = spriteText;
    }

    /**
     * get the string of the sprite
     * @returns {String}
     */
    get spriteText() {
        return this.#spriteText;
    }

    /**
     * flips this sprite horizontally, replacing all directed characters with their counterparts.
     * For example, '(' is replaced with ')' .
     * @returns {Sprite} this sprite, so we can chain commands
     */
    flipHorizontal() {
        const rows = this.#spriteText.split(br);
        let flippedRows = [];
        rows.forEach(row => {
            //find length, adjusted based on number of non-breaking spaces
            const spaceCount = (row.match(/&nbsp;/g) || []).length;
            const length = row.length - (5*spaceCount);
            const padding = '&nbsp;'.repeat(Sprite.receiptWidth - length);

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
            flippedRows.push(padding + flippedRow);
        });
        this.#spriteText =  flippedRows.join('<br/>'); // set updated text
        return this; // so we can chain commands
    }

    /**
     * flip this sprite vertically.
     * This method does not turn individual characters (besides slashes) upside down; it only rearranges their positions.
     * @returns {Sprite} this sprite, so we can chain commands
     */
    flipVertical() {
        this.#spriteText = this.#spriteText.split(br)
            .reverse() // vertical flip
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
            )
            .join('<br/>');
        return this; // so we can chain commands
    }

    /**
     * This method constricts the width of the sprite by calling `slice` on each row.
     * Useful if the sprite you are using is too large for your receipt.
     * @param startIndex 0th based index at which to begin, inclusive
     * @param endIndex 0th based index *before* which to end, not inclusive.
     *  Using a negative index can lead to some wierd behavior if rows are of different lengths.
     * @returns {Sprite} this sprite, so we can chain commands
     * @see String.slice
     */
    constrictWidth(startIndex, endIndex) {
        this.#spriteText = this.#spriteText.split(br)
            .map(row => row
                .replaceAll("&nbsp;", " ")
                .slice(startIndex, endIndex)
                .replaceAll(" ", "&nbsp;")
            ).join("<br/>");
        return this; // so we can chain commands
    }
}
