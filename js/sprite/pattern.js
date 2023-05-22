
/**
 * print the basketweave
 */
export const printBasketWeave = (rows=10) => {
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

/**
 * print herringbone
 */
export const printHerringBone = (rows=9) => {
    const columns = 40;
    const pattern = '}}}--';
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

        // if before halfway point, decrease index by one (creates symmetry)
        if (i < Math.floor(rows / 2)) {
            index--;
        }
        // else, increase index by one
        else {
            index++;
        }
    }
    return ret;
}

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
        if (x % 2 == 1) { // first row
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