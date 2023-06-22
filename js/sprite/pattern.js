import { getTimestamp, numToSpace, numToChar } from "../stringManipulation.js";

/**
 * print the basketweave
 */
export const printBasketWeave = (rows = 10) => {
  const columns = 40;
  const pattern = "--|";
  let ret = "";
  let index = 0;

  // iterate through number of rows and columns
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // take current index of pattern string mod pattern string length and to return string
      ret += pattern[index % pattern.length];
      index++;
    }
    ret += "<br/>";
    index++;
  }
  return ret;
};

/**
 * print herringbone
 */
export const printHerringBone = (rows = 9) => {
  const columns = 40;
  const pattern = "}}}--";
  let ret = "";
  let index = 0;

  // iterate through number of rows and columns
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // take current index of pattern string mod pattern string length and to return string
      ret += pattern[index % pattern.length];
      index++;
    }
    ret += "<br/>";

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
};

/**
 * print diamond
 */
export const printDiamond = (rows = 10) => {
  const columns = 40;
  let pattern = "//\\\\";
  let ret = "";
  let index = 0;

  // iterate through columns and rows
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // take current index of pattern string mod pattern string length and to return string
      ret += pattern[index % pattern.length];
      index++;
    }
    ret += "<br/>";

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
  return ret;
};

export const printDotPattern = (rowCount = 9) => {
  let pattern = "";
  let columns = 40;
  let printChar = "";
  for (let x = 0; x < rowCount; x++) {
    printChar = ";"; // 1st row
    if (x % 3 === 0) {
      // 2nd row
      printChar = ":";
    } else if (x % 3 === 2) {
      // 3rd row
      printChar = ".";
    }
    for (let y = 0; y < columns; y++) {
      pattern += printChar;
    }
    // when we're here, it's the end of the row
    pattern += "</br>";
  }

  return pattern;
};

/**
 * print seed stitch pattern
 */
export function printSeedStitch(rowCount = 10) {
  let line = "";
  let columns = 40;
  let pattern = "";
  let printChar = "";
  for (let x = 0; x < rowCount; x++) {
    printChar = "[-]";
    if (x % 2 == 1) {
      // first row
      printChar = "-I-";
    }
    while (line.length < columns - 1) {
      line += printChar;
    }

    // when we're here, it's the end of the row
    pattern += line + "</br>";
    line = "";
  }

  return pattern;
}

export function printGradientFloor() {
  return (
    "########################################" +
    "<br/>" +
    "*** ******* ******* ******* ******* ****" +
    "<br/>" +
    "xxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxx" +
    "<br/>" +
    ";;;;; ;;;;;;; ;;;;;;; ;;;;;;; ;;;;;;; ;;" +
    "<br/>" +
    ":::::: ::::::: ::::::: ::::::: ::::::: :" +
    "<br/>" +
    "&nbsp;....... ....... ....... ....... ....... " +
    "<br/>" +
    "&nbsp;"
  );
}

export function printTimestampWaves() {
  let receiptTimestampWaves = "";
  receiptTimestampWaves +=
    getTimestamp() + numToSpace(14) + getTimestamp() + `<br/>`;
  receiptTimestampWaves +=
    numToSpace(2) +
    getTimestamp() +
    numToSpace(10) +
    getTimestamp() +
    numToSpace(2) +
    `<br/>`;
  receiptTimestampWaves +=
    numToSpace(4) +
    getTimestamp() +
    numToSpace(6) +
    getTimestamp() +
    numToSpace(4) +
    `<br/>`;
  receiptTimestampWaves +=
    numToSpace(6) +
    getTimestamp() +
    numToSpace(2) +
    getTimestamp() +
    numToSpace(6) +
    `<br/>`;
  receiptTimestampWaves +=
    numToSpace(4) +
    getTimestamp() +
    numToSpace(6) +
    getTimestamp() +
    numToSpace(4) +
    `<br/>`;
  receiptTimestampWaves +=
    numToSpace(2) +
    getTimestamp() +
    numToSpace(10) +
    getTimestamp() +
    numToSpace(2) +
    `<br/>`;
  receiptTimestampWaves +=
    getTimestamp() + numToSpace(14) + getTimestamp() + `<br/>`;

  return receiptTimestampWaves;
}

/**
 * Print the timestamp + lines wavy pattern
 * 
 * @param {*} rowCount 
 * @param {*} linesFirst bool for whether lines come first.

 */
export function printTimeLines(linesFirst = 1, rowCount = 10) {
  let receipt = "";

  if (linesFirst) {
    for (let i = 0; i < rowCount; i++) {
      receipt += numToChar(27, "-") + getTimestamp() + `<br/>`;
      receipt += numToChar(25, "-") + getTimestamp() + numToSpace(2) + `<br/>`;
      receipt += numToChar(23, "-") + getTimestamp() + numToSpace(4) + `<br/>`;
      receipt += numToChar(21, "-") + getTimestamp() + numToSpace(6) + `<br/>`;
      receipt += numToChar(23, "-") + getTimestamp() + numToSpace(4) + `<br/>`;
      receipt += numToChar(25, "-") + getTimestamp() + numToSpace(2) + `<br/>`;
      receipt += numToChar(27, "-") + getTimestamp() + `<br/>`;
    }
    // BYEEE
    return receipt;
  }

  // else
  for (let i = 0; i < rowCount; i++) {
    receipt += getTimestamp() + numToChar(27, "-") + `<br/>`;
    receipt += numToSpace(2) + getTimestamp() + numToChar(25, "-") + `<br/>`;
    receipt += numToSpace(4) + getTimestamp() + numToChar(23, "-") + `<br/>`;
    receipt += numToSpace(6) + getTimestamp() + numToChar(21, "-") + `<br/>`;
    receipt += numToSpace(4) + getTimestamp() + numToChar(23, "-") + `<br/>`;
    receipt += numToSpace(2) + getTimestamp() + numToChar(25, "-") + `<br/>`;
    receipt += getTimestamp() + numToChar(27, "-") + `<br/>`;
  }
  // BYEEE
  return receipt;
}
