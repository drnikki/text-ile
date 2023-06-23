import {numToSpace} from "../stringManipulation.js";
import Sprite from "./Sprite.js";

/**
 * prints the bug
 */
const printBug = () => (
    // every line of code is a line of the bug
    numToSpace(9) + '*' + numToSpace(9) + '/\\' + numToSpace(9) + '*' + '<br/>'
    + numToSpace(8) + '*{}' + numToSpace(6) + '/\\##/\\' + numToSpace(6) + '{}*' + '<br/>'
    + numToSpace(7) + '*{{}}' + numToSpace(4) + '\\######/' + numToSpace(4) + '{{}}*' + '<br/>'
    + numToSpace(6) + '*{{{{}}}' + numToSpace(1) + '\\########/' + numToSpace(1) + '{{{}}}}*' + '<br/>'
    + numToSpace(8) + '*{{{}}' + '\\\\########//' + '{{}}}*' + '<br/>'
    + '_' + numToSpace(9) + '*{{{}}' + '\\######/' + '{{}}}*' + '<br/>'
    + numToSpace(1) + '-__--\\' + numToSpace(5) + '*{{{}}' + '*/\\*' + '{{}}}*' + '<br/>'
    + numToSpace(2) + '*-' + '&'.repeat(3) + '\\----\\' + numToSpace(1) + '***' + numToSpace(6)
        + '***' + numToSpace(1) + '/----/' + '&'.repeat(3) + '-*' + '<br/>'
    + numToSpace(4) + '*-' + '&'.repeat(7) + '\\----\\' + numToSpace(2) + '/----/' + '&'.repeat(7) + '-*' + '<br/>'
    + numToSpace(7) + '*-' + '&'.repeat(10) + '\\/' + '&'.repeat(10) + '-*' + '<br/>'
    + numToSpace(10) + '*-' + '&'.repeat(7) + numToSpace(2) + '&'.repeat(7) + '-*' + '<br/>'
    + numToSpace(12) + '*-' + '&'.repeat(2) + numToSpace(8) + '&'.repeat(2) + '-*' + '<br/>'
    + numToSpace(5) + '(' + '0'.repeat(5) + numToSpace(3) + '*' + numToSpace(4) + '@@'
        + numToSpace(4) + '*' + numToSpace(3) + '0'.repeat(5) + ')' + '<br/>'
    + numToSpace(4) + '(00+~0000)' + numToSpace(4) + '@' + numToSpace(2)
        + '@' + numToSpace(4) + '(0000~+00)' + '<br/>'
    + numToSpace(3) + '((0+~~~000)' + numToSpace(3) + '@' + numToSpace(1) + '%%'
        + numToSpace(1) + '@' + numToSpace(3) + '(000~~~+0)' + '<br/>'
    + numToSpace(3) + '((00+~~000)' + numToSpace(1) + '@@' + numToSpace(1) + '%%%%'
        + numToSpace(1) + '@@' + numToSpace(1) + '(000~~+00)' + '<br/>'
    + numToSpace(5) + '(00000@@@@' + numToSpace(2) + '%%%%%%' + numToSpace(2) + '@@@@@0000)' + '<br/>'
    + numToSpace(8) + '@@@@' + numToSpace(6) + '%%%%' + numToSpace(7) + '@@@@' + '<br/>'
    + numToSpace(19) + '%%' + '<br/>'
);

export default class Bug extends Sprite{
    constructor() {
        super(printBug());
    }
}