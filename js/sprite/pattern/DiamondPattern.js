import Sprite from "../Sprite.js";

/**
 * print diamond
 */
export const printDiamond = (rows=10) => {
    const columns = 40;
    let pattern = "//\\\\"
    let ret = '';
    let index = 0;

    // iterate through columns and rows
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            // take current index of pattern string mod pattern string length and to return string
            ret += pattern[index % pattern.length];
            index++;
        }
        ret += '<br/>';

        // if at halfway point, change pattern to three slashes and decrease index by one
        if (i >= Math.floor(rows / 2) - 1) {
            pattern = "///\\\\\\";
            index--;
        }
        // else, increase index by 2
        else {
            index += 2;
        }
    }
    return ret
}

export default class DiamondPattern extends Sprite {
    constructor(rows = 10) {
        super(printDiamond(rows));
    }
}