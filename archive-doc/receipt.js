/**
 * @file this determines the shape of the receipt itself and configuration
 */


/**
 * @param rows {integer} the number of rows / aka the height or length
 * @param cols {integer} # of Columns to print on each row
 * @param justification {string} is center, left, right
 */
 class Receipt {
    constructor(rows, cols, justification) {
      this.rows = rows;
      this.cols = cols;
      this.justification = justification;
    }
  }

// exporting the class so that it's available.  Who knows!
export {Receipt};

