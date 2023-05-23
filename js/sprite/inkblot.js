
// Inkblot creates a randomized symmetrical blob with a dark and light layer

//Randomize inkblot height
//create randomized horizontal line

import {numToSpace, numToChar, randomSpacer} from "../stringManipulation.js";

export default function printInkBlot(){
    let blotHeight = Math.random() * 6 + 5;

    var wholeBlot = '';
    var row ='';
    let main = '8';
    let bufferL = '(';
    let bufferR = ')';

    for (let i = 0; i <blotHeight; i++){
        let mainLine = Math.floor(Math.random() * 10 + 6);
        let bufferLine = Math.floor(Math.random() * 5 + 0);
        let lineLength = bufferLine + mainLine;
        let spaceLength = 20-lineLength;
        
        
        row += numToChar(spaceLength,'&nbsp;')+ bufferL.repeat(bufferLine)+ main.repeat(mainLine*2)+ bufferR.repeat(bufferLine)+"<br/>";
        wholeBlot = row;
    }

    return wholeBlot
}

       