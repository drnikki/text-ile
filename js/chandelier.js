
// NOTE: when it's the full length, the console should show 177,000.
//console.log(shuffled.length);



/**
 * These are stub tester files that are separate from any consideration of how the 
 * data might relate to these shapes.  
 * 
 * Right now, we just need to get things printing for the prototypes.
 */

let i = 0;
let textContent = ''; // this is what prints on the receipt.




function printClouds() {
    ///
    /// set variables for this instance of clouds
    ///

    // 1. determine whether or not there are 1, 2 or 3 clouds
    var cloudCount = Math.floor((Math.random() * 3) + 1); // btwn 1 and 3
    // is there rain?
    var isRain = Math.random() > 0.5 ? true : false;
    // where do the clouds start? (position is different based on cloudCount)
    switch(cloudCount) {
        case 1:
            var startPosition = Math.floor((Math.random() * 26) + 1); // btwn 1 and 26
            break;
        case 2:
            var startPosition = Math.floor((Math.random() * 12) + 1); // btwn 1 and 12
            break;
        case 3:
            var startPosition = Math.floor((Math.random() * 3) + 1); // btwn 1 and 3
            break;
        default:
            var startPosition = 1;
    }
    // convert startPosition to a string of nonbreaking spaces
    // so that it can just be appended to each row

    var spacePrefix = numToSpace(startPosition);
 
    var wholeCloud = ''; 
    wholeCloud += oneCloud(spacePrefix);
    if (isRain) {
        wholeCloud += makeItRain(cloudCount, spacePrefix);
    }

    return wholeCloud;
}
    // figure out how to render the whole shape, from the top down
    // clouds have 5 rows plus rain if it exists
   
    // the receipt printer api needs to run row by row and receive the text as though it 
    // were going into a <pre> tag.


function oneCloud(prefix) {
    var row = '';
    var oneWholeCloud = ''; 
    
    row = prefix + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(()<br/>";
    oneWholeCloud = row;
    row = prefix +"&nbsp;&nbsp;&nbsp;&nbsp;(((())<br/>";
    oneWholeCloud += row;
    row = prefix +"&nbsp;&nbsp;(((((()))))<br/>";
    oneWholeCloud += row;
    row = prefix +"(((())))))<br/>";
    oneWholeCloud += row;
    row = prefix + "&nbsp;&nbsp;((())))<br/>";
    oneWholeCloud += row;

    return oneWholeCloud;
}


function makeItRain(cloudCount, prefix) {
    // how many rows of rain will we make?
    var rainRows =  Math.floor((Math.random() * 12) + 4); // btwn 4 and 12 @MOLLY?!

    // we'd do something about the width of the rain based on the Clouds
    let someRain = ''; // the contents of the rain.
    
    // FOR ONE CLOUD
    for (let r = 0; r < rainRows; r++) {
        someRain += prefix + randomSpacer(1, 7) + "; <br/>"; // @TODO randomize the rain.
    }

    return someRain;
}


// This helper function just converts a number to nonbreaking spaces.  
// That's all it does
function numToSpace(howMany) {
    // convert # to spaces
    let prefix = '';
    for (let s =0; s < howMany; s++) {
        prefix += "&nbsp;";
    }

    return prefix;
}

// this helper function generates a random number between a min and a max
// and returns that # in spaces
function randomSpacer(min, max) {
   let theNumber = Math.floor(Math.random() * (max - min + 1)) + min;
   
   return numToSpace(theNumber);
}






function printChandelierA() {
    /// 
    /// SET VARIABLES
    ///
    // Math.floor(Math.random() * (max - min + 1)) + min
    var brassRows = Math.floor((Math.random() * 3) + 4); // btwn 4 and 6
    console.log(brassRows);
    var crystalRows = Math.floor((Math.random() * 3) + 1); // btwn 1 and 3 (each row is rly 2 rows)
    var crystalWidth = '';
    var crystalPrefix = ''; // the # of spaces before crystals start.
    // when 4 brass rows, there are 5 crystal columns
    // when 5, 9
    // when 6, 13
    if (brassRows == 4) {
        crystalWidth = 5;
        crystalPrefix = 6; 
    } else if (brassRows == 5) {
        crystalWidth = 9;
        crystalPrefix = 4;
    } else if (brassRows == 6){
        crystalWidth = 13;
        crystalPrefix = 3; //eyeballing this
    }

    // print the brass to start?
    // these are always the same 
    var row = numToSpace(7) + "<^><br/>";
    row += numToSpace(7) + "^^^<br/>";
    row += numToSpace(6) + "<^^^><br/>";
    row += numToSpace(5) + "<^^^^^><br/>";
    if (brassRows == 5 || brassRows == 6) {
        row += numToSpace(3) + "<^^^^^^^^^><br/>";
    }
    if (brassRows == 6) {
        row +=numToSpace(1) + "<^^^^^^^^^^^^^><br/>"
    }

    // time for Crystals. Width of crystals determined by
    for(let c =0;c < crystalRows; c++) {
        row += numToSpace(crystalPrefix);
        // 
        for (let x = 0; x < crystalWidth; x++) {
            row += "|";
        }
        row += "</br>";
        row += numToSpace(crystalPrefix);
        for (let x = 0; x < crystalWidth; x++) {
            row += "o";
        }
        row += "</br>";

    }



    return row;
}

function printChandelierB() {
    var hasTail = true;
   // determine the variation
   var hasWings = Math.random() > 0.5 ? true : false;
   if (hasWings) {
    hasTail = Math.random() > 0.5 ? true : false; // it can only -not- have a tail if it has wings.
   }

   var row = numToSpace(29) + "<^>" + "<br />";
   row += numToSpace(26) + ">>> | >>>" + "<br />";
   row += numToSpace(26) + "||| | |||" + "<br />";
   if (hasWings && !hasTail) {
    // do stuff
    row += numToSpace(22) + ">>> ;|: | :|; >>>" + "<br />";
    row += numToSpace(22) + "||| o;o | o;o |||" + "<br />";
    row += numToSpace(22) + ";|; ;|: ;" + numToSpace(2) + "o" + numToSpace(2) + "|;|" + "<br />";
    row += numToSpace(22) + "o;o" + numToSpace(11) +  "o;o" + "<br />";
    row += numToSpace(23) + "o" + numToSpace(13) +  "o" + "<br />";


   }





   return row;
}




/**
 * prints the twinkle banner as specified in the spec doc
 * @returns {string} twinkle banner
 */
const printTwinkleBanner = () => {
    const ribbonChoices = "_*':-^";
    // decide how many ribbons to use
    const numRibbons = Math.floor((Math.random() * 11) + 20) // random int from 20-30

    // create top pole
    let pole = '';
    pole += '&nbsp;'.repeat(numRibbons + 3) + '___' + '<br/>';
    pole += '='.repeat(numRibbons + 4) + '[]' + '<br/>';

    // decide the order of ribbon styles
    let longestRibbonLength = 0;
    let ribbonStyles = [];
    for (let i = 0; i < numRibbons; i++) {
        const choice = Math.floor(Math.random() * ribbonChoices.length); // pick random char from ribbonChoices string
        const length =  Math.floor((Math.random() * 9) + 3) // random length between 3 and 11
        ribbonStyles.push({
            style: ribbonChoices.charAt(choice),
            length
        });

        // update longest ribbon length
        longestRibbonLength = Math.max(longestRibbonLength, length);
    }

    // generate first 3 rows of ribbons
    let ribbons = '';
    ribbons += printRibbonRow(ribbonStyles) + '[]' + '<br/>';
    ribbons += printRibbonRow(ribbonStyles) + '[' + '<br/>';
    ribbons += printRibbonRow(ribbonStyles) + '|' + '<br/>';

    // generate the rest of the ribbons
    for (let i = 4; i <= longestRibbonLength; i++)
        ribbons += printRibbonRow(ribbonStyles, i) + '<br/>';

    const banner = pole + ribbons;

    return Math.random() < 0.5 ? banner : reverseBanner(banner);
};

/**
 * returns a single row of the twinkle banner based on the current ribbon styles
 * @param ribbonStyles an array that specifies the order and style and length of each ribbon
 * @param rowNum current row we are printing, starting from 1
 * @return one row
 */
const printRibbonRow = (ribbonStyles, rowNum = 0) => {
    let row = '&nbsp;'.repeat(4);

    ribbonStyles.forEach(({style, length}) => {
        if (rowNum < length) row += style; // add ribbon to row if we're not past its length
        else if (rowNum === length) row += style === ':' ? 'v' : style; // top ribbon off appropriately
        else row += '&nbsp;'; // if we're past the ribbon, just add space
    });

    return row
};

/**
 * a crude way to flip the banner for use on right side
 * @param banner
 */
const reverseBanner = (banner) => {
    const receiptWidth = 40;

    const rows = banner.split("<br/>");
    let flippedRows = [];
    rows.forEach(row => {
        //find length, adjusted based on number of non-breaking spaces
        const spaceCount = (row.match(/nbsp/g) || []).length;
        const length = row.length - (5*spaceCount);
        const padding = '&nbsp;'.repeat(receiptWidth - length);

        const flippedRow = row.split('').reverse().join('') // flipped row with spaces and brackets backwards
            .replaceAll(";psbn&", "&nbsp;") // spaces fixed
            .replaceAll("[", "]") // ]'s fixed
            .replaceAll("]]", "[]"); // []'s fixed
        flippedRows.push(padding + flippedRow);
    });
    return flippedRows.join('<br/>');
};


class Branch {
    static maxWidth = 17 // may have to reduce by 1
    directionRight; //specifies which direction the branch faces
    rows = [];

    upperBound; // enforced
    lowerBound; // fluid
    static ultimateEnforcedBound  = 4; // cannot go more than 4 up or down

    constructor(directionRight, upperBound = Branch.ultimateEnforcedBound) {
        this.directionRight = directionRight;
        // populate first 3 rows
        this.rows.push('', '&', '&');
        this.upperBound = upperBound;
        this.lowerBound = 1;

        // go ahead a fill out until upper bound (for spacing purposes)
        if (this.upperBound> 0) {
            for (let i = 1; i < this.upperBound; i++) {
                const row = (i+1) *2 - 1;
                this.rows[row] = '&';
            }
        }
    }

    /**
     * fill the branch recursively
     * @param {number} row the row we are building on, 0 is middle (root row);
     * odd rows are above 0, even rows below
     * @param {number} position the point on the row that we are starting at
     * @param {boolean} out true if current branch is branching away from center
     */
    populateBranch(row = 0, position = 0, out=true) {
        // set current node
        const [endPosition, success] = this.addNodeToRow(row, position, out)

        // set branches up and down
        if (success) {
            if (row === 0){
                this.populateBranch(1, endPosition);
                this.populateBranch(2, endPosition);
                return; // break out here
            } else if (!this.rowExists(row+2)) {
                // ensure that row + 2 exists
                const even = row % 2 === 0;
                if (even) {
                    if (this.lowerBound >= Branch.ultimateEnforcedBound) return;  // if we're at the bound, stop
                    this.rows[row+2] = '&';
                    this.lowerBound++;
                } else { // odd
                    if (((row + 1) / 2) >= this.upperBound ) return;
                    this.rows[row+2] = '&';
                }
            }

            if (row === 1) {
                this.populateBranch(3, endPosition, true);
                this.populateBranch(0, endPosition, false);
            } else {
                this.populateBranch(row + 2, endPosition, true);
                this.populateBranch(row - 2, endPosition, false);
            }
        }
    }

    /**
     * generate a new node at the row and position specified
     * @param {number} row the row we are building on, 0 is middle (root row);
     * odd rows are above 0, even rows below
     * @param {number} position the point on the row that we are starting at
     * @param {boolean} out true if current branch is branching away from center
     * @returns {boolean[]|(number|boolean)[]} [endPosition, success]
     */
    addNodeToRow(row, position, out) { // position starts counting at 1
        if (row >= this.rows.length) throw new Error(`row ${row} does not exist`);
        const fail = [null, false]; // return this on any fail
        // check if something already there (position must be at least 1 more than row length)
        if (!this.rowOpen(row, position)) return fail;
        // check if it would be neighboring something
        if (row === 0) {

            if (!this.rowOpen(1, position + 2) || !this.rowOpen(2, position + 2)) return fail;
        } else if (row === 1) {
            if (
                !this.rowOpen(0, position + (out ? 2 : 0)) ||
                (this.rowExists(3) && !this.rowOpen(3, position + (!out ? 2 : 0))) ||
                this.upperBound < 1
            ) return fail;
        } else {
            if (
                (this.rowExists(row - 2) && !this.rowOpen(row - 2, position + (out ? 2 : 0))) ||
                (this.rowExists(row + 2) && !this.rowOpen(row + 2, position + (!out ? 2 : 0)))
            ) return fail;
        }
        // check if we're too close to the end
        if (Branch.maxWidth - position < 3) return fail;

        // chance for random fail
        if (Math.random() < 0.20) return fail;

        const newNode = this.newNode(Branch.maxWidth-position);

        // all good to add the node
        if (position > this.rows[row].length){ // adding to end of row
            this.rows[row] += ' '.repeat(position - this.rows[row].length) + newNode;
        } else { //adding to middle of row
            this.rows[row] =
                this.rows[row].slice(0, position) + newNode + this.rows[row].slice(position + newNode.length);
        }
        return [position + newNode.length - 1, true];  // [endPosition, success]

    }

    /**
     * check if there is open space here
     */
    rowOpen(row, position) {
        return this.rows[row].length === 0
            || !this.rows[row].slice(position, position + 5).match(/({)|(})/);
    }

    /**
     * check if the row exists
     */
    rowExists(row) {
        return (row >= 0 && this.rows.length > row && this.rows[row] != null)
    }

    /**
     * generate a new node
     */
    newNode(max = 5) {
        if (max < 3 ) throw new Error("Max must be at least 3");
        max = Math.min(max, 5);

        const length = Math.floor(Math.random() * (max-2) + 3);

        let char = ''
        if (this.directionRight) char = '{';
        else char = '}';

        return char.repeat(length);
    }

    toString(){
        // start with largest odd, go down to 0
        const lastOddIndex = this.rows.length - ((this.rows.length - 1) % 2 === 0 ? 2 : 1);

        let rstring = '';

        // add extra & to top
        let row = '&';
        if (!this.directionRight) {
            row = "&nbsp;".repeat(Branch.maxWidth - row.length) + row.split('').reverse().join('');
        }
        if (this.upperBound > 0) rstring += row + '<br/>';


        for (let i = lastOddIndex; i > 0; i -= 2){
            rstring += this.toStringHelper(i);
        }
        for (let i = 0; i < this.rows.length; i += 2) {
            rstring += this.toStringHelper(i);
        }

        return rstring;
    }

    toStringHelper(i){
        if (i === 0 && !this.rows[0]) this.rows[0] =  this.newNode(4);

        if (!this.rows[i]) return '';
        let row = this.rows[i];
        // flip if drawing to left side
        if (!this.directionRight) {
            row = " ".repeat(Branch.maxWidth - row.length) + row.split('').reverse().join('');
        }
        return row.replaceAll(' ', '&nbsp;') + '<br/>';
    }
}



const addBlocks = (block1, block2) => {
    //split up both blocks
    const rows1 = block1.split('<br/>');
    const rows2 = block2.split('<br/>');

    if (rows1.length !== rows2.length) throw new Error(`blocks must have same number of rows; got ${rows1.length} and ${rows2.length}`);
    return rows1.map((row, i) => row + rows2[i]).join('<br/>');
};

const centerPiece = () => {
    let piece = ("&nbsp;".repeat(6) +"<br/>")
        .repeat(5); // blank space at top
    piece += '&nbsp;'.repeat(2) + '~' + '&nbsp;'.repeat(3) + '<br/>';
    piece += '[~~~~]<br/>'.repeat(27);
    piece += ("&nbsp;".repeat(6) +"<br/>");

    return piece;
}


/**
 * prints the rope as specified in the spec doc
 * @returns {string} rope
 */
const printRope = () => {

    const leftBranches = [];
    const rightBranches = [];

    leftBranches.push(new Branch(false, 7));
    leftBranches[0].populateBranch()
    rightBranches.push(new Branch(true, 7));
    rightBranches[0].populateBranch()

    for (let i =1; i<4; i++) {
        leftBranches.push(new Branch(false, 4 - leftBranches[i-1].lowerBound));
        leftBranches[i].populateBranch()
        rightBranches.push(new Branch(true, 4 - rightBranches[i-1].lowerBound));
        rightBranches[i].populateBranch()
    }

    let leftpiece = '';
    leftBranches.forEach(branch => {
        leftpiece += branch.toString();
    });
    let numRows = leftpiece.match(/br/g).length;
    if (numRows < 34) leftpiece += ('&nbsp;'.repeat(16)+ '&<br/>').repeat(34-numRows);

    let rightpiece = '';
    rightBranches.forEach(branch => {
        branch.populateBranch()
        rightpiece += branch.toString();
    });
    numRows = (rightpiece.match(/br/g) || []).length;
    if (numRows < 34) rightpiece += '&<br/>'.repeat(34-numRows);

    let rstring = addBlocks(leftpiece, centerPiece());
    rstring = addBlocks(rstring, rightpiece);

    return rstring;
};


// put stuff onto the receipt

for (let y = 0; y < 5; y++) {
    textContent += printClouds();
    textContent += "<br/><br/>";
    textContent += printChandelierA();
    textContent += printChandelierB() + "<br/>";
    textContent += printTwinkleBanner() + "<br/>";
    textContent += printRope() + "<br/>";
}
 


// FINALLY: everything that we did - put it onto the receipt
let ReceiptPlace = document.querySelector('#receipt');
ReceiptPlace.innerHTML = textContent;