import {browserToPrinter} from "../receipt.js";
import {imposeBlocks} from "../stringManipulation.js";
import {Triangle1, Triangle2} from "../sprite/triangles.js";
import DiamondButterfly from "../sprite/DiamondButterfly.js";
import ChevronToQBox from "../sprite/ChevronToQBox.js";
import Rope from "../sprite/Rope.js";
import TimeBlocks from "../sprite/TimeBlocks.js";
import ArrowTime from "../sprite/ArrowTime.js";
import Cloud from "../sprite/Cloud.js";
import Peteca from "../sprite/Peteca.js";
import GradientFloor from "../sprite/pattern/GradientFloor.js";
import Bird from "../sprite/Bird.js";
import Bug from "../sprite/Bug.js";
import Chevron from "../sprite/Chevron.js";
import MarioCoinBox from "../sprite/MarioCoinBox.js";
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




// 1 - rope
let receiptRope= '';
for (let i=0; i<20; i++) receiptRope += new Rope();
browserReceipts.push(receiptRope);


// 2 - timestamp blocks
let timeBlocks = "";
// the receipt is smol and weird!
timeBlocks += "&nbsp;".repeat(39);
for (let i=0; i<6; i++) {
    timeBlocks += new TimeBlocks();
}
browserReceipts.push(timeBlocks);


// 3 - timestamp overlap arrow
let arrowTime = "";
for (let i=0; i<100; i++) {
    arrowTime += new ArrowTime().flipHorizontal();
}
browserReceipts.push(arrowTime);



// 4 - Leo's diamonds and clouds
let diamondsClouds = "";
for (let i=0; i<100; i++) {
    
    for (let x=0; x<5; x++) {
        diamondsClouds += new DiamondButterfly() + "<br/>".repeat(3);
    }
    diamondsClouds += "<br/><br/><br/>"; // spaaaace

    // vertical position of each cloud (horizontal position is already randomized)
    const cloudPositions = [
        //clouds stack lower to higher so top cloud sits over the rest
        Math.floor(Math.random() * 6) + 15,
        Math.floor(Math.random() * 6)+ 8,
        Math.floor(Math.random() * 6) + 4,
        Math.floor(Math.random() * 6),
       
    ];

    let clouds = imposeBlocks("<br/>".repeat(cloudPositions[0]) + new Cloud(), "<br/>".repeat(cloudPositions[1]) + new Cloud());
    clouds = imposeBlocks(clouds, "<br/>".repeat(cloudPositions[2]) + new Cloud());
    clouds = imposeBlocks(clouds, "<br/>".repeat(cloudPositions[3]) + new Cloud()) + "<br/><br /><br />";

    diamondsClouds += clouds;

}
browserReceipts.push(diamondsClouds);


// 5 - cloud with pateca  and pattern
let receiptCloudteca = "";
for (let i=0; i<100; i++) {
    // this will print each combination in a pattern.
    receiptCloudteca += new Cloud('&nbsp;', 1, 10) + "<br /><br />";
    receiptCloudteca += new Peteca().setAlign("left").offsetBy(16 + Math.floor(Math.random() * 8));  // pateca on the right, between 16 and 24
    receiptCloudteca += new GradientFloor() + "<br />";

    receiptCloudteca += new Cloud('&nbsp;', 11, 20) + "<br /><br />"; // clouds on the right
    receiptCloudteca += new Peteca().setAlign("left").offsetBy(1 + Math.floor(Math.random() * 11)) + "<br />";  // pateca on the left
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

// 10 - cloud w/ pateca (same as before)
// but new pattern
receiptCloudteca = "";
for (let i=0; i<100; i++) {
    // this will print each combination in a pattern.
    receiptCloudteca += new Cloud('&nbsp;', 1, 10) + "<br /><br />";
    receiptCloudteca += new Peteca().setAlign("left").offsetBy(16 + Math.floor(Math.random() * 8));  // pateca on the right, between 16 and 24
    receiptCloudteca += new GradientFloor() + "<br />";

    receiptCloudteca += new Cloud('&nbsp;', 11, 20) + "<br /><br />"; // clouds on the right
    receiptCloudteca += new Peteca().setAlign("left").offsetBy(1 + Math.floor(Math.random() * 11)) + "<br />";  // pateca on the left
    receiptCloudteca += new GradientFloor() + "<br />";
}
browserReceipts.push(receiptCloudteca);


// 11 - Leo's diamonds and clouds
//let diamondsClouds = "";
for (let i=0; i<100; i++) {
    
    for (let x=0; x<5; x++) {
        diamondsClouds += new DiamondButterfly() + "<br/>".repeat(3);
    }
    diamondsClouds += "<br/><br/><br/>"; // spaaaace


    // vertical position of each cloud (horizontal position is already randomized)
    const cloudPositions = [
        //clouds stack lower to higher so top cloud sits over the rest
        Math.floor(Math.random() * 6) + 15,
        Math.floor(Math.random() * 6) + 8,
        Math.floor(Math.random() * 6) + 4,
        Math.floor(Math.random() * 6),
       
    ];


    let clouds = imposeBlocks("<br/>".repeat(cloudPositions[0]) + new Cloud(), "<br/>".repeat(cloudPositions[1]) + new Cloud());
    clouds = imposeBlocks(clouds, "<br/>".repeat(cloudPositions[2]) + new Cloud());
    clouds = imposeBlocks(clouds, "<br/>".repeat(cloudPositions[3]) + new Cloud()) + "<br/><br /><br />";


    diamondsClouds += clouds;


}
browserReceipts.push(diamondsClouds);




// 12 - timestamp overlap arrow
arrowTime = "";
for (let i=0; i<100; i++) {
    arrowTime += new ArrowTime();
}
browserReceipts.push(arrowTime);





// 13 - timestamp blocks
timeBlocks = "";
for (let i=0; i<6; i++) {
    timeBlocks += new TimeBlocks(false);
}
browserReceipts.push(timeBlocks);



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

