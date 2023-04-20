
class Branch {
    static maxWidth = 40 // may have to reduce by 1
    directionRight; //specifies which direction the branch faces
    rows = [];

    constructor(directionRight) {
        this.directionRight = directionRight;
        // populate first 3 rows
        for (let i=0; i<3; i++) this.rows[i] = '';
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
            } else if (!this.rowExists(row+2)) this.rows[row+2] = ''; // ensure that row + 2 exists

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
                (this.rowExists(3) && !this.rowOpen(3, position + (!out ? 2 : 0)))
            ) return fail;
            console.log("here" + row);
        } else {
            if (
                (this.rowExists(row - 2) && !this.rowOpen(row - 2, position + (out ? 2 : 0))) ||
                (this.rowExists(row + 2) && !this.rowOpen(row + 2, position + (!out ? 2 : 0)))
            ) return fail;
        }
        // check if we're too close to the end
        if (Branch.maxWidth - position < 3) return fail;

        // chance for random fail
        if (Math.random() < 0.25) return fail;

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
        for (let i = lastOddIndex; i > 0; i -= 2){
            rstring += this.toStringHelper(i);
        }
        for (let i = 0; i < this.rows.length; i += 2) {
            rstring += this.toStringHelper(i);
        }

        return rstring;
    }

    toStringHelper(i){
        if (!this.rows[i]) return '';
        let row = this.rows[i];
        // flip if drawing to left side
        if (!this.directionRight) {
            row = " ".repeat(Branch.maxWidth - row.length) + row.split('').reverse().join('');
        }
        return row.replaceAll(' ', '&nbsp;') + '<br/>';
    }
}



/**
 * prints the rope as specified in the spec doc
 * @returns {string} rope
 */
const printRope = () => {
    const newBranch = new Branch(Math.random() < 0.5);
    newBranch.populateBranch();
    return newBranch.toString();
};


export default printRope;