
// make an array with all of the symbols in it
// 

var commitSymbol = ">"; // 30,000  RED
var userSymbol = "<"; // 18408 RED
var nodeSymbol ="v"; // 18435 RED 
var commentSymbol ="^"; // 11250
var taxonomySymbol = "─"; // 63555
var geditSymbol = "¦"; // 4000

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
while(shuffled.length > 20 ) {   
    console.log("in here");
    // take the first 20 shapes
    let twenty = shuffled.splice(0, 20);
    let forward = printTwenty(twenty);
    let backward = printTwenty(twenty.reverse());
    textContent += forward + backward + "<br />";
    // increment, but this might not work because the length of the array is changing
  
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
        return "<span class='red'>" + symbol + "</span>";
    }
    // else
    return "<span class='black'>" + symbol + "</span>";
}