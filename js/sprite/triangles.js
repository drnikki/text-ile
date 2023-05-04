import {numToSpace} from "../stringManipulation.js";

/**
 * print triangle 1
 */
export const printTriangle1 = () => {
    const padding = 12;
    return (
        printTriangleTop(numToSpace(padding))
        + numToSpace(padding + 2) + '0-;::.:..:-0' + '<br/>'
        + numToSpace(padding + 3) + `0-${numToSpace(2)}:,:.-0` + '<br/>'
        + numToSpace(padding + 4) + '0-' + numToSpace(4) + '-0' + '<br/>'
        + numToSpace(padding + 5) + '0-' + numToSpace(2) + '-0' + '<br/>'
        + numToSpace(padding + 6) + '0--0' + '<br/>'
        + numToSpace(padding + 7) + '\\/' + '<br/>'
    );
};

/**
 * print triangle 2
 */
export const printTriangle2 = () => {
    const padding = 12;
    return (
        printTriangleTop(numToSpace(padding))
        + numToSpace(padding + 3) + '0-::.:..-0' + '<br/>'
        + numToSpace(padding + 5) + '0-;,-0' + '<br/>'
        + numToSpace(padding + 6) + '0--0' + '<br/>'
        + numToSpace(padding + 7) + '\\/' + '<br/>'
    );
};

/**
 * prints the common top part for triangles 1 and 2 (all the way down through first 2 rows with 0's)
 */
const printTriangleTop = padding => (
    padding + numToSpace(7) + '()' + '<br/>'
    + padding + numToSpace(6) + '/.&nbsp;\\' + '<br/>'
    + padding + numToSpace(2) + '|||~&nbsp;;.&nbsp;~|||' + '<br/>'
    + padding + '---.;,.:,.;:,---' + '<br/>'
    + padding + '0-.;,.:...;:,.-0' + '<br/>'
    + padding + numToSpace(1) + '0-.;:,..:,.:-0' + '<br/>'
);