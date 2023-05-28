import { getTimestamp, numToSpace } from "../stringManipulation.js";

export default function printArrowTime(pointRight = true) {

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


    // tight loop comes back
    for (let x=28; x>=10; x-=2) {
        arrowTime += numToSpace(x) + getTimestamp() + "<br/>";
    }
    // tight loop goes out
    for (let x=12; x<30; x+=2) {
        arrowTime += numToSpace(x) + getTimestamp() + "<br/>";
    }
    // wide loop comes back
    for (let x=24; x>=2; x-=2) {
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