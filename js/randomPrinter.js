import {browserToPrinter} from "./receipt.js";
import PrintHandler from "./PrintHandler.js";
import BasketWeave from "./sprite/pattern/BasketWeave.js";
import DiamondPattern from "./sprite/pattern/DiamondPattern.js";
import DotPattern from "./sprite/pattern/DotPattern.js";
import GradientFloor from "./sprite/pattern/GradientFloor.js";
import HerringBone from "./sprite/pattern/HerringBone.js";
import SeedStitch from "./sprite/pattern/SeedStitch.js";
import TimeLines from "./sprite/pattern/TimeLines.js";
import TimestampWaves from "./sprite/pattern/TimestampWaves.js";
import ArrowTime from "./sprite/ArrowTime.js";
import Bird from "./sprite/Bird.js";
import Bug from "./sprite/Bug.js";
import Chandeliers from "./sprite/Chandeliers.js";
import Chevron from "./sprite/Chevron.js";
import Cloud from "./sprite/Cloud.js";
import DiamondButterfly from "./sprite/DiamondButterfly.js";
import Inkblot from "./sprite/Inkblot.js";
import MarioCoinBox from "./sprite/MarioCoinBox.js";
import Panda from "./sprite/Panda.js";
import Peteca from "./sprite/Peteca.js";
import Rope from "./sprite/Rope.js";
import Starburst from "./sprite/Starburst.js";
import {Triangle1, Triangle2} from "./sprite/triangles.js";
import TwinkleBanner from "./sprite/TwinkleBanner.js";

/**
 * used to continuously print random sprites
 * @author Michael Crockett
 */

/**
 * config
 * @type {{randomIntervalBounds: number[], numLinesBounds: number[]}}
 */
const config = {
    randomIntervalBounds: [2 * 60 * 1000, 7 * 60 * 1000], // 2-7 minutes in milliseconds
    numLinesBounds: [3, 30],
    numSprites: 5, // the number of sprites to generate at once (eg. you can see 5 diamonds at once in browser)
    fillEmptySpace: true, // if true, any leftover "rows" after a sprite is finished printing will be filled in with blank space
}

/**
 * list of sprites to choose from
 */

const sprites = [
    BasketWeave,
    DiamondPattern,
    DotPattern,
    GradientFloor,
    HerringBone,
    SeedStitch,
    TimeLines,
    TimestampWaves,
    ArrowTime,
    Bird,
    Bug,
    Chandeliers,
    Chevron,
    Cloud,
    DiamondButterfly,
    Inkblot,
    MarioCoinBox,
    Panda,
    Peteca,
    Rope,
    Starburst,
    Triangle1,
    Triangle2,
    TwinkleBanner,
];

/**
 * used to store information about incomplete sprites.
 * each sprite class maps to an object that holds key information.
 * @type {Map<Sprite, object>}
 */
const spriteHolder = new Map();

// reset the sprite function in spriteHolder with a clean slate
const resetSprite = sprite => spriteHolder.set(sprite, {
    inProgress: false,  // are we in the middle of making this sprite
    browserSprite: null, // generated sprite in browser-friendly form
    printerSprite: null, // an array of each row of the sprite (printer-friendly form)
    startFrom: 0, // if we're in the middle of making a sprite, this is the row where we should start back
});

// add each sprite function to spriteHolder with clean slate
sprites.forEach(resetSprite);

const setReceiptInBrowser = (printNum, {startFrom, browserSprite}) => {
    $('#receipt-content').html(browserSprite);
    $('#print-from-row').html(printNum === -1 ? `_____` : `${startFrom} - ${startFrom + printNum - 1}`);
}
/**
 * convert milliseconds to human-readable
 */
const msToTime = ms => {
    let seconds = Math.floor((ms / 1000) % 60),
        minutes = Math.floor((ms / (1000 * 60)) % 60),
        hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

// object to handle connecting to printer and printing
const printHandler = new PrintHandler();

const getNewSprite = type => {
    const sprite = new type();
    //chance to flip
    if (Math.random() < 0.5) sprite.flipHorizontal();
    // chance to change margin
    const marginChoices = ["-", "_", ".", "\xa0"];
    const left = marginChoices[Math.floor(Math.random()*marginChoices.length)];
    const right = marginChoices[Math.floor(Math.random()*marginChoices.length)];
    if (Math.random() < 0.25) sprite.setMarginFill(left, right);
    // chance to change alignment
    if (Math.random() < 0.2) sprite.setAlign("random");
    return sprite.toString();
}

/**
 *  an object to handle the loop.
 *  I know this is a weird way to do this, but i'm just exploring and learning right now
 */
const printLoop = {
    looping: false,
    countDown: {
        id: null, // interval id
        timeLeft: null, // ms
    },
    wholeSprites: false,

    // the actual thing we're repeating
    action() {
        // pick random sprite
        const spriteType = sprites[Math.floor(Math.random()*sprites.length)];
        const spriteInfo = spriteHolder.get(spriteType);

        // are we printing whole sprites at a time?
        if (printLoop.wholeSprites) {
            const browserSprite = getNewSprite(spriteType);
            setReceiptInBrowser(-1, {browserSprite});
            printHandler.setLines(browserToPrinter(browserSprite));

        } else { // partial sprites
            // check to see if we had a leftover
            if (!spriteInfo.inProgress) {
                spriteInfo.inProgress = true;
                spriteInfo.browserSprite = "";
                for (let i = 0; i < config.numSprites; i++) spriteInfo.browserSprite += getNewSprite(spriteType); // add sprites
                spriteInfo.printerSprite = browserToPrinter(spriteInfo.browserSprite);
                spriteInfo.startFrom = 0;
            }

            // pick num of rows to print (any extra are printed as blank lines)
            const [min, max] = config.numLinesBounds;
            let printNum = Math.floor(Math.random() * (max - min + 1) + min);

            // display what we are printing
            setReceiptInBrowser(printNum, spriteInfo);
            // prepare to print what we are printing.
            for (let i = spriteInfo.startFrom; i < spriteInfo.startFrom + printNum; i++) {
                if (i >= spriteInfo.printerSprite.length) {
                    // we're out of bounds
                    if (config.fillEmptySpace) printHandler.addLine('\n'); // print blank line
                    else break;
                } else printHandler.addLine(spriteInfo.printerSprite[i]); // print row
            }

            // we are no longer in progress
            if (spriteInfo.startFrom + printNum >= spriteInfo.printerSprite.length) resetSprite(spriteType);
            // we are still in progress
            else spriteInfo.startFrom += printNum;
        }
        //submit print
        printHandler.submitPrint(true);

        // repeat action if looping
        if (printLoop.looping) {
            // find wait time
            const [min, max] = config.randomIntervalBounds;
            const timeout = Math.floor(Math.random() * (max - min + 1) + min);
            printLoop.countDown.timeLeft = timeout;
            // create interval
            clearInterval(printLoop.countDown.id);
            printLoop.countDown.id = setInterval(() => {
                printLoop.countDown.timeLeft -= 1000;
                $(`#update-time`).html(msToTime(printLoop.countDown.timeLeft));
            }, 1000); // every second
            // wait
            printLoop.timeoutID = setTimeout(printLoop.action, timeout);
        }
    },

    // switch between partial sprites and whole sprites
    changePrintMode() {
        const wasLooping = printLoop.looping;
        printLoop.stop();
        printLoop.wholeSprites = !printLoop.wholeSprites;
        if (wasLooping) printLoop.start();
    },

    start() { // start the loop
        printLoop.looping = true;
        clearTimeout(printLoop.timeoutID);
        clearInterval(printLoop.countDown.id);
        printLoop.action();
    },

    stop() { // stop the loop and reset everything
        printLoop.looping = false;
        printLoop.nextUpdateTime = null;
        clearTimeout(printLoop.timeoutID);
        clearInterval(printLoop.countDown.id);
        setReceiptInBrowser(-1, {browserSprite: ""});
        $(`#update-time`).html("_____");
    },
};

// add listener to print button
$(`#start-print-btn`).on("click", printLoop.start);
$(`#stop-print-btn`).on("click", printLoop.stop);
// toggle print mode when checkbox is clicked
$(`#toggleFullSprite`).on('change', printLoop.changePrintMode);
