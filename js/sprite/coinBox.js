import { numToSpace } from "../stringManipulation.js";

/**
 *
 * @returns prints the mario coin box
 */
 const printMarioCoinBox = () => {
    const spacer = numToSpace(Math.floor(Math.random() * (15)));
    return spacer + "[][][][][][][][][][][]" + "<br/>" + spacer + "[]------------------[]" + "<br/>" + 
        spacer + "[]-----????????-----[]" + "<br/>" + spacer + "[]--?????????????---[]" + "<br/>" + 
        spacer + "[]--???-------???---[]" + "<br/>" + spacer + "[]---???-----???----[]" + "<br/>" + 
        spacer + "[]---------???------[]" + "<br/>" + spacer + "[]--------???-------[]" + "<br/>" + 
        spacer + "[]--------???-------[]" + "<br/>" + spacer + "[]------------------[]" + "<br/>" + 
        spacer + "[]--------??--------[]" + "<br/>" + spacer + "[]------------------[]" + "<br/>" + 
        spacer + "[][][][][][][][][][][]" + "<br/>";
}

export default printMarioCoinBox;