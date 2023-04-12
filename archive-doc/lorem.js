import {shuffled} from "./data.js";

import {Receipt} from "./receipt.js"; // <- broken.

// NOTE: Lorem only works when each "symbol" is only one character.

// NOTE: when it's the full length, the console should show 177,000.
console.log(shuffled.length);

// this is what ends up back in the receipt element on the page
let textContent = '';



// to figure out the width, we take the number of columns and divide it by 
// two IF we're mirroring the layout like a textile.
const paper = new Receipt(10, 10, "center"); // todo this doesn't work but it should.

let paraCount = 15; // # of paragraphs.  This means we may or may not have enough shapes

let patternWidth = 30;
let word = '';
let i = 0;
while(shuffled.length > 400 ) {   
    // take the first ~width~ shapes
    makeParagraph();

    // increment, but this might not work because the length of the array is changing
    
}

// here's a haphazard word generation function
function makeParagraph() {
    textContent += "<p class='lorem'>";
    // paragraph lengths are anywhere from 75 - 200 words
    let plength = Math.floor(Math.random() * 100) + 25;
    for (i = 0; i < plength; i++) {
        word = makeWord();
        textContent += " " + word;
    }
    // when the paragraph is complete, close it
    textContent += "</p>";

}

// This is a pretty haphazard word generation function that doesn't really mirror the flow of 
// English, but which can be replaced by a function that does, if this is what we end up wanting.
function makeWord() {
    // if we're here, we're going to assume there's characters left to use.
    // Returns a random integer from 1 to 9:
    let wlength = Math.floor(Math.random() * 10) + 1;
    let word = shuffled.splice(0, wlength);
    // word here is now an ARRAY.
    let clean = word.join('');
    return clean;
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