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
    randomIntervalBounds: [2 * 60 * 1000, 7 * 60 * 1000], // 2-7 minutes in milliseconds
    numLinesBounds: [3, 30],
    numSprites: 5, // the number of sprites to generate at once (eg. you can see 5 diamonds at once in browser)
    fillEmptySpace: true, // if true, any leftover "rows" after a sprite is finished printing will be filled in with blank space
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

const setReceiptInBrowser = (printNum, {startFrom, browserSprite}) => {
    $('#receipt-content').html(browserSprite);
    $('#print-from-row').html(printNum === -1 ? `_____` : `${startFrom} - ${startFrom + printNum - 1}`);
}

/**
 *  an object to handle the loop.
 *  I know this is a weird way to do this, but i'm just exploring and learning right now
 */
const printLoop = {
    looping: false,
    nextUpdateTime: null,
    timeoutID: null,

    // the actual thing we're repeating
    action() {
        // pick random sprite
        const sprite = spriteFunctions[Math.floor(Math.random()*spriteFunctions.length)];
        const spriteInfo = spriteHolder.get(sprite);

        // check to see if we had a leftover
        if (!spriteInfo.inProgress) {
            spriteInfo.inProgress = true;
            spriteInfo.browserSprite = "";
            for (let i=0; i<config.numSprites; i++) spriteInfo.browserSprite += sprite(); // add sprites
            spriteInfo.printerSprite = browserToPrinter(spriteInfo.browserSprite);
            spriteInfo.startFrom = 0;
        }

        // pick num of rows to print (any extra are printed as blank lines)
        const [min, max] = config.numLinesBounds;
        let printNum =  Math.floor(Math.random() * (max - min + 1) + min);

        // display what we are printing
        setReceiptInBrowser(printNum, spriteInfo);
        // print what we are printing
        // print text function defined in ./bxl/bxlpos.js, which should be included as its own <script> tag
        for (let i = spriteInfo.startFrom; i < spriteInfo.startFrom + printNum; i++){
            if (i >= spriteInfo.printerSprite.length) {
                // we're out of bounds
                if (config.fillEmptySpace) printText('\n', 0, 0, false, false, false, 1, 0); // print blank line
                else break;
            } else printText(spriteInfo.printerSprite[i], 0, 0, false, false, false, 1, 0); // print row
        }

        // we are no longer in progress
        if (spriteInfo.startFrom + printNum >= spriteInfo.printerSprite.length) resetSprite(sprite);
        // we are still in progress
        else spriteInfo.startFrom += printNum;

        // repeat action if looping
        if (printLoop.looping) {
            // find wait time
            const [min, max] = config.randomIntervalBounds;
            const timeout = Math.floor(Math.random() * (max - min + 1) + min);
            printLoop.nextUpdateTime = new Date();
            printLoop.nextUpdateTime.setTime(new Date().getTime() + timeout);
            // set wait time in browser
            $(`#update-time`).html(`<br/>` + printLoop.nextUpdateTime.toString());
            // wait
            printLoop.timeoutID = setTimeout(printLoop.action, timeout);
        }
    },

    start() { // start the loop
        printLoop.looping = true;
        clearTimeout(printLoop.timeoutID);
        printLoop.action();
    },

    stop() { // stop the loop and reset everything
        printLoop.looping = false;
        printLoop.nextUpdateTime = null;
        clearTimeout(printLoop.timeoutID);
        setReceiptInBrowser(-1, {browserSprite: ""});
        $(`#update-time`).html("_____");
    },
};

// add listener to print button
$(`#start-print-btn`).on("click", printLoop.start);
$(`#stop-print-btn`).on("click", printLoop.stop);
