import {browserToPrinter} from "../receipt.js";
import {getTimestamp, generateHash, numToSpace, numToChar, reverseString} from "../stringManipulation.js";
import {printBasketWeave, printDiamond, printHerringBone, printSeedStitch} from "../sprite/pattern.js";
import printMarioCoinBox from "../sprite/coinBox.js";
import printStarburst from "../sprite/starburst.js";
import printClouds from "../sprite/clouds.js";
import printTwinkleBanner from "../sprite/banner.js";
import printInkBlot from "../sprite/inkblot.js";
import {printChandelierA, printChandelierB} from "../sprite/chandelier.js";
import {printTriangle1, printTriangle2} from "../sprite/triangles.js";
import printBug from "../sprite/bug.js";
import printRope from "../sprite/rope.js";
import { printDiamondButterfly } from "../sprite/diamondButterfly.js";



/**
 * Use this template to create a file for a new receipt set.
 * Follow the directions in the 4 comments marked TODO.
 */


/**
 * This set is for the second set of banners.
 */


/**
 * TODO 2/4:
 *  1. pick a keyword. Check ./README.md to see which words are already in use
 *  2. add your new keyword to ./README.md
 *
 * associates this set of receipts with a key word
 * @type {string}
 */
const keyword = "iterationTwo";

/**
 * receipt data in browser-friendly form. an array of strings using &nbsp;'s and <br/>'s
 * @type {String[]}
 */
const browserReceipts = [];


/**
 *  TODO 3/4: Generate receipts here and push each receipt to browserReceipts.
 *      (This is where most of your code goes)
 */

/**********************************************************
 * FIRST SET OF SEVEN
 */
let receipt7= '';
for (let i=0; i<20; i++) receipt7 += printRope() + '<br/>';
browserReceipts.push(receipt7);

//  TWO WAVY TIMESTAMPS
let receipt1 = "";
//for (let i =0; i<20; i++) receipt1 += (Math.random() < 0.5 ? printTwinkleBanner(true) : printStarburst()) + `<br/>`;
for (let i =0; i<400; i++) {

    receipt1 += getTimestamp() + numToSpace(14)+ getTimestamp() + `<br/>`;
    receipt1 += numToSpace(2) + getTimestamp() + numToSpace(10)+ getTimestamp() + numToSpace(2) + `<br/>`;
    receipt1 += numToSpace(4)+ getTimestamp() + numToSpace(6)+ getTimestamp() + numToSpace(4) + `<br/>`;
    receipt1 += numToSpace(6)+ getTimestamp() + numToSpace(2)+ getTimestamp() + numToSpace(6) + `<br/>`;
    receipt1 += numToSpace(4)+ getTimestamp() + numToSpace(6)+ getTimestamp() + numToSpace(4) + `<br/>`;
    receipt1 += numToSpace(2)+ getTimestamp() + numToSpace(10)+ getTimestamp() + numToSpace(2) + `<br/>`;
    receipt1 += getTimestamp() + numToSpace(14)+ getTimestamp() + `<br/>`;

}
browserReceipts.push(receipt1);



// receipt 2 - LINES THEN timestamps 
// DO NOT EDIT - duplicate and change.
let receipt2 = "";
for (let i =0; i<50; i++) {
    receipt2 += numToChar(27, "-") + getTimestamp() +   `<br/>`;
    receipt2 +=  numToChar(25, "-") +   getTimestamp() + numToSpace(2) + `<br/>`;
    receipt2 +=  numToChar(23, "-") +   getTimestamp() + numToSpace(4) +`<br/>`;
    receipt2 +=  numToChar(21, "-") +   getTimestamp() + numToSpace(6) + `<br/>`;
    receipt2 +=  numToChar(23, "-") +   getTimestamp() + numToSpace(4) + `<br/>`;
    receipt2 +=  numToChar(25, "-") +   getTimestamp() + numToSpace(2) + `<br/>`;
    receipt2 += numToChar(27, "-") + getTimestamp()  +  `<br/>`;    
}
browserReceipts.push(receipt2);

let receipt4 = "";
receipt4 = numToSpace(40);
for (let i=0; i<100; i++) receipt4 += (printClouds('-', 1, 15)) + `<br/>`;
browserReceipts.push(receipt4)




// receipt 2 - LINES THEN timestamps 
// DO NOT EDIT - duplicate and change.
let receipt2 = "";
for (let i =0; i<50; i++) {
    receipt2 += numToChar(27, "-") + getTimestamp() +   `<br/>`;
    receipt2 +=  numToChar(25, "-") +   getTimestamp() + numToSpace(2) + `<br/>`;
    receipt2 +=  numToChar(23, "-") +   getTimestamp() + numToSpace(4) +`<br/>`;
    receipt2 +=  numToChar(21, "-") +   getTimestamp() + numToSpace(6) + `<br/>`;
    receipt2 +=  numToChar(23, "-") +   getTimestamp() + numToSpace(4) + `<br/>`;
    receipt2 +=  numToChar(25, "-") +   getTimestamp() + numToSpace(2) + `<br/>`;
    receipt2 += numToChar(27, "-") + getTimestamp()  +  `<br/>`;    
}
browserReceipts.push(receipt2);
















/**
 * receipt data in printer-friendly form. a 2d array of strings using regular spaces and \n
 * @type {String[][]}
 */
const printerReceipts = browserReceipts.map(browserToPrinter);

/**
 * export for use in receipt.js
 */

export default [
    keyword, {
        browserReceipts,
        printerReceipts,
    }
];

/**
 * TODO 4/4:
 *  1. Import your set of receipts in ../receipt.js
 *  2. Add your set to the receiptSets list in ../receipt.js
 */

