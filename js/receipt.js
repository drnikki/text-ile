import { printTriangle1, printTriangle2 } from "./sprite/triangles.js";
import printBug from "./sprite/bug.js";
import printClouds from "./sprite/clouds.js";
import { printChandelierA, printChandelierB } from "./sprite/chandelier.js";
import printTwinkleBanner from "./sprite/banner.js";
import printStarburst from "./sprite/starburst.js";
import printRope from "./sprite/rope.js";
import { printBasketWeave, printHerringBone, printDiamond, printSeedStitch } from "./sprite/pattern.js";
import printMarioCoinBox from "./sprite/coinBox.js";

let list1 =
    `
    <div>
        <pre>${printTwinkleBanner()}</pre><br>
        <pre>${printTwinkleBanner()}</pre><br>
        <pre>${printStarburst()}</pre><br>
        <pre>${printTwinkleBanner()}</pre><br>
        <pre>${printStarburst()}</pre><br>
    </div>
    `

let list2 =
    `
    <div>
        <div class='fn-clear'><pre>${printChandelierA()}</pre></div>
        <br>
        <div class='fn-clear'>
            <div class='fl' style="width:50%">
            <pre>
            ${printChandelierB()}<br>
            ${printChandelierA()}<br>
            ${printChandelierB()}<br>
            ${printChandelierA()}<br>
                        ${printChandelierB()}<br>
            ${printChandelierA()}<br>
                        ${printChandelierB()}<br>
            ${printChandelierA()}<br>
            </pre>
            </div>
            <div class='fr' style="width:50%"><pre>
            ${printChandelierA()}<br>
            ${printChandelierB()}<br>
            ${printChandelierA()}<br>
            ${printChandelierB()}<br>
            </pre ></div >
        </div >
    </div >
    `

let list3 =
    `<div>
<div class='fn-clear'>
<div class='fl'><pre>${printClouds()}</pre></div>
<div class='fl'><pre>${printClouds()}</pre></div>
</div>
<pre>${printMarioCoinBox()}</pre>
<div class='fn-clear'>
<div class='fl'><pre>${printClouds()}</pre></div>
<div class='fl'><pre>${printClouds()}</pre></div>
<div class='fl'><pre>${printClouds()}</pre></div>
</div>
<div class='fn-clear'>
<div class='fl'><pre>${printClouds()}</pre></div>
<div class='fl'><pre>${printClouds()}</pre></div>
</div>
<div class='fn-clear'>
<div class='fr'><pre>${printClouds()}</pre></div>
<div class='fr'><pre>${printClouds()}</pre></div>
</div>
</div>
    `
let list4 = `
<div><pre  style='margin:auto;display:block;width:300px'>${printTriangle1()}</pre></div>
<div><pre  style='margin:auto;display:block;width:300px'>${printTriangle2()}</pre></div>
<div><pre  style='margin:auto;display:block;width:300px'>${printBug()}</pre></div>
<div><pre  style='margin:auto;display:block;width:300px'>${printTriangle1()}</pre></div>
<div><pre  style='margin:auto;display:block;width:300px'>${printTriangle2()}</pre></div>
`

document.querySelector('.receipt1').innerHTML = list1;
document.querySelector('.receipt2').innerHTML = list2;
document.querySelector('.receipt3').innerHTML = list3;
document.querySelector('.receipt4').innerHTML = list4;
document.querySelector('.receipt5').innerHTML = list3;
document.querySelector('.receipt6').innerHTML = list2;
document.querySelector('.receipt7').innerHTML = `<pre>${printRope()}</pre>`;
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
    // ReceiptPlaces[i].innerHTML = textContent;
}
