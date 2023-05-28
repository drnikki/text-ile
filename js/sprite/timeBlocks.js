import { getTimestamp, mergeString } from "../stringManipulation.js";


export default function printTimeBlocks() {
    var config = new Map([
        ['minHeight', 5],
        ['maxHeight', 20],
        ['minHOverlap', 6],
        ['maxHOverlap', 15],
        ['blockSpaceMin', 3],
        ['blockSpaceMax', 12],
    ]);

    let timeBlocks = '';

    // the number of "regular" rows is the randomized distance between the bottom of one right block
    // and the start of the next one
    // let regularRows = config.get('blockSpaceMin') + Math.floor(Math.random() * config.get('blockSpaceMax')); 
    let regularRows = Math.floor(Math.random() * (config.get('blockSpaceMax') - config.get('blockSpaceMin') + 1)) + config.get('blockSpaceMin');
    for (let i =0; i < regularRows; i++) {
        timeBlocks += getTimestamp().toString().split('').join(' ') + "<br />";
    } 
    // at this point we need to start overlapping
    // the number of characters of a timestamp we print w/o overlap is determined by
    // 13 - hOverlap
    let heightOverlap = Math.floor(Math.random() * (config.get('maxHOverlap') - config.get('minHOverlap') + 1)) + config.get('minHOverlap');
    let widthOverlap = 17 - heightOverlap; // TODO these names are terrible. I have no brain left, plz make better.
    for (let i =0; i < heightOverlap; i++) {
        // 1 get two timestamps
        var timeA = getTimestamp().toString();
        var timeB = getTimestamp().toString();
        
        // the front of the timestamp gets printed regularly.
         // 1  print regular #s
         let blockA = timeA.toString().substring(0, widthOverlap + 1).split('').join(' ');
         let mergedBlock = mergeString(timeA.substring(widthOverlap, 14), timeB.substring(0, widthOverlap + 1));
         // get a second times stamp for the other block
         let blockB = timeB.substring(widthOverlap, 14).split('').join(' ');
         timeBlocks += blockA + mergedBlock + blockB + "<br/>";
         // 2 - print the overlapping #s
         // 3 - print regular #s

    } 

    // // then print the rest of the block B, offset to align
    // for (let i =0; i < regularRows; i++) {
    //     timeBlocks += getTimestamp().toString().split('').join(' ') + "<br />";
    // } 

    return timeBlocks;
}