import {getTimestamp, numToChar, numToSpace} from "../../stringManipulation.js";
import Sprite from "../Sprite.js";

/**
 * Print the timestamp + lines wavy pattern
 *
 * @param {number} rowCount
 * @returns
 */
function printTimeLines(rowCount = 10) {
    let receipt = '';

    for (let i =0; i<rowCount; i++) {
        receipt += numToSpace(27) + getTimestamp() +   `<br/>`;
        receipt +=  numToSpace(25) +   getTimestamp() + numToSpace(2) + `<br/>`;
        receipt +=  numToSpace(23) +   getTimestamp() + numToSpace(4) +`<br/>`;
        receipt +=  numToSpace(21) +   getTimestamp() + numToSpace(6) + `<br/>`;
        receipt +=  numToSpace(23) +   getTimestamp() + numToSpace(4) + `<br/>`;
        receipt +=  numToSpace(25) +   getTimestamp() + numToSpace(2) + `<br/>`;
        receipt += numToSpace(27) + getTimestamp()  +  `<br/>`;
    }
    return receipt;

}

export default class TimeLines extends Sprite {
    constructor(rowCount = 10) {
        super(printTimeLines(rowCount));
        this.setMarginFill("-", " ");
    }
}