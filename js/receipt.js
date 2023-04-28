import printClouds from "./sprite/clouds.js";
import {printChandelierA, printChandelierB} from "./sprite/chandelier.js";
import printTwinkleBanner from "./sprite/banner.js";
import printStarburst from "./sprite/starburst.js";
import printRope from "./sprite/rope.js";
import printBasketWeave from "./pattern/basketweave.js";
import printHerringBone from "./pattern/herringbone.js";
import printDiamond from "./pattern/diamond.js";


// NOTE: when it's the full length, the console should show 177,000.
//console.log(shuffled.length);



/**
 * These are stub tester files that are separate from any consideration of how the
 * data might relate to these shapes.
 *
 * Right now, we just need to get things printing for the prototypes.
 */

// FINALLY: everything that we did - put it onto the receipt

let ReceiptPlaces = document.querySelectorAll('.receipt'); // list of all receipts (only 1 for index.html)
for (let i = 0; i < ReceiptPlaces.length; i++) {
    let textContent = ''; // this is what prints on the receipt.
    for (let y = 0; y < 5; y++) {
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
    }
    // FINALLY: everything that we did - put it onto the receipt
    ReceiptPlaces[i].innerHTML = textContent;
}
