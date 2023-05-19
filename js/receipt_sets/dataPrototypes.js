import {browserToPrinter} from "../receipt.js";
import {getTimestamp, generateHash, numToSpace, numToChar} from "../stringManipulation.js";
import {printBasketWeave, printDiamond, printHerringBone, printSeedStitch} from "../sprite/pattern.js";
import printMarioCoinBox from "../sprite/coinBox.js";
import printStarburst from "../sprite/starburst.js";
import printClouds from "../sprite/clouds.js";
import printTwinkleBanner from "../sprite/banner.js";

/**
 * This set of receipts is an experimental set to visualize some new
 * data-rich layouts
 */


/**
 * TODO 2/4:
 *  1. pick a keyword. Check ./README.md to see which words are already in use
 *  2. add your new keyword to ./README.md
 *
 * associates this set of receipts with a key word
 * @type {string}
 */
const keyword = "dataPrototypes";

/**
 * receipt data in browser-friendly form. an array of strings using &nbsp;'s and <br/>'s
 * @type {String[]}
 */
const browserReceipts = [];


/**
 *  create each of the seven receipts
 */

// receipt 1 - TIMESTAMPS
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

// receipt 2 - just timestamps!
let receipt2 = "";
//for (let i =0; i<20; i++) receipt1 += (Math.random() < 0.5 ? printTwinkleBanner(true) : printStarburst()) + `<br/>`;
for (let i =0; i<400; i++) {
    receipt2 += getTimestamp() + numToChar(27, "-") +  `<br/>`;
    receipt2 += numToSpace(2) + getTimestamp() + numToChar(25, "-") +  `<br/>`;
    receipt2 += numToSpace(4)+ getTimestamp() + numToChar(23, "-") + `<br/>`;
    receipt2 += numToSpace(6)+ getTimestamp() + numToChar(21, "-") +  `<br/>`;
    receipt2 += numToSpace(4)+ getTimestamp() + numToChar(23, "-") +  `<br/>`;
    receipt2 += numToSpace(2)+ getTimestamp() + numToChar(25, "-") +  `<br/>`;
    receipt2 += getTimestamp()  + numToChar(27, "-") + `<br/>`;

    
}
browserReceipts.push(receipt2);


// receipt 4 - what does it look like when we put "data" alongside sprites?
let receipt4 = "";
for (let i=0; i<20; i++) receipt4 += (printClouds()) + `<br/>`;
browserReceipts.push(receipt4);



// // receipt 5
// browserReceipts.push(receipt3);

// // receipt 6
// browserReceipts.push(receipt2);

// // receipt 7
let receipt7 = '';
for (let i=0; i<5; i++) {
    receipt7 += printStarburst() + '<br/>';
    }
browserReceipts.push(receipt7);

// receipt 8
let receipt8 = "";
for (let i =0; i<20; i++) {
    receipt8 += printTwinkleBanner(false) + `<br/>`;
}
browserReceipts.push(receipt8);


// receipt 3 - this is a demo of all of the patterns and how they can take
// args for # of lines.
let receipt3 = "";
for (let i =0; i<400; i++) {
    // LOLOL i know, it's just for testing!
    receipt3 += generateHash() + `<br/>` + generateHash() + `<br/>` + generateHash() + `<br/>` + generateHash() + `<br/>` + generateHash() + `<br/>` + generateHash() + `<br/>`;
    receipt3 += printDiamond(2);
    receipt3 += printBasketWeave(3);
    receipt3 += printDiamond(2);

}
browserReceipts.push(receipt3);

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

