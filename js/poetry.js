import {shuffled} from "./data.js";

import {Receipt} from "./receipt.js"; // <- broken.

// NOTE: Lorem only works when each "symbol" is only one character.

// NOTE: when it's the full length, the console should show 177,000.
console.log(shuffled.length);

// this is what ends up back in the receipt element on the page
let textContent = '';



let patternWidth = 30;
let word = '';
let i = 0;

//1 first, a little 4 line stanza
textContent += "<p>";
for(let x =0; x < 4; x++) {
    textContent += makeLine(3, 8);
    textContent += "<br />"
}
textContent += "</p>";
// then one more
textContent += "<p>";
for(let x =0; x < 4; x++) {
    textContent += makeLine(3, 8);
    textContent += "<br />"
}
textContent += "</p>";

// 2. some 




let ReceiptPlace = document.querySelector('#receipt');
ReceiptPlace.innerHTML = textContent;


// here's a haphazard word generation function
function makeLine(lineLengthMin, lineLengthMax) {
    // generate a length for the line
    let oneLine = '';
    let plength = Math.floor(Math.random() * lineLengthMax) + lineLengthMin;
    for (i = 0; i < plength; i++) {
        word = makeWord();
        oneLine += " " + word;
    }
    // when the line is complete, return it
    return oneLine;
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










