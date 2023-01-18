import {shuffled} from "./data.js";

import {Receipt} from "./receipt.js"; // <- broken.

// NOTE: when it's the full length, the console should show 177,000.
console.log(shuffled.length);
// balance sheet HTML and CSS and everything taken from
// https://codepen.io/bbsmooth/pen/oNoXeav?editors=1100

// CONFIG
let headerLength = 20;
let i = 0;
let arrayLength = shuffled.length;
let textContent = '';
let shapes2 = shuffled;
let ReceiptPlace = '';


// in the case of this "accounting/transaction" format, we have lots of areas to populate

// 1. the header
textContent = shuffled.splice(0, headerLength);
textContent = textContent.join('');
ReceiptPlace = document.querySelector('#balance-header');
ReceiptPlace.innerHTML = textContent;

// 2. the items and their "costs"



let patternWidth = 60;
textContent = '';
while(shuffled.length > patternWidth ) {   
    // take the first ~width~ shapes
    // let patternContents = shuffled.splice(0, patternWidth);
    // let forward = printRow(patternContents);
    // textContent += forward + "<br />";
    // increment, but this might not work because the length of the array is changing
    textContent += printOneLine();
}









ReceiptPlace = document.querySelector('#receipt-table');
ReceiptPlace.innerHTML = textContent;


// supposedly generic for loop is fastest
// https://levelup.gitconnected.com/five-ways-to-loop-through-a-javascript-array-3325f4673334
function printRow(twenty) {
    var theString = ''; // this is what holds it.
    for (let x = 0; x < twenty.length; x++) {
        theString += printOne(twenty[x]); // go print the one w/ the styles
    }

    return theString;
}


function printOneLine() {
    // each line is a spaced item and cost so...
    // the item is between ~4 and ~10 characters, the cost between 1 and 5
    let wlength = Math.floor(Math.random() * 10) + 1;
    let word = shuffled.splice(0, wlength);
    // word here is now an ARRAY.
    let item = word.join('');
    
    wlength = Math.floor(Math.random() * 4) + 1;
    word = shuffled.splice(0, wlength);
    // word here is now an ARRAY.
    let cost = word.join('');


    return "<tr><td>" + item + "</td><td class='item-list'>" + cost + "</td></tr>";
}