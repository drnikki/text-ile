import {numToSpace} from "../stringManipulation.js";

// helper function to get a random int within a certain range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function printDiamondButterfly() {
    const edgeLength = getRandomInt(2, 5)
    const fillerChars = [["*", "*"], ["{", "}"], ["(", ")"]]
    const fillerChar = fillerChars[Math.floor(Math.random()*fillerChars.length)];
    const centering = getRandomInt(0, 20)

    let ret = ""
    let spacer = edgeLength - 1;
    for (let i=0; i<edgeLength; i++) {
        ret += numToSpace(centering) + numToSpace(spacer) + "/" + fillerChar[0].repeat(i) + fillerChar[1].repeat(i) + "\\" + numToSpace(spacer * 2) + "/" + fillerChar[0].repeat(i) + fillerChar[1].repeat(i) + "\\" + "<br/>";
        spacer--;
    }
    spacer = 0;
    for (let i=0; i<edgeLength; i++) {
        ret += numToSpace(centering) + numToSpace(spacer) + "\\" + fillerChar[0].repeat(edgeLength - (i + 1)) + fillerChar[1].repeat(edgeLength - (i + 1)) + "/" + numToSpace(spacer * 2) + "\\" + fillerChar[0].repeat(edgeLength - (i + 1)) + fillerChar[1].repeat(edgeLength - (i + 1)) + "/" + "<br/>";
        spacer++;
    }
    return ret
}