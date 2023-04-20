
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


export default printRope;