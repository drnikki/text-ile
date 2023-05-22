import {numToSpace, numToChar, randomSpacer, reverseString} from "../stringManipulation.js";


/**
 * 
 * @param {*} spaceChar 
 * @param {*} minLeft 
 * @param {*} maxLeft 
 * @param {*} flipped - do we reverse to "flip" or no
 * @returns 
 */
export default function printClouds(spaceChar,minLeft, maxLeft, flipped) {

    ///
    /// set variables for this instance of clouds
    ///

    // 1. determine whether or not there are 1, 2 or 3 clouds
    var cloudCount = Math.floor((Math.random() * 3) + 1); // btwn 1 and 3
    // is there rain?
    var isRain = Math.random() > 0.5;
    // where do the clouds start? (position is different based on cloudCount)
    let startPosition = 1;

    startPosition = Math.floor((Math.random() * maxLeft) + minLeft); // btwn 10 and 32
    
    //creates leader before cloud with character
    var spacePrefix = numToChar(startPosition,spaceChar);

    var wholeCloud = '';
   
    // if flipped == TRUE, then flip it before it goes into the variable.
    if (flipped) {
       wholeCloud =  oneCloudFlipped(startPosition, spaceChar);
    } else {
        wholeCloud = oneCloud(spacePrefix, spaceChar);
    }
    
    

    return wholeCloud;
    
}
// figure out how to render the whole shape, from the top down
// clouds have 5 rows plus rain if it exists

// the receipt printer api needs to run row by row and receive the text as though it
// were going into a <pre> tag.


function oneCloud(prefix, spaceChar) {
    var row = '';
    var oneWholeCloud = '';

    row = prefix + spaceChar.repeat(6) + "((()<br/>";
    oneWholeCloud = row;
    row = prefix + spaceChar.repeat(3) + "((((())))<br/>";
    oneWholeCloud += row;
    row = prefix + spaceChar.repeat(2) + "((((((())))))<br/>";
    oneWholeCloud += row;
    row = prefix +"((((((((()))))))))<br/>";
    oneWholeCloud += row;
    row = prefix + spaceChar.repeat(2) +"(((((()))))<br/>";
    oneWholeCloud += row;

    return oneWholeCloud;
}

/**
 * I just... here it is flipped, i just couldn't -n
 * 
 * @param {*} startPosition - the numeric start pos
 * @param {*} spaceChar 
 * @returns 
 */
function oneCloudFlipped(startPosition, spaceChar) {
    var prefix = numToChar(startPosition,"&nbsp;");

    var row = '';
    var oneWholeCloud = '';
    //prefix = "&nbsp;";
    row = "&nbsp;".repeat(6) +  "((()" + spaceChar.repeat(30) + "<br/>";
    oneWholeCloud = row;
    row =  "&nbsp;".repeat(3) + "((((())))"  + spaceChar.repeat(28) + "<br/>";
    oneWholeCloud += row;
    row =  "&nbsp;".repeat(2) + "((((((())))))"   + spaceChar.repeat(25) + "<br/>"
    oneWholeCloud += row;
    row = "((((((((()))))))))" + spaceChar.repeat(22) +"<br />";
    oneWholeCloud += row ;
    row = prefix + "&nbsp;".repeat(2) + "(((((()))))"  + spaceChar.repeat(24) +  "<br/>";
    oneWholeCloud += row;

    return oneWholeCloud;
}



function makeItRain(cloudCount, prefix) {
    // how many rows of rain will we make?
    var rainRows =  Math.floor((Math.random() *5) + 4); // btwn 4 and 12 @MOLLY?!

    // we'd do something about the width of the rain based on the Clouds
    let someRain = ''; // the contents of the rain.

    // FOR ONE CLOUD
    for (let r = 0; r < rainRows; r++) {
        someRain += prefix + randomSpacer(1, 3) + "; <br/>"; // @TODO randomize the rain.
    }

    return someRain;
}

