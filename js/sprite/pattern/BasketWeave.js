import Sprite from "../Sprite.js";

/**
 * print the basketweave
 */
const printBasketWeave = (rows=10) => {
    const columns = 40;
    const pattern = '--|';
    let ret = '';
    let index = 0;

    // iterate through number of rows and columns
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            // take current index of pattern string mod pattern string length and to return string
            ret += pattern[index % pattern.length];
            index++;
        }
        ret += '<br/>';
        index++;
    }
    return ret;
}

export default class BasketWeave extends Sprite {
    constructor(rows=10) {
        super(printBasketWeave(rows));
    }
}