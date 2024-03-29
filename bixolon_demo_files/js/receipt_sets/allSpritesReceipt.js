import {printTriangle1, printTriangle2} from "../../../js/sprite/triangles.js";
import printBug from "../../../js/sprite/bug.js";
import {printBasketWeave, printDiamond, printHerringBone, printSeedStitch} from "../../../js/sprite/pattern.js";
import printClouds from "../../../js/sprite/clouds.js";
import {printChandelierA, printChandelierB} from "../../../js/sprite/chandelier.js";
import printTwinkleBanner from "../../../js/sprite/banner.js";
import printStarburst from "../../../js/sprite/starburst.js";
import printRope from "../../../js/sprite/rope.js";
import printMarioCoinBox from "../../../js/sprite/coinBox.js";
import {browserToPrinter} from "../receipt.js";

/**
 * generate 1 or more receipts that each have all the sprites on them
 */

/**
 * associate this set of receipts with a key word
 * @type {string}
 */
const keyword = "allSprites";

/**
 * receipt data in browser-friendly form. an array of strings using &nbsp;'s and <br/>'s
 * @type {String[]}
 */
const browserReceipts = [];


/* number of random receipts to generate */
const numOfReceipts = 2;

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
    browserReceipts.push(textContent);
}


/**
 * receipt data in printer-friendly form. a 2d array of strings using regular spaces and \n
 * @type {String[][]}
 */
const printerReceipts = browserReceipts.map(browserToPrinter);

export default [
    keyword, {
        browserReceipts,
        printerReceipts,
    }
];