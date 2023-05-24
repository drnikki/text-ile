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



/**
 * This set is for the second set of banners.
 * They are
 * 1 rope
 * 2 timestamp waves
 * 3 timestamp to line
 * 4 line to cloud
 * 5 cloud w/ pateca
 * 6 bird facing L / triangles / bugs
 * 7 chevron / coinbox align R
 * -- then --
 * 8 chevron / coinbox align L
 * 9 bird facing R / triangles / bugs
 * 10 cloud w/ pateca
 * 11 cloud to line
 * 12 line to timestamp
 * 13 timestamp waves
 * 14 rope
 */


/**
 * associates this set of receipts with a key word
 * @type {string}
 */
const keyword = "iterationTwo";

/**
 * receipt data in browser-friendly form. an array of strings using &nbsp;'s and <br/>'s
 * @type {String[]}
 */
const browserReceipts = [];


/**
 *  TODO 3/4: Generate receipts here and push each receipt to browserReceipts.
 *      (This is where most of your code goes)
 */

/**********************************************************
 * FIRST SET OF SEVEN
 */

// 1 - rope
let receiptRope= '';
for (let i=0; i<20; i++) receiptRope += printRope();
browserReceipts.push(receiptRope);

//  2 - timestamp waves
let receiptTimestampWaves = "";
for (let i =0; i<30; i++) {
    receiptTimestampWaves += printTimestampWaves();
}
browserReceipts.push(receiptTimestampWaves);



// 3 - timestamp to line
// TODO fix these.
// 12 - lines to timestamp waves
let receiptTimeToLine = "";
for (let i =0; i<50; i++) {
    receiptTimeToLine += printTimeLines(false);   
}
browserReceipts.push(receiptTimeToLine);


// 4 - line to cloud
let receiptLineToCloud = "";
receiptLineToCloud = numToSpace(40);
for (let i=0; i<100; i++) receiptLineToCloud += (printClouds('-', 1, 15)) + `<br/>`;
browserReceipts.push(receiptLineToCloud)

// 5 - cloud with pateca  and pattern
// TODO - alternating Cloud left, pateca right and reverse
let receiptCloudteca = "";
for (let i=0; i<100; i++) {
    // this will print each combination in a pattern.
    // TODO it could be randomized
    receiptCloudteca += printClouds('&nbsp;', 1, 15) + "<br /><br />"; 
//<<<<<<< HEAD
    receiptCloudteca += printPeteca() + "<br />";  
    receiptCloudteca += printGradientFloor() + "<br />";  
//=======
    receiptCloudteca += printPeteca(16 + Math.floor(Math.random() * 8)) + "<br />";  // pateca on the right, between 16 and 24
    receiptCloudteca += printBasketWeave(5) + "<br />";  

    receiptCloudteca += printClouds('&nbsp;', 15, 35) + "<br /><br />"; 
    receiptCloudteca += printPeteca(1 + Math.floor(Math.random() * 11)) + "<br />";  // pateca on the left
    receiptCloudteca += printBasketWeave(5) + "<br />"; 
//>>>>>>> 48c3718e577a07be568ae5c6e2db0d773465579e
}
browserReceipts.push(receiptCloudteca);

// 6 -  bird facing L / triangles / bugs
// TODO bird flip
let receiptBirdBugL = "";
for (let i=0; i<100; i++) {
    receiptBirdBugL += printBird(false) + "<br />"; 
    receiptBirdBugL += printTriangle1() + "<br />"; // 
    receiptBirdBugL += printBug() + "<br />"; // 
    receiptBirdBugL += printTriangle2() + "<br />"; // 
}
browserReceipts.push(receiptBirdBugL);



// 7 - chevron / coinbox align R
let chevronCoin1 = "";
for (let i=0; i<100; i++) {
    chevronCoin1 += printChevronToQBox(4)
    chevronCoin1 += printChevron(); 
    chevronCoin1+=printChevronToQBox(3)
    chevronCoin1 += printMarioCoinBox("right") + "<br />"; //  
}
browserReceipts.push(chevronCoin1);


// 8 - chevron / coinbox align L
let chevronCoin2 = "";
for (let i=0; i<100; i++) {
    chevronCoin2 += printChevronToQBox(1);
    chevronCoin2 += printChevron(); 
    chevronCoin2 += printChevronToQBox(2);
    chevronCoin2 += printMarioCoinBox("left") + "<br />"; //  
}
browserReceipts.push(chevronCoin2);
// 9 - bird facing R / triangles / bugs

// 6 -  bird facing L / triangles / bugs
// TODO bird flip
let receiptBirdBugR = "";
for (let i=0; i<100; i++) {
    receiptBirdBugR += printBird() + "<br />"; 
    receiptBirdBugR += printTriangle1() + "<br />"; // 
    receiptBirdBugR += printBug() + "<br />"; // 
    receiptBirdBugR += printTriangle2() + "<br />"; // 
}
browserReceipts.push(receiptBirdBugR);

// 10 - cloud w/ pateca



//
// 11 - cloud to line
// TODO fix these 
let receiptCloudToLine = "";
receiptCloudToLine = numToSpace(40);
for (let i=0; i<100; i++) receiptCloudToLine += (printClouds('-', 1, 15, 1)) + `<br/>`;
browserReceipts.push(receiptCloudToLine)


// 12 - lines to timestamp waves
let receiptLineToTime = "";
for (let i =0; i<50; i++) {
    receiptLineToTime += printTimeLines(true);
}
browserReceipts.push(receiptLineToTime);

// 13 - final timestamp waves
browserReceipts.push(receiptTimestampWaves);

// 14 - final receipt rope.
browserReceipts.push(receiptRope);










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

/**
 * TODO 4/4:
 *  1. Import your set of receipts in ../receipt.js
 *  2. Add your set to the receiptSets list in ../receipt.js
 */

