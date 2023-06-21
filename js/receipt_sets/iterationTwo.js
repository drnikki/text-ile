import {browserToPrinter} from "../receipt.js";
import {Triangle1, Triangle2} from "../sprite/triangles.js";
import ChevronToQBox from "../sprite/ChevronToQBox.js";
import Rope from "../sprite/Rope.js";
import TimestampWaves from "../sprite/pattern/TimestampWaves.js";
import TimeLines from "../sprite/pattern/TimeLines.js";
import Cloud from "../sprite/Cloud.js";
import Peteca from "../sprite/Peteca.js";
import GradientFloor from "../sprite/pattern/GradientFloor.js";
import Bird from "../sprite/Bird.js";
import Bug from "../sprite/Bug.js";
import Chevron from "../sprite/Chevron.js";
import MarioCoinBox from "../sprite/MarioCoinBox.js";



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
for (let i=0; i<20; i++) receiptRope += new Rope();
browserReceipts.push(receiptRope);

//  2 - timestamp waves
let receiptTimestampWaves = "";
for (let i =0; i<30; i++) {
    receiptTimestampWaves += new TimestampWaves();
}
browserReceipts.push(receiptTimestampWaves);



// 3 - timestamp to line
// TODO fix these.
// 12 - lines to timestamp waves
let receiptTimeToLine = "";
for (let i =0; i<50; i++) {
    receiptTimeToLine += new TimeLines();
}
browserReceipts.push(receiptTimeToLine);


// 4 - line to cloud
let receiptLineToCloud = "";
receiptLineToCloud = '<br/>';
for (let i=0; i<100; i++) receiptLineToCloud += (new Cloud('-', 1, 15)) + `<br/>`;
browserReceipts.push(receiptLineToCloud)

// 5 - cloud with pateca  and pattern
let receiptCloudteca = "";
for (let i=0; i<100; i++) {
    // this will print each combination in a pattern.
    receiptCloudteca += new Cloud('&nbsp;', 1, 10) + "<br /><br />";
    receiptCloudteca += new Peteca().offsetBy(16 + Math.floor(Math.random() * 8));  // pateca on the right, between 16 and 24
    receiptCloudteca += new GradientFloor() + "<br />";

    receiptCloudteca += new Cloud('&nbsp;', 11, 20) + "<br /><br />"; // clouds on the right
    receiptCloudteca += new Peteca().offsetBy(1 + Math.floor(Math.random() * 11)) + "<br />";  // pateca on the left
    receiptCloudteca += new GradientFloor() + "<br />";
}
browserReceipts.push(receiptCloudteca);

// 6 -  bird facing L / triangles / bugs
let receiptBirdBugL = "";
for (let i=0; i<100; i++) {
    receiptBirdBugL += new Bird() + "<br /><br /><br />";
    receiptBirdBugL += new Triangle1() + "<br />"; //
    receiptBirdBugL += new Bug() + "<br />"; //
    receiptBirdBugL += new Triangle2() + "<br />"; //
}
browserReceipts.push(receiptBirdBugL);



// 7 - chevron / coinbox align R
let chevronCoin1 = "";
for (let i=0; i<100; i++) {
    chevronCoin1 += new ChevronToQBox(3)
    chevronCoin1 += new Chevron();
    chevronCoin1+= new ChevronToQBox(4)
    chevronCoin1 += new MarioCoinBox().setAlign("right") + "<br />"; //
}
browserReceipts.push(chevronCoin1);


// 8 - chevron / coinbox align L
let chevronCoin2 = "";
for (let i=0; i<100; i++) {
    chevronCoin2 += new ChevronToQBox(1);
    chevronCoin2 += new Chevron();
    chevronCoin2 += new ChevronToQBox(2);
    chevronCoin2 += new MarioCoinBox().setAlign("left") + "<br />"; //
}
browserReceipts.push(chevronCoin2);



// 9 - bird facing R / triangles / bugs
let receiptBirdBugR = "";
for (let i=0; i<100; i++) {
    receiptBirdBugR += new Bird() + "<br /><br /><br />";
    receiptBirdBugR += new Triangle1() + "<br />"; //
    receiptBirdBugR += new Bug() + "<br />"; //
    receiptBirdBugR += new Triangle2() + "<br />"; //
}
browserReceipts.push(receiptBirdBugR);

// 10 - cloud w/ pateca



//
// 11 - cloud to line
// TODO fix these 
let receiptCloudToLine = "";
receiptCloudToLine = '<br/>';
for (let i=0; i<100; i++) receiptCloudToLine += (new Cloud('-', 1, 15, 1)) + `<br/>`;
browserReceipts.push(receiptCloudToLine)


// 12 - lines to timestamp waves
let receiptLineToTime = "";
for (let i =0; i<50; i++) {
    receiptLineToTime += new TimeLines();
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

