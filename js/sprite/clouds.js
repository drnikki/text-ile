import {numToSpace, numToChar, randomSpacer, reverseString} from "../stringManipulation.js";


/**
 * 
 * @param {*} spaceChar 
 * @param {*} minLeft 
 * @param {*} maxLeft 
 * @param {*} flipped - do we reverse to "flip" or no
 * @returns 
 */
export default function printClouds(spaceChar = "&nbsp;", minLeft = 0, maxLeft = 10, flipped = 0) {

    // where do the clouds start? (position is different based on cloudCount)
    let startPosition = 1;

    startPosition = Math.floor((Math.random() * maxLeft) + minLeft); 
    
    //creates leader before cloud with character
    var spacePrefix = numToChar(startPosition, spaceChar);

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
    // we have to fill it with spaces because the lines are on the right.
    var prefix = numToChar(startPosition, "&nbsp;");

    var row = '';
    var oneWholeCloud = '';
    var fill = ''; // this is to calculate how long the fills are
    //prefix = "&nbsp;";
    row = prefix + "&nbsp;".repeat(6) +  "((()";
    fill = numToChar((30 - startPosition), spaceChar);
    oneWholeCloud += row + fill + "<br />"; // do the calculation

    row =  prefix + "&nbsp;".repeat(3) + "((((())))";
    fill = numToChar((28 - startPosition), spaceChar);
    oneWholeCloud += row + fill + "<br />";

    row =  prefix + "&nbsp;".repeat(2) + "((((((())))))";
    fill = numToChar((25 - startPosition), spaceChar);
    oneWholeCloud += row + fill + "<br />";

    row = prefix + "((((((((()))))))))";
    fill = numToChar((22 - startPosition), spaceChar);
    oneWholeCloud += row + fill + "<br />";

    row = prefix + "&nbsp;".repeat(2) + "(((((()))))";
    fill = numToChar((27 - startPosition), spaceChar);
    oneWholeCloud += row + fill + "<br />";

    return oneWholeCloud;
}


