import { numToSpace } from "../stringManipulation.js";
import Sprite from "./Sprite.js";


function printChevronToQBox(state) {
    //state 1 = left, up; state 2 = left, down; state 3 = right up; state 4 = right, down;
    switch (state) {
        case 1: // left, up
            return '*********************)' + "<br/>" +
                '|||||||||||||||||||||||)' + "<br/>" +
                '************************)' +  "<br/>" +
                '\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\*)'+  "<br/>" +
                numToSpace(25) +  '*)' + "<br />" + 
                numToSpace(27)  + '*)' + "<br/>" +
                numToSpace(29) + '*)' + "<br />" +
                numToSpace(31) + '*)' + "<br />" +
                '\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\*)' + "<br/>" +
                '*************************************)' + "<br/>" +
                '||||||||||||||||||||||||||||||||||||||)' + "<br/>" +
                '***************************************)' + "<br/>"
            break;
        case 2: // left, down
            return '***************************************)' + "<br/>" +
                '||||||||||||||||||||||||||||||||||||||)&nbsp;' + "<br/>" +
                '*************************************)&nbsp;&nbsp;' + "<br/>" +
                '/ / / / / / / / / / / / / / / / /*) ' + "<br/>" +
                '' + numToSpace(31) + '*)' + "<br/>" +
                '' + numToSpace(29) + '*)' + "<br/>" +
                '' + numToSpace(27) + '*)' + "<br/>" +
                '' + numToSpace(25) + '*)' +  "<br/>" +
                '/ / / / / / / / / / / /*)' + numToSpace(10) + '&nbsp;&nbsp;&nbsp;&nbsp;' + "<br/>" +
                '************************)' + numToSpace(10) + '' + numToSpace(5) + '' + "<br/>" +
                '|||||||||||||||||||||||)'   + "<br/>" +
                '*********************)' + numToSpace(10) + '' + numToSpace(5) + '&nbsp;&nbsp;' + "<br/>";
            break;
        case 3: // right, up
            //i took the down and made it an pu
            return '' + numToSpace(17) + '(**********************' + "<br/>" +
                '' + numToSpace(16) + '(|||||||||||||||||||||||' + "<br/>" +
                '' + numToSpace(15)  + '(************************' + "<br/>" +
                '' + numToSpace(14) + '(*\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ' + "<br/>" +
                '' + numToSpace(12) + '(*' +  "<br/>" +
                '' + numToSpace(10) + '(*' + "<br/>" +
                '' + numToSpace(8) + '(*' +  "<br/>" +
                '' + numToSpace(6) + '(*' +  "<br/>" +
                '&nbsp;&nbsp;&nbsp;&nbsp;(*\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ' + "<br/>" +
                '&nbsp;&nbsp;(*************************************' + "<br/>" +
                '(||||||||||||||||||||||||||||||||||||||' + "<br/>" +
                '(***************************************' + "<br/>";
            break;
        case 4: // right, down;
            return '(***************************************' + "<br/>" +
                '(||||||||||||||||||||||||||||||||||||||' + "<br/>" +
                '&nbsp;&nbsp;(*************************************' + "<br/>" +
                '&nbsp;&nbsp;&nbsp;&nbsp;(*\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ' + "<br/>" +
                '' + numToSpace(6) + '(*'  + "<br/>" +
                '' + numToSpace(8) + '(*' +  "<br/>" +
                '' + numToSpace(10) + '(*'  + "<br/>" +
                '' + numToSpace(12) + '(*' + "<br/>" +
                '' + numToSpace(14) + '(*\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ' + "<br/>" +
                '' + numToSpace(15) + '(************************' + "<br/>" +
                '' + numToSpace(16) + '(|||||||||||||||||||||||' + "<br/>" +
                '' + numToSpace(17) + '(**********************' + "<br/>";
            break;

    }


}

export default class ChevronToQBox extends Sprite {
    constructor(state) {
        super(printChevronToQBox(state));
    }
}