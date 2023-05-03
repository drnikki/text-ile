import {printTriangle1, printTriangle2} from "../../js/sprite/triangles.js";
import printBug from "../../js/sprite/bug.js";
import {printBasketWeave, printDiamond, printHerringBone, printSeedStitch} from "../../js/sprite/pattern.js";
import printClouds from "../../js/sprite/clouds.js";
import {printChandelierA, printChandelierB} from "../../js/sprite/chandelier.js";
import printTwinkleBanner from "../../js/sprite/banner.js";
import printStarburst from "../../js/sprite/starburst.js";
import printRope from "../../js/sprite/rope.js";
import printMarioCoinBox from "../../js/sprite/coinBox.js";


/**
 *  this file is used to generate the receipts for shapes-beta.html.
 *  It exports two arrays of receipt data (each element is a single receipt).
 *
 *  Currently generating random receipts.
 */


/* number of random receipts to generate */
const numOfReceipts = 2;

/**
 * receipt data in browser-friendly form. an array of strings using &nbsp;'s and <br/>'s
 * @type {String[]}
 */
export const textContentBrowser = [];

/**
 * receipt data in printer-friendly form. a 2d array of strings using regular spaces and \n
 * @type {String[][]}
 */
export const textContentPrinter = [];

for (let i = 0; i < numOfReceipts; i++) {
    let textContent = ''; // this is what prints on the receipt.
    for (let y = 0; y < 5; y++) {
        textContent += printTriangle1() + '<br/>';
        textContent += printTriangle2() + '<br/>';
        textContent += printBug() + "<br/>";
        textContent += printSeedStitch(3);
        textContent += printClouds();
        textContent += "<br/><br/>";
        textContent += printChandelierA();
        textContent += printChandelierB() + "<br/>";
        textContent += printTwinkleBanner() + "<br/>";
        textContent += printStarburst() + "<br/>";
        textContent += printRope() + "<br/>";
        textContent += printBasketWeave() + "<br/>";
        textContent += printHerringBone() + "<br/>";
        textContent += printDiamond() + "<br/>";
        textContent += printMarioCoinBox() + "<br/>";
    }
    textContentBrowser.push(textContent);
    textContentPrinter.push(browserToReceipt(textContent));
}

/**
 * takes a string of browser-friendly receipt data and turns it into a printer-friendly array of receipt lines.
 * converts non-breaking spaces to regular spaces and break tags to \n. It also separates every line of textContent
 * to an element of the returned array.
 * @param textContent browser-friendly data
 * @returns {string[]} printer-friendly data
 */
function browserToReceipt ( textContent ) {
    const rows = textContent.split(/<\s*\/?\s*br\s*\/?\s*>/); // < (spaces) (possible /) (spaces) br (repeat as before) >
    return rows.map(row => row.replaceAll('&nbsp;', ' ') + '\n');
}

