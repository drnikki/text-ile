import Sprite from "../Sprite.js";

const printGradientFloor = () => (
    '########################################' + "<br/>" +
    '*** ******* ******* ******* ******* ****'  + "<br/>" +
    'xxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxx'  + "<br/>" +
    ';;;;; ;;;;;;; ;;;;;;; ;;;;;;; ;;;;;;; ;;' + "<br/>" +
    ':::::: ::::::: ::::::: ::::::: ::::::: :' + "<br/>" +
    '&nbsp;....... ....... ....... ....... ....... ' + "<br/>" +
    '&nbsp;'
);

export default class GradientFloor extends Sprite {
    constructor() {
        super(printGradientFloor());
    }
}