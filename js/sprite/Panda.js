import Sprite from "./Sprite.js";

export function printPanda() {
    return (
        "<br/>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;:=*####*=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.=*##*+-<br/>" +
        "&nbsp;&nbsp;&nbsp;*#########*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:##########=<br/>" +
        "&nbsp;&nbsp;=+########+-.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:=*########-<br/>" +
        "&nbsp;&nbsp;&nbsp;**######=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:+######+<br/>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;+###*.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-####*.<br/>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-.<br/>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;=*###=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.*###*-&nbsp;&nbsp;&nbsp;.<br/>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;. &nbsp;&nbsp;##%####:&nbsp;:-.&nbsp;&nbsp;=##%*%#+&nbsp;&nbsp;:<br/>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;. :######+&nbsp;&nbsp;&nbsp;:+. &nbsp;&nbsp;&nbsp;*#%###.&nbsp;:<br/>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;. &nbsp;&nbsp;:+*+=.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+##*-&nbsp;&nbsp;.<br/>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..<br/>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>" +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;..<br/>" +
        "<br/>" 
        );
}

export default class Panda extends Sprite {
    constructor() {
        super(printPanda());
    }
}