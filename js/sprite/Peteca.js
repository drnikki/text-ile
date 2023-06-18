import Sprite from "./Sprite.js";

/**
 * peteca sprite
 * @author Michael Crockett
 */

const printPeteca = () => (
    `&nbsp;&nbsp;&nbsp;&nbsp;<br/>` +
    `\\&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;^<br/>` +
    `&nbsp;\\|/&nbsp;|/&nbsp;|<br/>` +
    `&nbsp;&nbsp;|/&nbsp;|&nbsp;&nbsp;|/<br/>` +
    `&nbsp;\\|&nbsp;&nbsp;|&nbsp;/|<br/>` +
    `\\&nbsp;|/&nbsp;|/&nbsp;|/<br/>` +
    `&nbsp;\\\\/&nbsp;|&nbsp;&nbsp;/<br/>` +
    `^&nbsp;&nbsp;\\&nbsp;|&nbsp;//<br/>` +
    `&nbsp;\\&nbsp;&nbsp;\\|//&nbsp;&nbsp;&nbsp;^<br/>` +
    `&nbsp;\\\\&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;/<br/>` +
    `&nbsp;&nbsp;\\\\|&nbsp;|&nbsp;\\//<br/>` +
    `&nbsp;&nbsp;&nbsp;&nbsp;\\|&nbsp;&nbsp;//<br/>` +
    `&nbsp;&nbsp;&nbsp;&nbsp;|=|/<br/>` +
    `&nbsp;&nbsp;__|=|__<br/>` +
    `&nbsp;/&nbsp;|---|&nbsp;\\<br/>` +
    `&nbsp;\\_______/<br/>`
);

export default class Peteca extends Sprite {
    constructor() {
        super(printPeteca());
        this.setAlign("random");
    }
}