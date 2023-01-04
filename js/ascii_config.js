/**
 * This file controls the printing of the "textile" on the paper.
 */

// You can configure these variables through the URL or the form fields
// this is the documentation on URL parameters
// https://www.sitepoint.com/get-url-parameters-with-javascript/
const queryString = window.location.search;
console.log(queryString);
// -------- -------- get CONFIGURATION  --------  -------- 
const urlParams = new URLSearchParams(queryString);
const columns = urlParams.get('cols');
const rows = urlParams.get('row_count');
const mirror = urlParams.get('pattern_mirror');
const gutters = urlParams.get('have_gutters');

// set the width of the div to contain the columns
//document.getElementById('receipt').style.width= columns * 7;


// When we're outputing to HTML, we can use a -much- wider range of characters
// than we can w/ the receipt printer (probably). TBD on what it can support besides ASCII 
// characters https://theasciicode.com.ar/extended-ascii-code/guillemets-angle-quotes-left-pointing-double-angle-quotation-marks-ascii-code-175.html 
var commitSymbol = urlParams.get('symbol1'); // 30,000  RED
var userSymbol = urlParams.get('symbol2'); // 18408 RED
var nodeSymbol = urlParams.get('symbol3'); // 18435 RED
var commentSymbol = urlParams.get('symbol4'); // 11250
var taxonomySymbol = urlParams.get('symbol5'); // 63555
var geditSymbol = urlParams.get('symbol6'); // 4000


// SAVE the data so that the user can see it again when they reload the page
// this is a thing that we're doing manually becuase this is vanilla JS
// but if we moved to a formal framework, it would be taken care of for us
function save_data_to_localstorage(input_id) {
    const input_val = document.getElementById(input_id).value;
    localStorage.setItem(input_id, input_val);
    console.log(input_id);
    console.log(input_val);
 }

 cols.addEventListener("keyup", function() {
    save_data_to_localstorage("cols");
 });

 row_count.addEventListener("keyup", function() {
    save_data_to_localstorage("row_count");
 });

 pattern_mirror.addEventListener("click", function() {
    save_data_to_localstorage("pattern_mirror");
 });

//  have_gutters.addEventListener("click", function() {
//     save_data_to_localstorage("gutters");
//  });
 

 symbol1.addEventListener("keyup", function() {
    save_data_to_localstorage("symbol1");
 });
 
 symbol2.addEventListener("keyup", function() {
    save_data_to_localstorage("symbol2");
 });

 symbol3.addEventListener("keyup", function() {
    save_data_to_localstorage("symbol3");
 });
 
 symbol4.addEventListener("keyup", function() {
    save_data_to_localstorage("symbol4");
 });

 symbol5.addEventListener("keyup", function() {
    save_data_to_localstorage("symbol5");
 });
 
 symbol6.addEventListener("keyup", function() {
    save_data_to_localstorage("symbol6");
 });
 

 // lol this is so tedious, but also seems okay for this vanilla prototype.
 function init_values() {
    if (localStorage["cols"]) {
        cols.value = localStorage["cols"];
    }
    if (localStorage["row_count"]) {
        row_count.value = localStorage["row_count"];
    }
    // if (localStorage["pattern_mirror"]) {
    //     pattern_mirror.value = localStorage["pattern_mirror"];
    // }
    // if (localStorage["gutters"]) {
    //     gutters.value = localStorage["gutters"];
    //}
    if (localStorage["symbol1"]) {
       symbol1.value = localStorage["symbol1"];
    }
    if (localStorage["symbol2"]) {
       symbol2.value = localStorage["symbol2"];
    }
    if (localStorage["symbol3"]) {
        symbol3.value = localStorage["symbol3"];
    }
    if (localStorage["symbol4"]) {
        symbol4.value = localStorage["symbol4"];
    }
    if (localStorage["symbol5"]) {
        symbol5.value = localStorage["symbol5"];
    }
    if (localStorage["symbol6"]) {
        symbol6.value = localStorage["symbol6"];
    }
 }
 
 init_values();









// we could do this in the array, but there's just no 

var shapes = new Array();
 
// This way of doing it is FUCKED UP and literally saves only one loop
// so I will go back in and refactor it. #todo
for (let x =0; x < 40; x++) {
    shapes.push(geditSymbol); // done
    shapes.push(taxonomySymbol);
    shapes.push(commentSymbol);
    shapes.push(nodeSymbol);
    shapes.push(userSymbol);
    shapes.push(commitSymbol);
}

for (let x =0; x < 70; x++) {
    shapes.push(taxonomySymbol); 
    shapes.push(commentSymbol); // done
    shapes.push(nodeSymbol);
    shapes.push(userSymbol);
    shapes.push(commitSymbol);
}

// another 14k will take care of user and node
for (let x =0; x < 70; x++) {
    shapes.push(taxonomySymbol);
    shapes.push(nodeSymbol); // done
    shapes.push(userSymbol); // done
    shapes.push(commitSymbol);
}

for (let x =0; x < 120; x++) {
    shapes.push(taxonomySymbol);
    shapes.push(commitSymbol); // done
}

for (let x =0; x < 330; x++) {
    shapes.push(taxonomySymbol);
    shapes.push(commitSymbol); // done
}

let shuffled = shapes
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   
// by the time we're here, we have a randomized ~177k item array
// we're going to print them 


let i = 0;
let arrayLength = shapes.length;
let textContent = '';
let shapes2 = shapes;
// while there are shapes left in the array

// to figure out the width, we take the number of columns and divide it by 
// two IF we're mirroring the layout like a textile.


// this is clunky for the charette, needs to be cleaned up
if (mirror == "zero") {
    let patternWidth = columns;
    while(shuffled.length > patternWidth ) {   
        // take the first ~width~ shapes
        let patternContents = shuffled.splice(0, patternWidth);
        let forward = printTwenty(patternContents);
        textContent += forward + "<br />";
        // increment, but this might not work because the length of the array is changing
      
    }

}


if (mirror == "half") {
    let patternWidth = columns / 2;
    while(shuffled.length > patternWidth ) {   
        // take the first ~width~ shapes
        let patternContents = shuffled.splice(0, patternWidth);
        let forward = printTwenty(patternContents);
        let backward = printTwenty(patternContents.reverse());
        if (gutters) {
            textContent += forward + " " + backward + "<br />";
        } else{
            textContent += forward +  backward + "<br />";
        }
        
        // increment, but this might not work because the length of the array is changing
      
    }
}

//// ==== NOT WORKING
if (mirror == "thirds") {
    let patternWidth = Math.floor(columns / 3);
    console.log(patternWidth);
    while(shuffled.length > patternWidth ) {   

        // take the first ~width~ shapes
        let patternContents = shuffled.splice(0, patternWidth);
        let forward = printTwenty(patternContents);
        let backward = printTwenty(patternContents.reverse());
        // then, we need a middle column that has both.
        textContent += forward + " " + backward + "<br />";
        if (gutters) {
            textContent += forward +" "+ backward.slice(0, patternWidth/2) 
            +" "+ forward.slice(0, patternWidth/2) +" "+ backward + "<br />";
        } else{
            textContent += forward + backward.slice(0, patternWidth/2) 
            + forward.slice(0, patternWidth/2) + backward + "<br />";
        }
    }
}

//// ==== NOT WORKING
if (mirror == "fourths") {
    let patternWidth = columns / 4;
    while(shuffled.length > patternWidth ) {   
        // take the first ~width~ shapes
        let patternContents = shuffled.splice(0, patternWidth);
        let forward = printTwenty(patternContents);
        let backward = printTwenty(patternContents.reverse());
        if (gutters) {
            textContent += forward + " " + backward +" " + forward +" " + backward + "<br />";
        } else{
            textContent += forward + backward + forward + backward + "<br />";
        }

        // increment, but this might not work because the length of the array is changing
      
    }
}




let ReceiptPlace = document.querySelector('#receipt');
ReceiptPlace.innerHTML = textContent;


// supposedly generic for loop is fastest
// https://levelup.gitconnected.com/five-ways-to-loop-through-a-javascript-array-3325f4673334
function printTwenty(twenty) {
    var theString = ''; // this is what holds it.
    for (let x = 0; x < twenty.length; x++) {
        theString += printOne(twenty[x]); // go print the one w/ the styles
    }

    return theString;
}


function printOne(symbol) {
    // this is where we determine the color of the character
    // based on the shape
    if (symbol == commentSymbol || symbol == userSymbol || symbol == nodeSymbol) {
        return "<span class='black'>" + symbol + "</span>";
    }
    // else
    return "<span class='black'>" + symbol + "</span>";
}