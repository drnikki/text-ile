import {requestPrint} from "./bxl/bxlcommon.js";
import {setPosId, checkPrinterStatus, printText, getPosData} from "./bxl/bxlpos.js";


/**
 * a class to handle printing.
 * There are two options:
 * (1) if you are adding lines to be printed one-by-one, then you can instantiate a PrintHandler object and use the addLine and submitPrint methods.
 * (2) if you already have your lines that you want printed stored in an array, then you can simply use the static method PrintHandler.printLines, and it will handle all the printing for you
 * Option (2) can also be imported as its own standalone function.
 * @author Michael Crockett (line 400 onward)
 */


/**
 * a class to handle printing.
 * There are two options:
 * (1) if you are adding lines to be printed one-by-one, then you can instantiate a PrintHandler object and use the addLine and submitPrint methods.
 * (2) if you already have your lines that you want printed stored in an array, then you can simply use the static method PrintHandler.printLines, and it will handle all the printing for you
 * @author Michael Crockett
 */
class PrintHandler {
    static issueID = 1;
    lines = [];

    /**
     * store a line to be submitted with submitPrint
     * @param {string} text - line of text, which must end in "\n"
     */
    addLine (text) {
        this.lines.push(text);
    }

    /**
     * override currently stored lines
     * @param {String[]} lines - an array of lines to be printed, each ending with "\n"
     */
    setLines (lines) {
        this.lines = lines;
    }

    /**
     * clear out any stored lines in this print handler
     */
    reset () {
        this.lines = [];
    }

    /**
     * submit all stored lines to the receipt printer
     * @param log - if true, log each printed line to the js console
     */
    submitPrint (log=false) {
        PrintHandler.printLines(this.lines, log);
        // reset
        this.reset();
    }

    /**
     * static method to print a given set of lines without instantiating a PrintHandler object.
     * @param {string[]} lines - each line to print must end in "\n"
     * @param {boolean} log - if true, log each printed line to the js console
     */
    static printLines (lines, log=false) {
        setPosId(PrintHandler.issueID);
        checkPrinterStatus();
        lines.forEach((line => {
            if (log) console.log(line);
            printText(line,  0, 0, false, false, false, 1, 0);
        }));
        const strSubmit = getPosData();
        PrintHandler.issueID++;
        requestPrint("Printer1", strSubmit, console.log);
    }
}

/**
 * function to print a given set of lines without instantiating a PrintHandler object.
 * @param {string[]} lines - each line to print must end in "\n"
 * @param {boolean} log - if true, log each printed line to the js console
 */
export const printLines = (lines, log=false) => {
    PrintHandler.printLines(lines, log);
};

export default PrintHandler;