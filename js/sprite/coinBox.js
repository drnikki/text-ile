import { numToSpace } from "../stringManipulation.js";
import { getTimestamp } from "../stringManipulation.js";

/**
 *
 * @returns prints the mario coin box - it is 22 chars wide.
 */
 const printMarioCoinBox = (align = "random") => {
    let spacer = "";
    // this feels very 2004.
    switch (align) {
        case "random":
            spacer = numToSpace(Math.floor(Math.random() * (15)));
            break;
        case "left":
            spacer = numToSpace(0);
            break;
        case "right":
            spacer = numToSpace(17);
            break;
        case "center":
            spacer = numToSpace(9);
            break;
    }

    return spacer + "[][][][][][][][][][][]" + "<br/>" + spacer + "[]------------------[]" + "<br/>" + 
        spacer + "[]-----????????-----[]" + "<br/>" + spacer + "[]--?????????????---[]" + "<br/>" + 
        spacer + "[]--???-------???---[]" + "<br/>" + spacer + "[]---???-----???----[]" + "<br/>" + 
        spacer + "[]---------???------[]" + "<br/>" + spacer + "[]--------???-------[]" + "<br/>" + 
        spacer + "[]--------???-------[]" + "<br/>" + spacer + "[]------------------[]" + "<br/>" + 
        spacer + "[]--------??--------[]" + "<br/>" + spacer + "[]---" + getTimestamp() + "--[]" + "<br/>" + 
        spacer + "[][][][][][][][][][][]" ;
}

export default printMarioCoinBox;