import { getTimestamp, mergeString, getRandomInt, numToSpace } from "../stringManipulation.js";


export default function printTimeBlocks(columnLeft = true) {
    // the column of numbers along one edge is 25 chars long (13 #s + 12 spaces)

    // for us this is equivalent to receipts being 40 columns.
    const displayWidth = 40; // this will get changed if we move to a global column config.
    let timeblocks = '';

    if (columnLeft) {
        var blockConfig = new Map([
            ['minHeight', 5], // the height of the floating block
            ['maxHeight', 20],
            ['minHOverlap', 6], // the amount of horizontal overlap between the column of #s and the block 
            ['maxHOverlap', 15], // TODO delete these - we don't need them and they're CONFUSING.
            ['distanceBetweenMin', 3], // the space between when a block ends and the next block starts 
            ['distanceBetweenMax', 12],
            ['minX', 3], // the X (horizontal) position of the TOP LEFT CORNER  <- THIS CHANGES when flipped
            ['maxX', 15],
        ]);
    } else { // the column of numbers is on the right.
        console.log('its false');
        var blockConfig = new Map([
            ['minHeight', 5], // the height of the floating block
            ['maxHeight', 20],
            ['minHOverlap', 6], // the amount of horizontal overlap between the column of #s and the block
            ['maxHOverlap', 15],
            ['distanceBetweenMin', 3], // the space between when a block ends and the next block starts 
            ['distanceBetweenMax', 12],
            ['minX', 2], // the X (horizontal) position of the TOP LEFT CORNER  <- THIS CHANGES when flipped
            ['maxX', 20],
        ]);
    }


    // the number of "regular" rows is the randomized distance between the bottom of one floating block
    // and the start of the next one
    let regularRows = getRandomInt(blockConfig.get('distanceBetweenMin'), blockConfig.get('distanceBetweenMax')); 

    for (let i =0; i < regularRows; i++) {
        timeblocks += printRegularRows(columnLeft);
    } 

    // time to create a block.
    // how tall is it?
    let blockHeight = getRandomInt(blockConfig.get('minHeight'),blockConfig.get('maxHeight'));
    // where is it's top left corner?
    let blockX = getRandomInt(blockConfig.get('minX'),blockConfig.get('maxX'));



    if (columnLeft) {
        for (let i =0; i < blockHeight; i++) {
            // 1 get two timestamps and split them into arrays.
            let timeLeft = getTimestamp().toString().split("");
            let timeRight = getTimestamp().toString().split("");

            // this is the number of characters from the left that we are overlapping
            let charOverlap = Math.floor(blockX / 2); 

            // until we're at blockX, print the column
           // let column = timeLeft.toString().substring(0, charOverlap).split('').join(' ');
            // the number of characters we merge needs to get us to the 26th vertical column
            // before we start printing spaces again. 
            console.log("blockx" + blockX);

            // the overlap zone is still kind of wonky, so the easiest way to make it look right
            // is to loop through one character at a time until we're where we need to be

            let oneRow = '';
            for (let i =0; i < displayWidth; i++) {
                if (i < blockX) {
                    oneRow += timeLeft.shift();
                    oneRow += " ";
                }
                // when we're at X
                if (i == blockX) {
                    oneRow += timeRight.shift();
                }
                // when we're past X, but not yet at 25 (aka the time to start spacing the block out)
                if (i > blockX && i < 25) {
                    if(timeLeft.length > 0) {
                        oneRow += timeLeft.shift() + timeRight.shift();
                    }

                }
                if (i > 25 && timeRight.length > 0) {
                    oneRow += timeRight.shift();
                    oneRow += " ";
                }

            }
            console.log(oneRow);
            oneRow += "<br />";
            timeblocks += oneRow;
            
        } 

        return timeblocks;

    } else { // column is on the right.
        for (let i =0; i < blockHeight; i++) {
            // 1 get two timestamps
            var timeLeft = getTimestamp().toString();
            var timeRight = getTimestamp().toString();
            if (blockX <= 15) {
                timeblocks += numToSpace(blockX - 1); // we start with empty space.
            }
            let charOverlap = Math.floor(blockX / 2); 

             // 1  print regular #s
             let blockA = timeLeft.toString().substring(0, charOverlap).split('').join(' ');
             let mergedBlock = mergeString(timeLeft.substring(charOverlap, 12), timeRight.substring(0, charOverlap));
             // get a second times stamp for the other block
             let blockB = timeRight.substring(charOverlap, 12).split('').join(' ');
     
             timeblocks += blockA + mergedBlock + blockB + "<br/>";
             // 2 - print the overlapping #s
             // 3 - print regular #s
             
         } 
     
     
         return timeblocks;
    }

}

function printRegularRows(columnLeft = true) {
    if (columnLeft) {
        return getTimestamp().toString().split('').join(' ') + "<br />";
    }
    else { // push it to the Right
        // TODO - this spacing gets changed when we have a global column-width var.
        return numToSpace(15) + getTimestamp().toString().split('').join(' ') + "<br />";
    }
}







 function printtimeRightlocksLeo() {
    var config = new Map([
        ['minHeight', 5],
        ['maxHeight', 20],
        ['minHOverlap', 6],
        ['maxHOverlap', 15],
        ['blockSpaceMin', 3],
        ['blockSpaceMax', 12],
    ]);

    let timeRightlocks = '';

    // the number of "regular" rows is the randomized distance between the bottom of one right block
    // and the start of the next one
    // let regularRows = blockConfig.get('blockSpaceMin') + Math.floor(Math.random() * blockConfig.get('blockSpaceMax')); 
    let regularRows = Math.floor(Math.random() * (blockConfig.get('blockSpaceMax') - blockConfig.get('blockSpaceMin') + 1)) + blockConfig.get('blockSpaceMin');
    for (let i =0; i < regularRows; i++) {
        timeRightlocks += getTimestamp().toString().split('').join(' ') + "<br />";
    } 
    // at this point we need to start overlapping
    // the number of characters of a timestamp we print w/o overlap is determined by
    // 13 - [a random # between min & max hoverlap]
    let heightOverlap = Math.floor(Math.random() * (blockConfig.get('maxHOverlap') - blockConfig.get('minHOverlap') + 1)) + blockConfig.get('minHOverlap');

    let charOverlap = 17 - heightOverlap; // TODO these names are terrible. I have no brain left, plz make better.
    for (let i =0; i < heightOverlap; i++) {
        // 1 get two timestamps
        var timeLeft = getTimestamp().toString();
        var timeRight = getTimestamp().toString();
        
        // the front of the timestamp gets printed regularly.
         // 1  print regular #s
         let blockA = timeLeft.toString().substring(0, charOverlap + 1).split('').join(' ');
         let mergedBlock = mergeString(timeLeft.substring(charOverlap, 14), timeRight.substring(0, charOverlap + 1));
         // get a second times stamp for the other block
         let blockB = timeRight.substring(charOverlap, 14).split('').join(' ');
         timeRightlocks += blockA + mergedBlock + blockB + "<br/>";
         // 2 - print the overlapping #s
         // 3 - print regular #s

    } 

    // // then print the rest of the block B, offset to align
    // for (let i =0; i < regularRows; i++) {
    //     timeRightlocks += getTimestamp().toString().split('').join(' ') + "<br />";
    // } 

    return timeRightlocks;
}