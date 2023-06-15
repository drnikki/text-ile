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
    get sprite() {
        return this.#spriteText;
    }

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
                .replaceAll(";psbn&", "&nbsp;") // spaces fixed
            flippedRows.push(padding + flippedRow);
        });
        this.#spriteText =  flippedRows.join('<br/>'); // set updated text
        return this; // so we can chain commands
    }
}
