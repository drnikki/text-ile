import {printTriangle1, printTriangle2} from "./sprite/triangles.js";
import printBug from "./sprite/bug.js";
import printClouds from "./sprite/clouds.js";
import {printChandelierA, printChandelierB} from "./sprite/chandelier.js";
import printTwinkleBanner from "./sprite/banner.js";
import printStarburst from "./sprite/starburst.js";
import printRope from "./sprite/rope.js";
import {printBasketWeave, printHerringBone, printDiamond, printSeedStitch} from "./sprite/pattern.js";
import printMarioCoinBox from "./sprite/coinBox.js";



let ReceiptPlaces = document.querySelectorAll('.receipt'); // list of all receipts (only 1 for index.html)
for (let i = 0; i < ReceiptPlaces.length; i++) {
    let textContent = ''; // this is what prints on the receipt.
    for (let y = 0; y < 5; y++) {
        textContent += printDotPattern() + '<br/>';

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
    // FINALLY: everything that we did - put it onto the receipt
    ReceiptPlaces[i].innerHTML = textContent;
}
