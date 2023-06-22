import { browserToPrinter } from "../receipt.js";

/**
 * Use this template to create a file for a new receipt set.
 * Follow the directions in the 4 comments marked TODO.
 */

/**
 * TODO 1/4: Describe your set of receipts
 */

/**
 * TODO 2/4:
 *  1. pick a keyword. Check ./README.md to see which words are already in use
 *  2. add your new keyword to ./README.md
 *
 * associates this set of receipts with a key word
 * @type {string}
 */
const keyword = "";

/**
 * receipt data in browser-friendly form. an array of strings using &nbsp;'s and <br/>'s
 * @type {String[]}
 */
const browserReceipts = [];

/**
 *  TODO 3/4: Generate receipts here and push each receipt to browserReceipts.
 *      (This is where most of your code goes)
 */

/**
 * receipt data in printer-friendly form. a 2d array of strings using regular spaces and \n
 * @type {String[][]}
 */
const printerReceipts = browserReceipts.map(browserToPrinter);

/**
 * export for use in receipt.js
 */

export default [
  keyword,
  {
    browserReceipts,
    printerReceipts,
  },
];

/**
 * TODO 4/4:
 *  1. Import your set of receipts in ../receipt.js
 *  2. Add your set to the receiptSets list in ../receipt.js
 */
