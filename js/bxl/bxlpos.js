
var pos_data = {id:0, functions:{}};
var pos_func = {};
var incPosNum = 0;

function getPosData() {
    pos_data.functions = pos_func;
    pos_func = {};
    incPosNum = 0;

    return JSON.stringify(pos_data);
}

function setPosId(setId) {
    pos_data.id = setId;
}

function checkPrinterStatus() {
    var _a = {checkPrinterStatus:[]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function directPrintText(text) {
    var _a = {directPrintText:[text]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function directPrintHex(hexString) {
    var _a = {directPrintHex:[hexString]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function cutPaper(bFeedCut = 0) {
    var _a = {cutPaper:[bFeedCut]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function setInternationalCharset(ics) {
    var _a = {setInternationalCharset:[ics]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function setCharacterset(charset) {
    var _a = {setCharacterset:[charset]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function printText(text, horizontal, vertical, bold, invert, underline, fonttype, alignment) {
    var _a = {printText:[text, horizontal, vertical, bold, invert, underline, fonttype, alignment]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function print1DBarcode(data, symbol, barWidth, height, hriPosition, alignment) {
    var _a = {print1DBarcode:[data, symbol, barWidth, height, hriPosition, alignment]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function printPDF417(data, symbol, alignment, columnNumber, rowNumber, moduleWidth, moduleHeight, eccLevel) {
    var _a = {printPDF417:[data, symbol, alignment, columnNumber, rowNumber, moduleWidth, moduleHeight, eccLevel]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function printQRCode(data, model, alignment, moduleSize, eccLevel) {
    var _a = {printQRCode:[data, model, alignment, moduleSize, eccLevel]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function printGS1Databar(data, symbol, alignment, moduleSize) {
    var _a = {printGS1Databar:[data, symbol, alignment, moduleSize]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function printDataMatrix(data, alignment, moduleSize) {
    var _a = {printDataMatrix:[data, alignment, moduleSize]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;   
}

function printCompositeBarcode(data, symbol, alignment, moduleSize) {
    var _a = {printCompositeBarcode:[data, symbol, alignment, moduleSize]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function printBitmap(imagedata, width, alignment, dither) {
    var _a = {printBitmap:[imagedata, width, alignment, dither]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function printBitmapFile(filepath, width, alignment, dither) {
    var _a = {printBitmapFile:[filepath, width, alignment, dither]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function printPDFFile(filepath, pageNumber, width, alignment, dither) {
    var _a = {printPDFFile:[filepath, pageNumber, width, alignment, dither]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function pagemodeBegin() {
    var _a = {pagemodeBegin:[]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function pagemodePrintArea(width, height) {
    var _a = {pagemodePrintArea:[width, height]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function pagemodePrintPosition(x, y) {
    var _a = {pagemodePrintPosition:[x, y]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function pagemodePrintDirection(direction) {
    var _a = {pagemodePrintDirection:[direction]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function pagemodeEnd() {
    var _a = {pagemodeEnd:[]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}

function openDrawer(pinNumber) {
    var _a = {openDrawer:[pinNumber]};
    pos_func["func"+incPosNum] = _a;
    incPosNum++;
}
