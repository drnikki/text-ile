import { getTimestamp } from "../stringManipulation.js";
import { mergeString } from "../stringManipulation.js";


export default function printTimeBlocks() {
    // ---------- config (these can be parameters if necessary)
    let minHeight = 7; // TODO randomize these
    let maxHeight = 30;
    let vOverlap = 2; // TODO would be great to randomize these
    let hOverlap = 7; 

    // todo randomize the start / "left" position of the blocks

    let timeBlocks = '';

    const blockA = [];
    const blockB = [];

    // TODO - make random height
    for (let i =0; i < 10; i++) {
        blockA.push(getTimestamp());
    } 

    for (let i =0; i < 10; i++) {
        blockB.push(getTimestamp());
    } 

    // the number of "regular" rows is the height minus the vOverlap, so we can just print those
    let regularRows = 9; // TODO 
    for (let i =0; i < regularRows; i++) {
        timeBlocks = getTimestamp().toString().split('').join(' ') + "<br />";
    } 
    // at this point we need to start overlapping
    // the number of characters of a timestamp we print w/o overlap is determined by
    // 13 - hOverlap
    let heightOverlap = 13 - vOverlap; 
    let widthOverlap = 13 - hOverlap; // TODO these names are terrible. I have no brain left, plz make better.
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