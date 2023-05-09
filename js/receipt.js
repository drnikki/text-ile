import allSpritesReceipt from "./receipt_sets/allSpritesReceipt.js";

/**
 * The purpose of this file is to provide the function `getReceiptContent`. We first import
 * each receipt set from its respective file and compile them all into a JSON object called `allTheReceipts`.
 * The function takes a keyword as a parameter and uses `allTheReceipts` to return the correct receipt content.
 */


/**
 * takes a string of browser-friendly receipt data and turns it into a printer-friendly array of receipt lines.
 * converts non-breaking spaces to regular spaces and break tags to \n. It also separates every line of textContent
 * to an element of the returned array.
 * @param textContent browser-friendly data
 * @returns {string[]} printer-friendly data
 */
export function browserToPrinter ( textContent ) {
    const rows = textContent.split(/<\s*\/?\s*br\s*\/?\s*>/); // < (spaces) (possible /) (spaces) br (repeat as before) >
    return rows.map(row => row.replaceAll('&nbsp;', ' ') + '\n');
}


/**
 * object to hold all the different kinds of receipts. see ./README.md
 * @type {{}}
 */
const allTheReceipts = {};


/**
 * Given a receipt set, make an object out of it and add it to allTheReceipts
 * @param receiptSet - the receipt set imported from a file in ./receipt_sets
 */
const addReceipts = ([keyword, {browserReceipts, printerReceipts}]) => {
    allTheReceipts[keyword] = {
        browserReceipts,
        printerReceipts,
    };
};

/**
 * a list of all the receipt sets imported from the /receipt_sets directory
 * @type {*[]}
 */
const receiptSets = [
    allSpritesReceipt,
]

// add each set of receipts to allTheReceipts.
receiptSets.forEach(addReceipts);

/**
 * the function we export
 */
const getReceiptContent = keyword =>
    [allTheReceipts[keyword].browserReceipts, allTheReceipts[keyword].printerReceipts];
export default getReceiptContent;

/**
 * export a list of all the keywords
 */
export const keywords = Object.keys(allTheReceipts);