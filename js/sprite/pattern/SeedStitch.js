import Sprite from "../Sprite.js";
/**
 * print seed stitch pattern
 */
export function printSeedStitch(rowCount = 10) {
    let line = '';
    let columns = 40;
    let pattern = '';
    let printChar = '';
    for (let x = 0; x < rowCount; x++) {
        printChar = "[-]";
        if (x % 2 === 1) { // first row
            printChar = "-I-"
        }
        while (line.length < columns -1) {
            line += printChar;
        }

        // when we're here, it's the end of the row
        pattern += line + "</br>";
        line = '';
    }

    return pattern;
}

export default class SeedStitch extends Sprite {
    constructor(rows = 10) {
        super(printSeedStitch(rows));
    }
}