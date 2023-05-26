import { getTimestamp, numToSpace } from "../stringManipulation.js";

// TODO parameter that flips the point of the arrow to the R or L
export default function printArrowTime(faceLeft = true) {

    let arrowTime ='';
    if (faceLeft) {
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

        // tight loop starts
    for (let x=28; x>=10; x-=2) {
        arrowTime += numToSpace(x) + getTimestamp() + "<br/>";
    }
    // tight loop ends
    for (let x=10; x<28; x+=2) {
        arrowTime += numToSpace(x) + getTimestamp() + "<br/>";
    }

        // wide loop comes back
        for (let x=21; x >=0; x-=2) {
            // line a
            arrowTime += numToSpace(x) + getTimestamp() + "<br/>";
            // line b
            arrowTime += numToSpace(x + 4)  + getTimestamp() + "<br />"
        }

    // wide loop goes out
    for (let x=0; x<24; x+=2) {
        // line a
        arrowTime += numToSpace(x) + getTimestamp() + "<br/>";
        // line b
        arrowTime += numToSpace(x + 4)  + getTimestamp() + "<br />"
    }


    return arrowTime;


   



}