import {getTimestamp, numToChar, numToSpace} from "../../stringManipulation.js";
import Sprite from "../Sprite.js";

/**
 * Print the timestamp + lines wavy pattern
 *
 * @param {number} rowCount
 * @param {boolean} linesFirst bool for whether lines come first.
 * @returns
 */
export function printTimeLines(linesFirst = true, rowCount = 10) {
    let receipt = '';

    if (linesFirst) {
        for (let i =0; i<rowCount; i++) {
            receipt += numToChar(27, "-") + getTimestamp() +   `<br/>`;
            receipt +=  numToChar(25, "-") +   getTimestamp() + numToSpace(2) + `<br/>`;
            receipt +=  numToChar(23, "-") +   getTimestamp() + numToSpace(4) +`<br/>`;
            receipt +=  numToChar(21, "-") +   getTimestamp() + numToSpace(6) + `<br/>`;
            receipt +=  numToChar(23, "-") +   getTimestamp() + numToSpace(4) + `<br/>`;
            receipt +=  numToChar(25, "-") +   getTimestamp() + numToSpace(2) + `<br/>`;
            receipt += numToChar(27, "-") + getTimestamp()  +  `<br/>`;
        }
        // BYEEE
        return receipt;
    }

    // else
    for (let i =0; i<rowCount; i++) {
        receipt += getTimestamp() + numToChar(27, "-") +  `<br/>`;
        receipt += numToSpace(2) + getTimestamp() + numToChar(25, "-") +    `<br/>`;
        receipt += numToSpace(4) + getTimestamp() + numToChar(23, "-") +   `<br/>`;
        receipt += numToSpace(6) + getTimestamp() + numToChar(21, "-") +    `<br/>`;
        receipt += numToSpace(4) + getTimestamp() + numToChar(23, "-") +    `<br/>`;
        receipt += numToSpace(2) + getTimestamp() + numToChar(25, "-") +    `<br/>`;
        receipt += getTimestamp() + numToChar(27, "-") + `<br/>`;
    }
    // BYEEE
    return receipt;
}

export default class TimeLines extends Sprite {
    constructor(linesFirst = true, rowCount = 10) {
        super(printTimeLines(linesFirst, rowCount));
    }
}