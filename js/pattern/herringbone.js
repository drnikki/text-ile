/**
 * print herringbone
 */
const printHerringBone = (rows=9) => {
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

export default printHerringBone;