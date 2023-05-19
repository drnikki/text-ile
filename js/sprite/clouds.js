import {numToSpace, numToChar, randomSpacer} from "../stringManipulation.js";


export default function printClouds() {
    ///
    /// set variables for this instance of clouds
    ///

    // 1. determine whether or not there are 1, 2 or 3 clouds
    var cloudCount = Math.floor((Math.random() * 3) + 1); // btwn 1 and 3
    // is there rain?
    var isRain = Math.random() > 0.5;
    // where do the clouds start? (position is different based on cloudCount)
    let startPosition = 1;
    switch(cloudCount) {
        case 1:
            startPosition = Math.floor((Math.random() * 24) + 1); // btwn 1 and 26
            break;
        case 2:
            startPosition = Math.floor((Math.random() * 12) + 1); // btwn 1 and 12
            break;
        case 3:
            startPosition = Math.floor((Math.random() * 3) + 1); // btwn 1 and 3
            break;
    }
    // convert startPosition to a string of nonbreaking spaces
    // so that it can just be appended to each row

    var spacePrefix = numToChar(startPosition,'-');

    var wholeCloud = '';
    wholeCloud += oneCloud(spacePrefix);
    if (isRain) {
      //  wholeCloud += makeItRain(cloudCount, spacePrefix);
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

    row = prefix + "------((()<br/>";
    oneWholeCloud = row;
    row = prefix +"---((((()))<br/>";
    oneWholeCloud += row;
    row = prefix +"--((((((())))))<br/>";
    oneWholeCloud += row;
    row = prefix +"((((((((()))))))))<br/>";
    oneWholeCloud += row;
    row = prefix + "--(((((()))))<br/>";
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

