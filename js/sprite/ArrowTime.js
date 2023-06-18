import { getTimestamp, numToSpace } from "../stringManipulation.js";
import Sprite from "./Sprite.js";


function printArrowTime(pointRight = true) {

    let arrowTime ='';

    if (pointRight) {
        // tight loop goes out
        for (let x=0; x<18; x+=2) {
            arrowTime += numToSpace(x) + getTimestamp() + "<br/>";
        }
        // tight loop comes back
        for (let x=18; x>=0; x-=2) {
            arrowTime += numToSpace(x) + getTimestamp() + "<br/>";
        }

        // wide loop goes out
        for (let x=0; x<24; x+=2) {
            // line a
            arrowTime += numToSpace(x) + getTimestamp() + "<br/>";
            // line b
            arrowTime += numToSpace(x + 4)  + getTimestamp() + "<br />"
        }
        // wide loop comes back
        for (let x=21; x >=0; x-=2) {
            // line a
            arrowTime += numToSpace(x) + getTimestamp() + "<br/>";
            // line b
            arrowTime += numToSpace(x + 4)  + getTimestamp() + "<br />"
        }

        return arrowTime;
    }
    // down here, the arrow is pointing Left.


    // tight loop starts, heading left
    for (let x=27; x>=10; x-=2) {
        arrowTime += numToSpace(x) + getTimestamp() + "<br/>";
    }
    // tight peak goes back to the right
    for (let x=12; x<28; x+=2) {
        arrowTime += numToSpace(x) + getTimestamp() + "<br/>";
    }
    // wide loop comes back
    for (let x=23; x>=2; x-=2) {

        // line a
        arrowTime += numToSpace(x + 4) + getTimestamp() + "<br/>";
        // line b
        arrowTime += numToSpace(x)  + getTimestamp() + "<br />"
    }


    // wide loop goes out
    for (let x=2; x<24; x+=2) {
        // line a
        arrowTime += numToSpace(x + 4) + getTimestamp() + "<br/>";
        // line b
        arrowTime += numToSpace(x)  + getTimestamp() + "<br />"
    }


    return arrowTime;
}

export default class ArrowTime extends Sprite {
    constructor(pointRight) {
        super(printArrowTime(pointRight));
    }
}