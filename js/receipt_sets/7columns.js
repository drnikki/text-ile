import {browserToPrinter} from "../receipt.js";
import Chandeliers from "../sprite/Chandeliers.js";
import {Triangle1, Triangle2} from "../sprite/triangles.js";
import {getTimestamp, generateHash, removeTimestampDelimiters} from "../stringManipulation.js";
import Cloud from "../sprite/Cloud.js";
import MarioCoinBox from "../sprite/MarioCoinBox.js";
import Bug from "../sprite/Bug.js";
import Rope from "../sprite/Rope.js";
import TwinkleBanner from "../sprite/TwinkleBanner.js";
import Starburst from "../sprite/Starburst.js";


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
for (let i =0; i<20; i++) receipt1 += (Math.random() < 0.5 ? removeTimestampDelimiters(getTimestamp()) : generateHash()) + `<br/>`;

browserReceipts.push(receipt1);

// receipt 2
let receipt2 = "";
for (let i=0; i<20; i++) receipt2 += new Chandeliers();
browserReceipts.push(receipt2);

// receipt 3
let receipt3 = "";
for (let i=0; i<20; i++) receipt3 += (Math.random() < 0.75 ? new Cloud() : new MarioCoinBox()) + `<br/>`;
browserReceipts.push(receipt3);

// receipt 4
let receipt4 = '';
for (let i=0; i<7; i++) receipt4 += new Triangle1() + new Triangle2() + new Bug() + `<br/>`;
browserReceipts.push(receipt4);

// receipt 5
browserReceipts.push(receipt3);

// receipt 6
browserReceipts.push(receipt2);

// receipt 7
let receipt7 = '';
for (let i=0; i<20; i++) receipt7 += new Rope() + '<br/>';
browserReceipts.push(receipt7);

// receipt 8
let receipt8 = "";
for (let i =0; i<20; i++) receipt8 += (Math.random() < 0 ? new TwinkleBanner().flipHorizontal() : new Starburst()) + `<br/>`;
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


