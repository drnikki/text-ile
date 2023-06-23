import {browserToPrinter} from "../receipt.js";
import Panda from "../sprite/Panda.js";
import {Triangle1, Triangle2} from "../sprite/triangles.js";
import Bug from "../sprite/Bug.js";
import SeedStitch from "../sprite/pattern/SeedStitch.js";
import Cloud from "../sprite/Cloud.js";
import Chandeliers from "../sprite/Chandeliers.js";
import TwinkleBanner from "../sprite/TwinkleBanner.js";
import Starburst from "../sprite/Starburst.js";
import Rope from "../sprite/Rope.js";
import BasketWeave from "../sprite/pattern/BasketWeave.js";
import HerringBone from "../sprite/pattern/HerringBone.js";
import DiamondPattern from "../sprite/pattern/DiamondPattern.js";
import DotPattern from "../sprite/pattern/DotPattern.js";
import MarioCoinBox from "../sprite/MarioCoinBox.js";
import DiamondButterfly from "../sprite/DiamondButterfly.js";
import Chevron from "../sprite/Chevron.js";
import Bird from "../sprite/Bird.js";
import Peteca from "../sprite/Peteca.js";


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
        textContent += new Panda() + '<br/>';
        textContent += new Triangle1() + '<br/>';
        textContent += new Triangle2() + '<br/>';
        textContent += new Bug() + "<br/>";
        textContent += new SeedStitch(3);
        textContent += new Cloud("&nbsp;", 1, 10);
        textContent += "<br/><br/>";
        textContent += new Chandeliers() + "<br/>";
        textContent += new TwinkleBanner() + "<br/>";
        textContent += new Starburst() + "<br/>";
        textContent += new Rope() + "<br/>";
        textContent += new BasketWeave() + "<br/>";
        textContent += new HerringBone() + "<br/>";
        textContent += new DiamondPattern() + "<br/>";
        textContent += new DotPattern() + "<br/>";
        textContent += new MarioCoinBox() + "<br/>";
        textContent += new DiamondButterfly() + "<br/>";
        textContent += new Chevron() + "<br/>";
        textContent += new Bird() + "<br/>";
        textContent += new Peteca() + "<br/>";
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