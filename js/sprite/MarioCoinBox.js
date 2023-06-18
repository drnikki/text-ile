import { getTimestamp } from "../stringManipulation.js";
import Sprite from "./Sprite.js";

/**
 *
 * @returns prints the mario coin box - it is 22 chars wide.
 */
 const printMarioCoinBox = () => {


    return "[][][][][][][][][][][]" + "<br/>" + "[]------------------[]" + "<br/>" + 
        "[]-----????????-----[]" + "<br/>" + "[]--?????????????---[]" + "<br/>" + 
        "[]--???-------???---[]" + "<br/>" + "[]---???-----???----[]" + "<br/>" + 
        "[]---------???------[]" + "<br/>" + "[]--------???-------[]" + "<br/>" + 
        "[]--------???-------[]" + "<br/>" + "[]------------------[]" + "<br/>" + 
        "[]--------??--------[]" + "<br/>" + "[]---" + getTimestamp() + "--[]" + "<br/>" + 
        "[][][][][][][][][][][]" ;
}

export default class MarioCoinBox extends Sprite {
     constructor() {
         super(printMarioCoinBox());
         this.setAlign("random");
     }
}