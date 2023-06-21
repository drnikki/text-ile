import Sprite from "../Sprite.js";

const printDotPattern = (rowCount = 9) => {
    let pattern = '';
    let columns = 40;
    let printChar = '';
    for (let x = 0; x < rowCount; x++) {
        printChar = ";";  // 1st row
        if (x % 3 === 0) { // 2nd row
            printChar = ":"
        } else if ( x % 3 === 2) { // 3rd row
            printChar = ".";
        }
        for (let y=0; y < columns; y++) {
            pattern += printChar;
        }
        // when we're here, it's the end of the row
        pattern += "</br>";

    }

    return pattern;
}

export default class DotPattern extends Sprite {
    constructor(rows = 9) {
        super(printDotPattern(rows));
    }
}