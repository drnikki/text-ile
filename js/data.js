/**
 * @file This file contains the characters/shapes for each data event and
 * creates an object with all of the events in it.
 */

// ---------- EDIT the shapes you want to use here -----------//



// When we're outputing to HTML, we can use a -much- wider range of characters
// than we can w/ the receipt printer (probably). TBD on what it can support besides ASCII 
// characters https://theasciicode.com.ar/extended-ascii-code/guillemets-angle-quotes-left-pointing-double-angle-quotation-marks-ascii-code-175.html 
var commitSymbol = "*"; // 30,000  
var userSymbol = "&"; // 18408 
var nodeSymbol = "#"; // 18435  
var commentSymbol = "%"; // 11250
var taxonomySymbol = ":"; // 63555
var geditSymbol = "@"; // 4000

// TODO this desperately needs a refactoring to be part of a class and to use constants.

// we could do this in the array, but there's just no 

var shapes = new Array();
 
// This way of doing it is FUCKED UP and literally saves only one loop
// so I will go back in and refactor it. #todo

// NOTE - for testing, you can drop all of these numbers down by removing some zeros.
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


// by the time we're here, we have a randomized ~177k item array

// export this so that we can use it in another file.
// TODO still needs a refactor
export const shuffled = shapes
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
   