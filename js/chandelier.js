
// NOTE: when it's the full length, the console should show 177,000.
//console.log(shuffled.length);


/**
 * These are stub tester files that are separate from any consideration of how the 
 * data might relate to these shapes.  
 * 
 * Right now, we just need to get things printing for the prototypes.
 */

let i = 0;
let textContent = ''; // this is what prints on the receipt.




function printClouds() {
    ///
    /// set variables for this instance of clouds
    ///

    // 1. determine whether or not there are 1, 2 or 3 clouds
    var cloudCount = Math.floor((Math.random() * 3) + 1); // btwn 1 and 3
    // is there rain?
    var isRain = Math.random() > 0.5 ? true : false;
    // where do the clouds start? (position is different based on cloudCount)
    switch(cloudCount) {
        case 1:
            var startPosition = Math.floor((Math.random() * 26) + 1); // btwn 1 and 26
            break;
        case 2:
            var startPosition = Math.floor((Math.random() * 12) + 1); // btwn 1 and 12
            break;
        case 3:
            var startPosition = Math.floor((Math.random() * 3) + 1); // btwn 1 and 3
            break;
        default:
            var startPosition = 1;
    }
    // convert startPosition to a string of nonbreaking spaces
    // so that it can just be appended to each row

    var spacePrefix = numToSpace(startPosition);
 
    var wholeCloud = ''; 
    wholeCloud += oneCloud(spacePrefix);
    if (isRain) {
        wholeCloud += makeItRain(cloudCount, spacePrefix);
    }

    return wholeCloud;
}
    // figure out how to render the whole shape, from the top down
    // clouds have 5 rows plus rain if it exists
   
    // the receipt printer api needs to run row by row and receive the text as though it 
    // were going into a <pre> tag.


function oneCloud(prefix) {
    var row = '';
    var oneWholeCloud = ''; 
    
    row = prefix + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(()<br/>";
    oneWholeCloud = row;
    row = prefix +"&nbsp;&nbsp;&nbsp;&nbsp;(((())<br/>";
    oneWholeCloud += row;
    row = prefix +"&nbsp;&nbsp;(((((()))))<br/>";
    oneWholeCloud += row;
    row = prefix +"(((())))))<br/>";
    oneWholeCloud += row;
    row = prefix + "&nbsp;&nbsp;((())))<br/>";
    oneWholeCloud += row;

    return oneWholeCloud;
}


function makeItRain(cloudCount, prefix) {
    // how many rows of rain will we make?
    var rainRows =  Math.floor((Math.random() * 12) + 4); // btwn 4 and 12 @MOLLY?!

    // we'd do something about the width of the rain based on the Clouds
    let someRain = ''; // the contents of the rain.
    
    // FOR ONE CLOUD
    for (let r = 0; r < rainRows; r++) {
        someRain += prefix + randomSpacer(1, 7) + "; <br/>"; // @TODO randomize the rain.
    }

    return someRain;
}


// This helper function just converts a number to nonbreaking spaces.  
// That's all it does
function numToSpace(howMany) {
    // convert # to spaces
    let prefix = '';
    for (let s =0; s < howMany; s++) {
        prefix += "&nbsp;";
    }

    return prefix;
}

// this helper function generates a random number between a min and a max
// and returns that # in spaces
function randomSpacer(min, max) {
   let theNumber = Math.floor(Math.random() * (max - min + 1)) + min;
   
   return numToSpace(theNumber);
}






function printChandelierA() {
    /// 
    /// SET VARIABLES
    ///
    // Math.floor(Math.random() * (max - min + 1)) + min
    var brassRows = Math.floor((Math.random() * 3) + 4); // btwn 4 and 6
    console.log(brassRows);
    var crystalRows = Math.floor((Math.random() * 3) + 1); // btwn 1 and 3 (each row is rly 2 rows)
    var crystalWidth = '';
    var crystalPrefix = ''; // the # of spaces before crystals start.
    // when 4 brass rows, there are 5 crystal columns
    // when 5, 9
    // when 6, 13
    if (brassRows == 4) {
        crystalWidth = 5;
        crystalPrefix = 6; 
    } else if (brassRows == 5) {
        crystalWidth = 9;
        crystalPrefix = 4;
    } else if (brassRows == 6){
        crystalWidth = 13;
        crystalPrefix = 3; //eyeballing this
    }

    // print the brass to start?
    // these are always the same 
    var row = numToSpace(7) + "<^><br/>";
    row += numToSpace(7) + "^^^<br/>";
    row += numToSpace(6) + "<^^^><br/>";
    row += numToSpace(5) + "<^^^^^><br/>";
    if (brassRows == 5 || brassRows == 6) {
        row += numToSpace(3) + "<^^^^^^^^^><br/>";
    }
    if (brassRows == 6) {
        row +=numToSpace(1) + "<^^^^^^^^^^^^^><br/>"
    }

    // time for Crystals. Width of crystals determined by
    for(let c =0;c < crystalRows; c++) {
        row += numToSpace(crystalPrefix);
        // 
        for (let x = 0; x < crystalWidth; x++) {
            row += "|";
        }
        row += "</br>";
        row += numToSpace(crystalPrefix);
        for (let x = 0; x < crystalWidth; x++) {
            row += "o";
        }
        row += "</br>";

    }



    return row;
}

function printChandelierB() {
    var hasTail = true;
   // determine the variation
   var hasWings = Math.random() > 0.5 ? true : false;
   if (hasWings) {
    hasTail = Math.random() > 0.5 ? true : false; // it can only -not- have a tail if it has wings.
   }

   var row = numToSpace(29) + "<^>" + "<br />";
   row += numToSpace(26) + ">>> | >>>" + "<br />";
   row += numToSpace(26) + "||| | |||" + "<br />";
   if (hasWings && !hasTail) {
    // do stuff
    row += numToSpace(22) + ">>> ;|: | :|; >>>" + "<br />";
    row += numToSpace(22) + "||| o;o | o;o |||" + "<br />";
    row += numToSpace(22) + ";|; ;|: ;" + numToSpace(2) + "o" + numToSpace(2) + "|;|" + "<br />";
    row += numToSpace(22) + "o;o" + numToSpace(11) +  "o;o" + "<br />";
    row += numToSpace(23) + "o" + numToSpace(13) +  "o" + "<br />";


   }





   return row;
}


function printTwinkleBanner() {
    // Math.floor(Math.random() * (max - min + 1)) + min
    var ribbonCount = Math.floor((Math.random() * 11) + 20); // btwn 20-30

    var row = '';

    // add pole length
    for (let p = 0; p<(ribbonCount +4); p++) {
        row+= "=";
    }
    // add endcaps
    row +="[]";

    // each column is a character of random length, 3 - 11 rows long
    // make array, filled with characters
    // then "flip" to vertical
    let availChars = "*`:-^v";
    var ribbons = [];
    var randomCharacter = '';
    var ribbonLength = 0;
    var longestRibbon = 0;
    for (let r = 0; r < ribbonCount; r++) {
        // what is the character
        randomCharacter = availChars[Math.floor(Math.random() * availChars.length)]
        // how long is this ribbon? (between 3 and 11 chars, actually)
        ribbonLength = Math.floor((Math.random() * 9) + 3);
        // make that ribbon that number of times
        ribbons[r] = randomCharacter.repeat(ribbonLength);
        // if it's a certain character, append a v @todo
        if (randomCharacter == ':') {
            ribbons[r] += "v";
        }
        // store the length of the longest.
        if (ribbonLength > longestRibbon) {
            longestRibbon = ribbonLength;
        }

    }

    // the spacing beneath the twinkle banner is 3 spaces.  
    // So it' snot a consistent number, but every ribbon ends with 3 empty spaces, 
    // and every ribbon has the same length (3 spaces longer than the longest).

    // 
    for (r = 0; r < ribbonCount; r++) {
        ribbons[r].concat("&nbsp;".repeat(longestRibbon = ribbons[r].length));
    }
    console.log(ribbons);

    // grab the first char from all elements in an array, then repeat
    // https://stackoverflow.com/questions/47035752/getting-the-first-characters-of-each-string-in-an-array-in-javascript
    // that but pop the first elements off... but we'll need to add spaces for the ones that don't have
    // values so really tehy will all be the same length.
    
    // the simplest answer here is just a shfit. 
    // https://stackoverflow.com/a/48399577

    // now that we have all of the ribbons
    for (r = 0; r < ribbonCount; r++) {
        // what is the character
        randomCharacter = availChars[Math.floor(Math.random() * availChars.length)]
        // how long is this ribbon? (between 3 and 11 chars, actually)
        ribbonLength = Math.floor((Math.random() * 9) + 3);
        // make that ribbon that number of times
        ribbons[r] = randomCharacter.repeat(ribbonLength); 
        // if the character is :, add a v TODO  

    }




    return row;
}






// put stuff onto the receipt

for (let y = 0; y < 5; y++) {
    textContent += printClouds();
    textContent += "<br/><br/>";
    textContent += printChandelierA();
    textContent += printChandelierB() + "<br/>";
    textContent += printTwinkleBanner() + "<br/>";

}
 


// FINALLY: everything that we did - put it onto the receipt
let ReceiptPlace = document.querySelector('#receipt');
ReceiptPlace.innerHTML = textContent;