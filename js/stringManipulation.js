import sha1 from "./sha1.min.js";

/**
 * a bunch of helper functions for string manipulation that can be reused throughout the project
 */

/**
 * This helper function just converts a number to nonbreaking spaces.
 * That's all it does
 */
export function numToSpace(howMany) {
  // convert # to spaces
  let prefix = "";
  for (let s = 0; s < howMany; s++) {
    prefix += "&nbsp;";
  }

  return prefix;
}
/*
 * This helper function just converts a number to a repeating character
 * That's all it does
 */
export function numToChar(howMany, whatChar) {
  // convert # to characters
  let prefix = "";
  for (let s = 0; s < howMany; s++) {
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
  const rows1 = block1.split(/<\s*\/?\s*br\s*\/?\s*>/);
  let rows2 = block2.split(/<\s*\/?\s*br\s*\/?\s*>/);

  // band-aid to fix an error
  const diff = rows2.length - rows1.length;
  if (diff > 0) rows2 = rows2.slice(0, rows2.length - diff);

  if (rows1.length !== rows2.length)
    throw new Error(
      `blocks must have same number of rows; got ${rows1.length} and ${rows2.length}`
    );
  return rows1.map((row, i) => row + rows2[i]).join("<br/>");
};

/**
 * This function returns a random timestamp between now (aka before the HASTAC conference) and the rough date of its founding: 2003.
 */
export function getTimestamp() {
  const hastacFounding = new Date("January 1, 2003"); // keeping this human readable in case it needs to change.
  const end = Date.now(); // this one too.

  // note that we don't need to getTime() from end because it's above.
  return new Date(
    hastacFounding.getTime() + Math.random() * (end - hastacFounding.getTime())
  ).getTime();
}

/**
 * Generates a hash.
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

// I copied this from stack overflow
// https://stackoverflow.com/a/46067228
export function mergeString(str1, str2) {
  var a = str1.split("").filter(Boolean);
  var b = str2.split("");
  var mergedString = "";

  for (var i = 0; i < a.length || i < b.length; i++) {
    //loop condition checks if i is less than a.length or b.length
    if (i < a.length)
      //if i is less than a.length add a[i] to string first.
      mergedString += a[i];
    if (i < b.length)
      //if i is less than b.length add b[i] to string.
      mergedString += b[i];
  }

  return mergedString;
}

/**
 * add a number of spaces to each row
 * @param rows {string[]}
 * @param width {number} number of spaces
 * @returns {string[]}
 */
const addHorizontalSpaceToRows = (rows, width) =>
  rows.map((row) => (row ? " ".repeat(width) + row : row));

/**
 * returns string 2 with any space replaced by corresponding character in string 1
 * @param str1
 * @param str2
 */
const imposeStrings = (str1, str2) =>
  str2
    .split("")
    .map((char, i) => (char === " " && i < str1.length ? str1.charAt(i) : char))
    .join("");

/**
 * impose string block2 on top of string block1. assumes whitespace in the form of &nbsp;'s .
 * @author Michael Crockett
 * @param {string} block1 a string made up of rows that are separated by <br> tags
 * @param {string} block2 a string made up of rows that are separated by <br> tags
 * @return {string} blocks imposed
 */
export function imposeBlocks(block1, block2, offsetX = 0, offsetY = 0) {
  //split up both blocks
  let rows1 = block1.replaceAll("&nbsp;", " ").split(/<\s*\/?\s*br\s*\/?\s*>/);
  let rows2 = block2.replaceAll("&nbsp;", " ").split(/<\s*\/?\s*br\s*\/?\s*>/);

  // add horizontal space as needed
  if (offsetX > 0)
    rows2 = addHorizontalSpaceToRows(
      rows2,
      offsetX
    ); // add horizontal space to block2
  else if (offsetX < 0) rows1 = addHorizontalSpaceToRows(rows1, -offsetX); // add horizontal space to block1

  // add vertical space as needed
  if (offsetY > 0)
    // add vertical space to block1
    for (let i = 0; i < offsetY; i++) rows1.unshift("");
  else if (offsetY < 0) for (let i = 0; i < -offsetY; i++) rows2.unshift(""); // add vertical space to block2

  // impose
  const imposedRows = [];

  // add first unconflicting part
  if (offsetY > 0) for (let i = 0; i < offsetY; i++) imposedRows[i] = rows2[i];
  else {
    offsetY *= -1;
    for (let i = 0; i < offsetY; i++) imposedRows[i] = rows1[i];
  }

  // find end of conflict
  const eoc = Math.min(rows1.length, rows2.length);

  // add conflicting part
  if (offsetX > 0)
    for (let i = offsetY; i < eoc; i++)
      imposedRows[i] =
        rows1[i].slice(0, offsetX) +
        (rows1[i].length < offsetX
          ? " ".repeat(offsetX - rows1[i].length)
          : "") + // fill it in with space if there's not enough here
        imposeStrings(rows1[i].slice(offsetX), rows2[i].slice(offsetX)) +
        rows1[i].slice(rows2[i].length);
  else
    for (let i = offsetY; i < eoc; i++)
      imposedRows[i] =
        imposeStrings(rows1[i], rows2[i]) + rows1[i].slice(rows2[i].length);

  // add last non-conflicting part
  if (rows1.length > rows2.length)
    for (let i = eoc; i < rows1.length; i++) imposedRows[i] = rows1[i];
  else for (let i = eoc; i < rows2.length; i++) imposedRows[i] = rows2[i];

  return imposedRows.map((row) => row.replaceAll(" ", "&nbsp;")).join("<br/>");
}

// helper function to get a random int within a certain range
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * helper function to count the number of characters in a string
 * assuming it has HTML and nonbreaking spaces in it.
 */
export function countCharacters(charString) {
  // 1. replace all nbsp; with " "
  var clean = charString.replaceAll("&nbsp;", " ");
  // strip any HTML (just in case)
  const regex = /(<([^>]+)>)/gi;
  clean = clean.replace(regex, "");
  return clean.length;
}
