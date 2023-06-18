import {getTimestamp, numToSpace} from "../../stringManipulation.js";
import Sprite from "../Sprite.js";

export function printTimestampWaves() {
    let receiptTimestampWaves = "";
    receiptTimestampWaves += getTimestamp() + numToSpace(14)+ getTimestamp() + `<br/>`;
    receiptTimestampWaves += numToSpace(2) + getTimestamp() + numToSpace(10)+ getTimestamp() + numToSpace(2) + `<br/>`;
    receiptTimestampWaves += numToSpace(4)+ getTimestamp() + numToSpace(6)+ getTimestamp() + numToSpace(4) + `<br/>`;
    receiptTimestampWaves += numToSpace(6)+ getTimestamp() + numToSpace(2)+ getTimestamp() + numToSpace(6) + `<br/>`;
    receiptTimestampWaves += numToSpace(4)+ getTimestamp() + numToSpace(6)+ getTimestamp() + numToSpace(4) + `<br/>`;
    receiptTimestampWaves += numToSpace(2)+ getTimestamp() + numToSpace(10)+ getTimestamp() + numToSpace(2) + `<br/>`;
    receiptTimestampWaves += getTimestamp() + numToSpace(14)+ getTimestamp() + `<br/>`;

    return receiptTimestampWaves;
}

export default class TimestampWaves extends Sprite {
    constructor() {
        super(printTimestampWaves());
    }
}