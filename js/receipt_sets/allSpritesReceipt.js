import {printTriangle1, printTriangle2} from "../sprite/triangles.js";
import printBug from "../sprite/Bug.js";
import {printBasketWeave, printDiamond, printDotPattern, printHerringBone, printSeedStitch} from "../sprite/pattern/patterns.js";
import printClouds from "../sprite/Cloud.js";
import {printChandelierA, printChandelierB} from "../sprite/Chandeliers.js";
import printTwinkleBanner from "../sprite/TwinkleBanner.js";
import printStarburst from "../sprite/Starburst.js";
import printRope from "../sprite/Rope.js";
import printMarioCoinBox from "../sprite/MarioCoinBox.js";
import {browserToPrinter} from "../receipt.js";
import { printDiamondButterfly } from "../sprite/DiamondButterfly.js";
import printChevron from "../sprite/Chevron.js";
import printBird from "../sprite/Bird.js";
import printPeteca from "../sprite/Peteca.js";
import { printPanda } from "../sprite/Panda.js";

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
const numOfReceipts = 6;

for (let i = 0; i < numOfReceipts; i++) {
    let textContent = ''; // this is what prints on the receipt.
    for (let y = 0; y < 5; y++) {
        textContent += printPanda() + '<br/>';
        textContent += printTriangle1() + '<br/>';
        textContent += printTriangle2() + '<br/>';
        textContent += printBug() + "<br/>";
        textContent += printSeedStitch(3);
        textContent += printClouds("&nbsp;", 1, 10);
        textContent += "<br/><br/>";
        textContent += printChandelierA();
        textContent += printChandelierB() + "<br/>";
        textContent += printTwinkleBanner() + "<br/>";
        textContent += printStarburst() + "<br/>";
        textContent += printRope() + "<br/>";
        textContent += printBasketWeave() + "<br/>";
        textContent += printHerringBone() + "<br/>";
        textContent += printDiamond() + "<br/>";
        textContent += printDotPattern() + "<br/>";
        textContent += printMarioCoinBox() + "<br/>";
        textContent += printDiamondButterfly() + "<br/>";
        textContent += printChevron() + "<br/>";
        textContent += printBird() + "<br/>";
        textContent += printPeteca() + "<br/>";
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