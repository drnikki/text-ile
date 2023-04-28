/**
 * a bunch of helper functions for string manipulation that can be reused throughout the project
 */

/**
 * This helper function just converts a number to nonbreaking spaces.
 * That's all it does
 */
export function numToSpace(howMany) {
    // convert # to spaces
    let prefix = '';
    for (let s =0; s < howMany; s++) {
        prefix += "&nbsp;";
    }

    return prefix;
}

// this helper function generates a random number between a min and a max
// and returns that # in spaces
export function randomSpacer(min, max) {
    let theNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return numToSpace(theNumber);
}


/**
 * adds two blocks of text together side by side (must be the same number of rows)
 */
export const addBlocks = (block1, block2) => {
    //split up both blocks
    const rows1 = block1.split('<br/>');
    let rows2 = block2.split('<br/>');

    // band-aid to fix an error
    const diff = rows2.length - rows1.length;
    if (diff > 0) rows2 = rows2.slice(0, rows2.length - diff);

    if (rows1.length !== rows2.length) throw new Error(`blocks must have same number of rows; got ${rows1.length} and ${rows2.length}`);
    return rows1.map((row, i) => row + rows2[i]).join('<br/>');
};
