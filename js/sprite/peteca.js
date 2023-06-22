import { numToSpace } from "../stringManipulation.js";

/**
 * peteca sprite
 * @author Michael Crockett
 */

/**
 * peteca sprite
 * @param padding - offset on the left. default is random value from 0 to 10
 */
const printPeteca = (padding = Math.floor(Math.random() * 10)) =>
  `${numToSpace(padding)}&nbsp;&nbsp;&nbsp;&nbsp;<br/>` +
  `${numToSpace(padding)}\\&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;^<br/>` +
  `${numToSpace(padding)}&nbsp;\\|/&nbsp;|/&nbsp;|<br/>` +
  `${numToSpace(padding)}&nbsp;&nbsp;|/&nbsp;|&nbsp;&nbsp;|/<br/>` +
  `${numToSpace(padding)}&nbsp;\\|&nbsp;&nbsp;|&nbsp;/|<br/>` +
  `${numToSpace(padding)}\\&nbsp;|/&nbsp;|/&nbsp;|/<br/>` +
  `${numToSpace(padding)}&nbsp;\\\\/&nbsp;|&nbsp;&nbsp;/<br/>` +
  `${numToSpace(padding)}^&nbsp;&nbsp;\\&nbsp;|&nbsp;//<br/>` +
  `${numToSpace(padding)}&nbsp;\\&nbsp;&nbsp;\\|//&nbsp;&nbsp;&nbsp;^<br/>` +
  `${numToSpace(padding)}&nbsp;\\\\&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;/<br/>` +
  `${numToSpace(padding)}&nbsp;&nbsp;\\\\|&nbsp;|&nbsp;\\//<br/>` +
  `${numToSpace(padding)}&nbsp;&nbsp;&nbsp;&nbsp;\\|&nbsp;&nbsp;//<br/>` +
  `${numToSpace(padding)}&nbsp;&nbsp;&nbsp;&nbsp;|=|/<br/>` +
  `${numToSpace(padding)}&nbsp;&nbsp;__|=|__<br/>` +
  `${numToSpace(padding)}&nbsp;/&nbsp;|---|&nbsp;\\<br/>` +
  `${numToSpace(padding)}&nbsp;\\_______/<br/>`;
export default printPeteca;
