import { getTimestamp, mergeString } from "../stringManipulation.js";


export default function printTimeBlocks() {
    var config = new Map([
        ['minHeight', 5],
        ['maxHeight', 20],
        ['minHOverlap', 3],
        ['maxHOverlap', 10],
        ['blockSpaceMin', 3],
        ['blockSpaceMax', 30],
     ]);

    let timeBlocks = '';

    // the number of "regular" rows is the randomized distance between the bottom of one right block
    // and the start of the next one
    let regularRows = config.get('blockSpaceMin') + Math.floor(Math.random() * config.get('blockSpaceMin'));  

    for (let i =0; i < regularRows; i++) {
        timeBlocks += getTimestamp().toString().split('').join(' ') + "<br />";
    } 
    // at this point we need to start overlapping
    // the number of characters of a timestamp we print w/o overlap is determined by
    // 13 - hOverlap
    let heightOverlap = config.get('minHOverlap') + Math.floor(Math.random() * config.get('maxHOverlap'));  
    let widthOverlap = 13 - heightOverlap; // TODO these names are terrible. I have no brain left, plz make better.
    for (let i =0; i < heightOverlap; i++) {
       // 1 get two timestamps
       var timeA = getTimestamp().toString();
       var timeB = getTimestamp().toString();
       
       // the front of the timestamp gets printed regularly.
        // 1  print regular #s
        let blockA = timeA.toString().substring(0, widthOverlap).split('').join(' ');
        let mergedBlock = mergeString(timeA.substring(widthOverlap, 12), timeB.substring(0, widthOverlap));
        // get a second times stamp for the other block
        let blockB = timeB.substring(widthOverlap, 12).split('').join(' ');

        timeBlocks += blockA + mergedBlock + blockB + "<br/>";
        // 2 - print the overlapping #s
        // 3 - print regular #s
        
    } 

    // then print the rest of the block B, offset to align
    for (let i =0; i < regularRows; i++) {
        timeBlocks += getTimestamp().toString().split('').join(' ') + "<br />";
    } 

    return timeBlocks;
}