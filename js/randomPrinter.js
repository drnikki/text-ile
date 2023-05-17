import spriteFunctions from "./sprite/listOfSprites.js"
import {browserToPrinter} from "./receipt.js";

/**
 * used to continuously print random sprites
 * @author Michael Crockett
 */

/**
 * config
 * @type {{randomIntervalBounds: number[], numLinesBounds: number[]}}
 */
const config = {
    randomIntervalBounds: [0.5 * 60 * 1000, 1 * 60 * 1000], // 2-7 minutes in milliseconds
    numLinesBounds: [3, 30],
}


/**
 * used to store information about incomplete sprites.
 * each sprite function maps to an object that holds key information.
 * @type {Map<function, object>}
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
spriteFunctions.forEach(resetSprite);

const setReceiptInBrowser = ({startFrom, browserSprite}) => {
    $('#receipt-content').html(browserSprite);
    $('#print-from-row').html(`#` + startFrom);
}

/**
 *  an object to handle the loop.
 *  I know this is a weird way to do this, but i'm just exploring and learning
 */
const printLoop = {
    looping: false,
    nextUpdateTime: null,
    timeoutID: null,
    action() {

        // pick random sprite
        const sprite = spriteFunctions[Math.floor(Math.random()*spriteFunctions.length)];
        const spriteInfo = spriteHolder.get(sprite);


        // check to see if we had a leftover
        if (!spriteInfo.inProgress) {
            spriteInfo.inProgress = true;
            spriteInfo.browserSprite = "";
            for (let i=0; i<10; i++) spriteInfo.browserSprite += sprite();
            spriteInfo.printerSprite = browserToPrinter(spriteInfo.browserSprite);
            spriteInfo.startFrom = 0;
        }


        // pick num of rows to print (any extra are printed as blank lines)
        const [max, min] = config.numLinesBounds;
        let printNum =  Math.floor(Math.random() * (max - min + 1) + min);

        // TODO: do the printing
        // display what we are printing
        setReceiptInBrowser(spriteInfo);


        // we are no longer in progress
        if (spriteInfo.startFrom + printNum >= spriteInfo.printerSprite.length) resetSprite(sprite);
        // we are still in progress
        else spriteInfo.startFrom += printNum;

        // repeat action if looping
        if (printLoop.looping) {
            const [min, max] = config.randomIntervalBounds;
            const timeout = Math.floor(Math.random() * (max - min + 1) + min);
            printLoop.nextUpdateTime = new Date();
            printLoop.nextUpdateTime.setTime(new Date().getTime() + timeout);
            $(`#update-time`).html(`<br/>` + printLoop.nextUpdateTime.toString());
            printLoop.timeoutID = setTimeout(printLoop.action, timeout);
        }
    },

    start() { // start the loop
        printLoop.looping = true;
        clearTimeout(printLoop.timeoutID);
        printLoop.action();
    },

    stop() { // stop the loop
        printLoop.looping = false;
        printLoop.nextUpdateTime = null;
        clearTimeout(printLoop.timeoutID);
    },
};

// add listener to print button
$(`#print-btn`).on("click", printLoop.start);