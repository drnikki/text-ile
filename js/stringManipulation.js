import sha1 from "./sha1.min.js"

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
/*
* This helper function just converts a number to a repeating character
* That's all it does
*/
export function numToChar(howMany,whatChar) {
    // convert # to characters
    let prefix = '';
    for (let s =0; s < howMany; s++) {
        prefix += whatChar;
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

/**
 * This function returns a random timestamp betwen now (aka before the HASTAC conference) and the rough date of its founding: 2003.
 */
export function getTimestamp() {
    const hastacFounding = new Date("January 1, 2003"); // keeping this human readable in case it needs to change.
    const end = Date.now(); // this one too.

    // note that we don't need to getTime() from end because it's above.  
    return new Date(hastacFounding.getTime() + Math.random() * (end - hastacFounding.getTime())).getTime();
  }

/**
 * Generates a hash using 
 * 
 * @returns a 40 character sha1 hash
 */
export function generateHash() {
    const array = new Uint32Array(10);
    // we love cryptographically strong randoms.
    const vals = crypto.getRandomValues(array);

    return sha1(vals);
 }


 // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
// I took this. from ^ because we might not even reverse strings in the final one
// we might be using arrays or other things, TBD.
export function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}