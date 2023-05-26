import {browserToPrinter} from "../receipt.js";
import {getTimestamp, generateHash, numToSpace, numToChar, reverseString} from "../stringManipulation.js";
import {printBasketWeave, printDiamond, printHerringBone, printSeedStitch, printTimestampWaves, printTimeLines, printGradientFloor} from "../sprite/pattern.js";
import printMarioCoinBox from "../sprite/coinBox.js";
import printStarburst from "../sprite/starburst.js";
import printClouds from "../sprite/clouds.js";
import printTwinkleBanner from "../sprite/banner.js";
import printInkBlot from "../sprite/inkblot.js";
import {printChandelierA, printChandelierB} from "../sprite/chandelier.js";
import {printTriangle1, printTriangle2} from "../sprite/triangles.js";
import printBug from "../sprite/bug.js";
import printRope from "../sprite/rope.js";
import { printDiamondButterfly } from "../sprite/diamondButterfly.js";
import printPeteca from "../sprite/peteca.js";
import printBird from "../sprite/bird.js";
import printChevron from "../sprite/chevron.js";
import { printChevronToQBox } from "../sprite/chevrontoqbox.js";
import printTimeBlocks from "../sprite/timeBlocks.js";
import printArrowTime from "../sprite/arrowTime.js";
/**
 * Iteration Three! 
 */

/*
 *
 * associates this set of receipts with a key word
 * @type {string}
 */
const keyword = "iterationThree";

/**
 * receipt data in browser-friendly form. an array of strings using &nbsp;'s and <br/>'s
 * @type {String[]}
 */
const browserReceipts = [];


/**
 *  TODO 3/4: Generate receipts here and push each receipt to browserReceipts.
 *      (This is where most of your code goes)
 */

/**
 * This set is for the second set of banners.
 * They are
 * 1 rope
 * 2 timestamp blocks
 * 3 timestamp overlap arrow
 * 4 leo's diamonds + clouds
 * 5 cloud w/ pateca
 * 6 bird facing R / triangles / bugs
 * 7 chevron / coinbox align R
 * -- then --
 * 8 chevron / coinbox align L
 * 9 bird facing L / triangles / bugs
 * 10 cloud w/ pateca
 * 11 leo's diamons + clouds
 * 12 timestamp overlap arrow
 * 13 timestamp blocks
 * 14 rope
 */




// // 1 - rope
// let receiptRope= '';
// for (let i=0; i<20; i++) receiptRope += printRope();
// browserReceipts.push(receiptRope);

// 2 - timestamp blocks
let timeBlocks = "";

for (let i=0; i<6; i++) {
    timeBlocks += printTimeBlocks();
}

browserReceipts.push(timeBlocks);

// 3 - timestamp overlap arrow
let arrowTime = "";
for (let i=0; i<100; i++) {
    arrowTime += printArrowTime();
}
browserReceipts.push(arrowTime);

// 4 - Leo's diamonds and clouds
let diamondsClouds = "";
for (let i=0; i<100; i++) {
    
    for (let x=0; x<5; x++) {
        diamondsClouds += printDiamondButterfly();
    }
    diamondsClouds += "<br/><br/><br/>"; // spaaaace 
    diamondsClouds += printClouds();
    diamondsClouds += printClouds();
    diamondsClouds += printClouds() + "<br/><br/><br/>";
}
browserReceipts.push(diamondsClouds);



// // 5 - cloud with pateca  and pattern
// let receiptCloudteca = "";
// for (let i=0; i<100; i++) {
//     // this will print each combination in a pattern.
//     receiptCloudteca += printClouds('&nbsp;', 1, 10) + "<br /><br />"; 
//     receiptCloudteca += printPeteca(16 + Math.floor(Math.random() * 8));  // pateca on the right, between 16 and 24
//     receiptCloudteca += printGradientFloor() + "<br />";  

//     receiptCloudteca += printClouds('&nbsp;', 11, 20) + "<br /><br />"; // clouds on the right
//     receiptCloudteca += printPeteca(1 + Math.floor(Math.random() * 11)) + "<br />";  // pateca on the left
//     receiptCloudteca += printGradientFloor() + "<br />";  
// }
// browserReceipts.push(receiptCloudteca);

// // 6 -  bird facing L / triangles / bugs
// let receiptBirdBugL = "";
// for (let i=0; i<100; i++) {
//     receiptBirdBugL += printBird(false) + "<br /><br /><br />"; 
//     receiptBirdBugL += printTriangle1() + "<br />"; // 
//     receiptBirdBugL += printBug() + "<br />"; // 
//     receiptBirdBugL += printTriangle2() + "<br />"; // 
// }
// browserReceipts.push(receiptBirdBugL);


// // 7 - chevron / coinbox align R
// let chevronCoin1 = "";
// for (let i=0; i<100; i++) {
//     chevronCoin1 += printChevronToQBox(3)
//     chevronCoin1 += printChevron(); 
//     chevronCoin1+=printChevronToQBox(4)
//     chevronCoin1 += printMarioCoinBox("right") + "<br />"; //  
// }
// browserReceipts.push(chevronCoin1);


// // 8 - chevron / coinbox align L
// let chevronCoin2 = "";
// for (let i=0; i<100; i++) {
//     chevronCoin2 += printChevronToQBox(1);
//     chevronCoin2 += printChevron(); 
//     chevronCoin2 += printChevronToQBox(2);
//     chevronCoin2 += printMarioCoinBox("left") + "<br />"; //  
// }
// browserReceipts.push(chevronCoin2);



// // 9 - bird facing R / triangles / bugs
// let receiptBirdBugR = "";
// for (let i=0; i<100; i++) {
//     receiptBirdBugR += printBird() + "<br /><br /><br />"; 
//     receiptBirdBugR += printTriangle1() + "<br />"; // 
//     receiptBirdBugR += printBug() + "<br />"; // 
//     receiptBirdBugR += printTriangle2() + "<br />"; // 
// }
// browserReceipts.push(receiptBirdBugR);

// // 10 - cloud w/ pateca (same as before)
// browserReceipts.push(receiptCloudteca);



// // 13 - final timestamp blocks
// //browserReceipts.push(receiptTimestampWaves);

// // 14 - final receipt rope.
// browserReceipts.push(receiptRope);



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

