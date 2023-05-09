import {printTriangle1, printTriangle2} from "../../../js/sprite/triangles.js";
import printBug from "../../../js/sprite/bug.js";
import printClouds from "../../../js/sprite/clouds.js";
import {printChandelierA, printChandelierB} from "../../../js/sprite/chandelier.js";
import printTwinkleBanner from "../../../js/sprite/banner.js";
import printStarburst from "../../../js/sprite/starburst.js";
import printRope from "../../../js/sprite/rope.js";
import {printBasketWeave, printHerringBone, printDiamond, printSeedStitch} from "../../../js/sprite/pattern.js";
import printMarioCoinBox from "../../../js/sprite/coinBox.js";



let ReceiptPlaces = document.querySelectorAll('.receipt'); // list of all receipts (only 1 for index.html)
for (let i = 0; i < ReceiptPlaces.length; i++) {
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
    // FINALLY: everything that we did - put it onto the receipt
    ReceiptPlaces[i].innerHTML = textContent;
}
