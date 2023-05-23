import {browserToPrinter} from "../receipt.js";
import printTwinkleBanner from "../sprite/banner.js";
import printStarburst from "../sprite/starburst.js";
import {printChandelierA, printChandelierB} from "../sprite/chandelier.js";
import printClouds from "../sprite/clouds.js";
import printMarioCoinBox from "../sprite/coinBox.js";
import {printTriangle1, printTriangle2} from "../sprite/triangles.js";
import printBug from "../sprite/bug.js";
import printRope from "../sprite/rope.js";
import {getTimestamp, generateHash} from "../stringManipulation.js";


/**
 * displays 7 unique columns
 */


/**
 * associates this set of receipts with a key word
 * @type {string}
 */
const keyword = "7_columns";

/**
 * receipt data in browser-friendly form. an array of strings using &nbsp;'s and <br/>'s
 * @type {String[]}
 */
const browserReceipts = [];


/**
 *  create each of the seven receipts
 */

// receipt 1
let receipt1 = "";
//for (let i =0; i<20; i++) receipt1 += (Math.random() < 0.5 ? printTwinkleBanner(true) : printStarburst()) + `<br/>`;
for (let i =0; i<20; i++) receipt1 += (Math.random() < 0.5 ? getTimestamp() : generateHash()) + `<br/>`;

browserReceipts.push(receipt1);

// receipt 2
let receipt2 = "";
for (let i=0; i<20; i++) receipt2 += printChandelierA() +  printChandelierB();
browserReceipts.push(receipt2);

// receipt 3
let receipt3 = "";
for (let i=0; i<20; i++) receipt3 += (Math.random() < 0.75 ? printClouds('+, 10, 20') : printMarioCoinBox()) + `<br/>`;
browserReceipts.push(receipt3);

// receipt 4
let receipt4 = '';
for (let i=0; i<7; i++) receipt4 += printTriangle1() + printTriangle2() + printBug() + `<br/>`;
browserReceipts.push(receipt4);

// receipt 5
browserReceipts.push(receipt3);

// receipt 6
browserReceipts.push(receipt2);

// receipt 7
let receipt7 = '';
for (let i=0; i<20; i++) receipt7 += printRope() + '<br/>';
browserReceipts.push(receipt7);

// receipt 8
let receipt8 = "";
for (let i =0; i<20; i++) receipt8 += (Math.random() < 0 ? printTwinkleBanner(false) : printStarburst()) + `<br/>`;
browserReceipts.push(receipt8);

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


