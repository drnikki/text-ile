
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

    console.log(wholeCloud)

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

// helper function to get a random int within a certain range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function printStarburst(width = 20, height = 15) {
    var availChars = "#*."
    var centChar = "#"
    // var centChar = availChars[Math.floor(Math.random() * availChars.length)]     //uncomment to make central character random

    // dimensions of 2d array. uncomment following lines to make dimensions random within given range
    m = width
    n = height
    // m = getRandomInt(min, max);
    // n = getRandomInt(min, max);

    var starGrid = Array.from(Array(n), _ => Array(m).fill('&nbsp;'));

    // x and y values of center rectangle within starburst 2d array
    xmid_min = Math.floor(m / 4);
    xmid_max = Math.floor((m * 3) / 4);
    ymid_min = Math.floor(n / 4);
    ymid_max = Math.floor((n * 3) / 4);

    // central coordinates
    cent_x = Math.floor(m / 2);
    cent_y = Math.floor(n / 2);

    // available directions for "arms" of central character in starburst
    var directions = [[[0,1], [-1,1]], [[1,0],[1,1]], [[0,-1],[1,-1]], [[-1,0],[-1,-1]]]

    // iterate through directions and produce arms
    for (let s = 0; s < directions.length + 1; s++) {
        lineLen = getRandomInt(2, Math.min(xmid_max - xmid_min, ymid_max - ymid_min) / 3)
        currLen = 0
        x = cent_x
        y = cent_y

        // for each direction, create each arm
        while (y < starGrid.length && y > 0 && x < starGrid[0].length && x > 0) {
            starGrid[y][x] = centChar

            // continue extending arm until reach max arm limit
            if (currLen < lineLen) {
                x += directions[s % directions.length][getRandomInt(0, 1)][0]
                y += directions[s % directions.length][getRandomInt(0, 1)][1]
            } 

            // add curvature to arm at the end (not necessary and can comment out)
            else {
                x += directions[s % directions.length][1][0]
                y += directions[s % directions.length][1][1]
                starGrid[y][x] = centChar
                break
            } 

            // break if crossing another arm
            currLen++
            if (starGrid[y][x] == centChar) {
                break
            }
        }
    }

    // scatter emanating characters
    availChars = availChars.replace(centChar, '')
    secondChar = availChars[Math.floor(Math.random() * availChars.length)]
    availChars = availChars.replace(secondChar, '')
    thirdChar = availChars[Math.floor(Math.random() * availChars.length)]

    createSpreadChar(starGrid, "*", centChar, xmid_min, xmid_max, ymid_min, ymid_max, 4);
    createSpreadChar(starGrid, ".", centChar, xmid_min, xmid_max, ymid_min, ymid_max, 4);
    createSpreadChar(starGrid, "*", centChar, 0, m - 1, 0, n - 1, 3);
    createSpreadChar(starGrid, ".", centChar, 0, m - 1, 0, n - 1, 3);

    // convert 2d array into string
    arrText='';
    for (var i = 0; i < starGrid.length; i++) {
        for (var j = 0; j < starGrid[i].length; j++) {
            arrText+=starGrid[i][j] + ' ';
        }
        arrText += "<br/>";
    }
    return arrText;
    // return stringStarBust(starGrid)
}

// helper function to randomly scatter emanating in grid
// pass in the grid, character to scatter, central character, x and y range, and max number of characters to scatter
function createSpreadChar(grid, char, centChar, x_min, x_max, y_min, y_max, max_spots) {
    var occupiedSpots = 0;
      
    while(occupiedSpots < max_spots) {
        x_ran = getRandomInt(x_min, x_max);
        y_ran = getRandomInt(y_min, y_max);
        if(grid[y_ran][x_ran] != centChar){
            grid[y_ran][x_ran] = char;
            occupiedSpots++;
        }
    }
}



// put stuff onto the receipt

for (let y = 0; y < 5; y++) {
    textContent += printClouds();
    textContent += "<br/><br/>";
    textContent += printChandelierA();
    textContent += printChandelierB() + "<br/>";
    textContent += printTwinkleBanner() + "<br/>";
    textContent += printStarburst() + "<br/>";
}
 
// FINALLY: everything that we did - put it onto the receipt
let ReceiptPlace = document.querySelector('#receipt');
ReceiptPlace.innerHTML = textContent;