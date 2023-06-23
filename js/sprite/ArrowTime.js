import { getTimestamp, numToSpace } from "../stringManipulation.js";
import Sprite from "./Sprite.js";


function printArrowTime() {

  let arrowTime ='';

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

export default class ArrowTime extends Sprite {
  constructor() {
    super(printArrowTime());
  }
}