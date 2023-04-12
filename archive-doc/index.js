import {shuffled} from "./data.js";

import {Receipt} from "./receipt.js"; // <- broken.

// NOTE: when it's the full length, the console should show 177,000.
console.log(shuffled.length);


let i = 0;
let arrayLength = shuffled.length;
let textContent = '';
let shapes2 = shuffled;
// while there are shapes left in the array

// to figure out the width, we take the number of columns and divide it by 
// two IF we're mirroring the layout like a textile.
const paper = new Receipt(10, 10, "center"); // todo this doesn't work but it should.


let patternWidth = 60;

while(shuffled.length > patternWidth ) {   
    // take the first ~width~ shapes
    let patternContents = shuffled.splice(0, patternWidth);
    let forward = printRow(patternContents);
    textContent += forward + "<br />";
    // increment, but this might not work because the length of the array is changing
    
}









let ReceiptPlace = document.querySelector('#receipt');
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


function printOne(symbol) {
    return "<span class='black'>" + symbol + "</span>";
}