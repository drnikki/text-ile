/**
 * class used to generate a single branch for rope sprite
 */
class Branch {
    static maxWidth = 17;
    directionRight; //specifies which direction the branch faces
    rows = [];

    // bounds are used to make sure that branches don't collide with each other
    // for more precise control, use the deadZones option of populateBranch method
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
     * @param {Map<Object>} deadZone map of objects that explicitly specifies where a branch cannot grow
     */
    populateBranch({
                       row = 0,
                       position = 0,
                       out=true,
                       deadZone = null,
                   }) {
        // set current node
        const [endPosition, success] = this.addNodeToRow(row, position, out, deadZone);

        // set branches up and down
        if (success) {
            if (row === 0){
                this.populateBranch({row: 1, position: endPosition, deadZone});
                this.populateBranch({row: 2, position: endPosition, deadZone});
                return; // break out here
            } else if (!this.rowExists(row+2)) {
                // ensure that row + 2 exists
                const even = row % 2 === 0;
                if (even) {
                    if (this.lowerBound >= Branch.ultimateEnforcedBound) return;  // if we're at the bound, stop
                    this.rows[row+2] = '&';
                    this.lowerBound++; // dynamically adjust lowerBound
                } else { // odd
                    if (((row + 1) / 2) >= this.upperBound ) return; // if we're at the bound, stop
                    this.rows[row+2] = '&';
                }
            }

            if (row === 1) { // special case because 0 !== row - 2
                this.populateBranch({row: 3, position: endPosition, out: true, deadZone});
                this.populateBranch({row: 0, position: endPosition, out: false, deadZone});
            } else {
                this.populateBranch({row: row + 2, position: endPosition, out: true, deadZone});
                this.populateBranch({row: row - 2, position: endPosition, out: false, deadZone});
            }
        }
    }

    /**
     * generate a new node at the row and position specified
     * @param {number} row the row we are building on, 0 is middle (root row);
     * odd rows are above 0, even rows below
     * @param {number} position the point on the row that we are starting at
     * @param {boolean} out true if current branch is branching away from center
     * @param {Map<Object>} deadZone map of objects that explicitly specifies where a branch cannot grow
     * @returns {boolean[]|(number|boolean)[]} [endPosition, success]
     */
    addNodeToRow(row, position, out, deadZone) { // position starts counting at 1
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

        // check if we're in the dead zone
        if (deadZone && deadZone.has(row)) {
            const {deadStart, deadEnd} = deadZone.get(row);
            if (deadStart < position + 5 && position < deadEnd) { // past start and before end of dead zone
                return fail;
            }
        }

        // chance of 1/20 for random fail
        if (Math.random() < 0.05) return fail;


        // all good to add the node
        const newNode = this.newNode(Branch.maxWidth-position);
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
        // add everything else
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
        row += " ".repeat(Branch.maxWidth - row.length);
        // flip if drawing to left side
        if (!this.directionRight) row = row.split('').reverse().join('');

        return row.replaceAll(' ', '&nbsp;') + '<br/>';
    }
}


/**
 * trunk of rope
 * @param {boolean} long short or long trunk
 */
const centerPiece = (long = true) => {
    let piece = ("&nbsp;".repeat(6) +"<br/>")
        .repeat(5); // blank space at top
    piece += '&nbsp;'.repeat(2) + '~' + '&nbsp;'.repeat(3) + '<br/>';
    piece += '[~~~~]<br/>'.repeat(long ? 27 : 9);
    piece += ("&nbsp;".repeat(6) +"<br/>");

    return piece;
}

const boughPiece = style => {
    switch (style) {
        case 1:
            return "\\==/|";
        case 2:
            return "\\==\\|";
        case 3:
            return "/==\\|";
        case 4:
            return "*###/|"
        default:
            return "";
    }
}

/*
 places bough on top of old "image"
 */
const addBough = background => {
    const backRows = background.split("<br/>").map(row => row.replaceAll("&nbsp;", " "));

    // one row at a time

    // top bough
    backRows[0] = "  *##=/|" + boughPiece(1) + boughPiece(2) + boughPiece(3).repeat(2) + "/   *";
    backRows[1] = "     #/|" + boughPiece(1).repeat(2) + boughPiece(2) + boughPiece(3).repeat(2) + "/";
    backRows[2] = backRows[2].slice(0,7)
        + boughPiece(4) + boughPiece(1).repeat(2) + boughPiece(2) + boughPiece(3) + "/=  *";
    backRows[3] = backRows[3].slice(0,12)
        + boughPiece(4) + boughPiece(1).repeat(2) + boughPiece(2) + boughPiece(3) + "/";
    backRows[4] = backRows[4].slice(0,17)
        + boughPiece(4) + boughPiece(1).repeat(2) + boughPiece(2) + "//";
    backRows[5] = backRows[5].slice(0,22)
        + boughPiece(4) + boughPiece(1).repeat(2) + "\\\\";
    backRows[6] = backRows[6].slice(0,27)
        + boughPiece(4) + boughPiece(1) + "\\\\";
    backRows[7] = backRows[7].slice(0,32) + "*##=/|\\\\";
    backRows[8] = backRows[8].slice(0,35) + "#/|\\";
    backRows[9] = backRows[9].slice(0,37) + "*#";

    // bottom bough
    const s = backRows.length - 7;
    if (s < 0) throw new Error("background is too short");
    backRows[s] = "  * " + backRows[s].slice(4);
    backRows[s+1] = " \\|/" + backRows[s+1].slice(4);
    backRows[s+2] = "\\\\|/=  *" + backRows[s+2].slice(8);
    backRows[s+3] = "\\\\|" + boughPiece(3) +"/   *" + backRows[s+3].slice(13);
    backRows[s+4] = "\\\\|" + boughPiece(3).repeat(2) +"/  &*" + backRows[s+4].slice(18);
    backRows[s+5] = "//|" + boughPiece(2)+ boughPiece(3).repeat(2) +"/~~~*" + backRows[s+5].slice(23);
    backRows[s+6] = " /|"+boughPiece(1) + boughPiece(2)+ boughPiece(3).repeat(2) +"/   *" + backRows[s+6].slice(23);

    return backRows.map(row => row.replaceAll(" ", "&nbsp;")).join("<br/>");
};


const deadZones = {
    topRight: new Map([
        [5, {deadStart: 0, deadEnd: 16}],
        [3, {deadStart: 4, deadEnd: 16}],
        [1, {deadStart: 9, deadEnd: 16}],
        [0, {deadStart: 12, deadEnd: 16}],
        [2, {deadStart: 13, deadEnd: 16}],
    ]),
    topLeft: new Map([
        [7, {deadStart: 0, deadEnd: 5}],
        [9, {deadStart: 0, deadEnd: 10}],
        [11, {deadStart: 0, deadEnd: 12}],
        [13, {deadStart: 0, deadEnd: 16}],
    ]),
    bottomLeft: new Map([
        [2, {deadStart: 13, deadEnd: 16}],
        [4, {deadStart: 12, deadEnd: 16}],
        [6, {deadStart: 8, deadEnd: 16}],
        [8, {deadStart: 0, deadEnd: 16}],
    ]),
    right: new Map([
        [9, {deadStart: 0, deadEnd: 16}],
        [7, {deadStart: 4, deadEnd: 16}],
        [5, {deadStart: 9, deadEnd: 16}],
        [3, {deadStart: 12, deadEnd: 16}],
        [1, {deadStart: 13, deadEnd: 16}],
    ]),
};
deadZones.left = new Map([...(deadZones.topLeft), ...(deadZones.bottomLeft)]);

const printRopePiece = (long = true) => {

    let rightpiece = '';
    let leftpiece = '';
    if (long) {
        const leftBranches = [];
        const rightBranches = [];

        //generate top left and top right branches
        leftBranches.push(new Branch(false, 7));
        leftBranches[0].populateBranch({deadZone : deadZones.topLeft});
        rightBranches.push(new Branch(true, 8));
        rightBranches[0].populateBranch({deadZone : deadZones.topRight});
        // generate rest of branches
        for (let i = 1; i < 4; i++) {
            leftBranches.push(new Branch(false, 4 - leftBranches[i - 1].lowerBound));
            leftBranches[i].populateBranch(i===3 ? {deadZone: deadZones.bottomLeft} : {});
            rightBranches.push(new Branch(true, 4 - rightBranches[i - 1].lowerBound));
            rightBranches[i].populateBranch({});
        }
        // convert branches to strings
        leftBranches.forEach(branch => {
            leftpiece += branch.toString();
        });
        rightBranches.forEach(branch => {
            branch.populateBranch({});
            rightpiece += branch.toString();
        });
        // adjust size of pieces -- left
        let numRows = leftpiece.match(/br/g).length;
        if (numRows < 34) leftpiece += ('&nbsp;'.repeat(16) + '&<br/>').repeat(34 - numRows);
        // -- right
        numRows = (rightpiece.match(/br/g) || []).length;
        if (numRows < 34) rightpiece += '&<br/>'.repeat(34 - numRows);

    } else {
        // do all the same as above, but adjust for only one branch on each side
        // -- left
        const leftBranch = new Branch(false, 7);
        leftBranch.populateBranch({deadZone: deadZones.left});
        leftpiece = leftBranch.toString();
        let numRows = leftpiece.match(/br/g).length;
        if (numRows < 16) leftpiece += ('&nbsp;'.repeat(16) + '&<br/>').repeat(16 - numRows);
        // -- right
        const rightBranch = new Branch(true, 10);
        rightBranch.populateBranch({deadZone: deadZones.right});
        rightpiece = rightBranch.toString();
        numRows = (rightpiece.match(/br/g) || []).length;
        if (numRows < 16) rightpiece += '&<br/>'.repeat(16 - numRows);
    }

    // connect all the pieces
    let rstring = '';
    rstring = addBlocks(leftpiece, centerPiece(long));
    rstring = addBlocks(rstring, rightpiece);
    return addBough(rstring) + "<br/>";
};

/**
 * prints the rope as specified in the spec doc
 * @returns {string} rope
 */
const printRope = () => {
    return printRopePiece(false) + printRopePiece(true) + printRopePiece(false);
}

export default printRope;