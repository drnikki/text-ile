import {numToSpace} from "../stringManipulation.js";
import Sprite from "./Sprite.js";

/**
 * print triangle 1
 */
const printTriangle1 = () => {
    return (
        printTriangleTop()
        + numToSpace( 2) + '0-;::.:..:-0' + '<br/>'
        + numToSpace( 3) + `0-${numToSpace(2)}:,:.-0` + '<br/>'
        + numToSpace( 4) + '0-' + numToSpace(4) + '-0' + '<br/>'
        + numToSpace( 5) + '0-' + numToSpace(2) + '-0' + '<br/>'
        + numToSpace( 6) + '0--0' + '<br/>'
        + numToSpace( 7) + '\\/' + '<br/>'
    );
};

/**
 * print triangle 2
 */
const printTriangle2 = () => {
    return (
        printTriangleTop()
        + numToSpace( 3) + '0-::.:..-0' + '<br/>'
        + numToSpace( 5) + '0-;,-0' + '<br/>'
        + numToSpace( 6) + '0--0' + '<br/>'
        + numToSpace( 7) + '\\/' + '<br/>'
    );
};

/**
 * prints the common top part for triangles 1 and 2 (all the way down through first 2 rows with 0's)
 */
const printTriangleTop = () => (
     numToSpace(7) + '()' + '<br/>'
    + numToSpace(6) + '/.&nbsp;\\' + '<br/>'
    + numToSpace(2) + '|||~&nbsp;;.&nbsp;~|||' + '<br/>'
    + '---.;,.:,.;:,---' + '<br/>'
    + '0-.;,.:...;:,.-0' + '<br/>'
    + numToSpace(1) + '0-.;:,..:,.:-0' + '<br/>'
);

export class Triangle1 extends Sprite {
    constructor() {
        super(printTriangle1());
        this.setAlign("center");
    }
}

export class Triangle2 extends Sprite {
    constructor() {
        super(printTriangle2());
        this.setAlign("center");
    }
}