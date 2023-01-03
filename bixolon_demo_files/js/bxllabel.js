
var label_data = {id:0, functions:{}};
var label_func = {};
var incLabelNum = 0;

function getLabelData() {
    label_data.functions = label_func;
    label_func = {};
    incLabelNum = 0;

    return JSON.stringify(label_data);
}

function setLabelId(setId) {
    label_data.id = setId;
}

function checkLabelStatus() {
    var _a = {checkLabelStatus:[]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function clearBuffer() {
    var _a = {clearBuffer:[]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function printBuffer() { switch(arguments.length) {
    case 0:
        var _a = {printBuffer:[]};
        label_func["func"+incLabelNum] = _a;
        incLabelNum++;
        break;
    case 1:
        var _a = {printBuffer:[arguments[0]]};
        label_func["func"+incLabelNum] = _a;
        incLabelNum++;
        break;
    }
}

function directDrawText(text) {
    var _a = {directDrawText:[text]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function directDrawHex(hexstring) {
    var _a = {directDrawHex:[hexstring]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setCharacterset(ics,charset) {
    var _a = {setCharacterset:[ics, charset]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawDeviceFont(text, x, y, fontType, widthEnlarge, heightEnlarge, rotation, invert, bold, alignment) {
    var _a = {drawDeviceFont:[text, x, y, fontType, widthEnlarge, heightEnlarge, rotation, invert, bold, alignment]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawVectorFont(text, x, y, fontType, fontWidth, fontHeight, rightSpacing, bold, invert, italic, rotation, alignment, rtol) {
    var _a = {drawVectorFont:[text, x, y, fontType, fontWidth, fontHeight, rightSpacing, bold, invert, italic, rotation, alignment, rtol]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawTrueTypeFont (text, x, y, fontname, fontsize, rotation, italic, bold, underline, compression) {
    var _a = {drawTrueTypeFont:[text, x, y, fontname, fontsize, rotation, italic, bold, underline, compression]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function draw1DBarcode(data, x, y, symbol, narrowbar, widebar, height, rotation, hri) {
    var _a = {draw1DBarcode:[data, x, y, symbol, narrowbar, widebar, height, rotation, hri]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawMaxiCode(data, x, y, mode) {
    var _a = {drawMaxiCode:[data, x, y, mode]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawPDF417(data, x, y, maxRowCount, maxColumnCount, eccLevel, dataCompressionMethod, hri, barcodeOriginPoint, moduleWidth, barHeight, rotation) {
    var _a = {drawPDF417:[data, x, y, maxRowCount, maxColumnCount, eccLevel, dataCompressionMethod, hri, barcodeOriginPoint, moduleWidth, barHeight, rotation]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawQRCode(data, x, y, model, eccLevel, size, rotation) {
    var _a = {drawQRCode:[data, x, y, model, eccLevel, size, rotation]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawDataMatrix(data, x, y, size, invert, rotation = 0) {
    var _a = {drawDataMatrix:[data, x, y, size, invert, rotation]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawAztec(data, x, y, size, extendedChannel, eccSymbol, menuSymbol, numberOfSymbols, optionalID, rotation) {
    var _a = {drawAztec:[data, x, y, size, extendedChannel, eccSymbol, menuSymbol, numberOfSymbols, optionalID, rotation]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawCode49(data, x, y, narrowbar, widebar, height, hri, starting, rotation) {
    var _a = {drawCode49:[data, x, y, narrowbar, widebar, height, hri, starting, rotation]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawCODABLOCK(data, x, y, narrowbar, widebar, height, security, dataColumns, mode, rowsEncode) {
    var _a = {drawCODABLOCK:[data, x, y, narrowbar, widebar, height, security, dataColumns, mode, rowsEncode]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawMicroPDF(data, x, y, moduleWidth, height, mode, rotation) {
    var _a = {drawMicroPDF:[data, x, y, moduleWidth, height, mode, rotation]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawIMB(data, x, y, rotation, hri) {
    var _a = {drawIMB:[data, x, y, rotation, hri]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawMSIBarcode(data, x, y, narrowbar, widebar, height, checkdigit, checkdigitHri, rotation, hri) {
    var _a = {drawMSIBarcode:[data, x, y, narrowbar, widebar, height, checkdigit, checkdigitHri, rotation, hri]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawPlesseyBarcode(data, x, y, narrowbar, widebar, height, checkdigitHri, rotation, hri) {
    var _a = {drawPlesseyBarcode:[data, x, y, narrowbar, widebar, height, checkdigitHri, rotation, hri]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawTLC39Barcode(data, x, y, narrowbar, widebar, height, pdf417Height, pdf417narrowbar, rotation) {
    var _a = {drawTLC39Barcode:[data, x, y, narrowbar, widebar, height, pdf417Height, pdf417narrowbar, rotation]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawRSSBarcode(data, x, y, rssType, magnification, separatorHeight, barcodeHeight, segmentWidth, rotation) {
    var _a = {drawRSSBarcode:[data, x, y, rssType, magnification, separatorHeight, barcodeHeight, segmentWidth, rotation]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawBitmap(data, x, y, width, dither) {
    var _a = {drawBitmap:[data, x, y, width, dither]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawBitmapFile(filepath, x, y, width, dither) {
    var _a = {drawBitmapFile:[filepath, x, y, width, dither]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function printPDF(filepath, pageNumber, width, dither) {
    var _a = {printPDF:[filepath, pageNumber, width, dither]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawBlock(startHorizontal, startVertical, endHorizontal, endVertical, option, thickness) {
    var _a = {drawBlock:[startHorizontal, startVertical, endHorizontal, endVertical, option, thickness]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function drawCircle(startHorizontal, startVertical, circleSize, muliplier) {
    var _a = {drawCircle:[startHorizontal, startVertical, circleSize, muliplier]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setPrintingType(type) {
    var _a = {setPrintingType:[type]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setMargin(horizontal, vertical) {
    var _a = {setMargin:[horizontal, vertical]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setLength(labelLength, gapLength, media, offset) {
    var _a = {setLength:[labelLength, gapLength, media, offset]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setWidth(width) {
    var _a = {setWidth:[width]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setSpeed(speed) {
    var _a = {setSpeed:[speed]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setDensity(density) {
    var _a = {setDensity:[density]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setOrientation(orientation) {
    var _a = {setOrientation:[orientation]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setOffset(offset) {
    var _a = {setOffset:[offset]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setTearoffPosition(position) {
    var _a = {setTearoffPosition:[position]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setAutoCutter(enable, period) {
    var _a = {setAutoCutter:[enable, period]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setupRFID(rfidType, numberOfRetries, numberOfLabel, radioPower) {
    var _a = {setupRFID:[rfidType, numberOfRetries, numberOfLabel, radioPower]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function calibrateRFID() {
    var _a = {calibrateRFID:[]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setRFIDPosition(transPosition) {
    var _a = {setRFIDPosition:[transPosition]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function writeRFID(dataType, startingBlockNumber, dataLength, data) {
    var _a = {writeRFID:[dataType, startingBlockNumber, dataLength, data]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setRFIDPassword(oldAccessPwd, oldKillPwd, newAccessPwd, newKillPwd) {
    var _a = {setRFIDPassword:[oldAccessPwd, oldKillPwd, newAccessPwd, newKillPwd]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function lockRFID() {
    var _a = {lockRFID:[]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function setEPCDataStructure(totalSize, fieldSizes) {
    var _a = {setEPCDataStructure:[totalSize, fieldSizes]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}

function printINI(filename, str1, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12, str13, str14, str15, str16, str17, str18, str19, str20) {
    var _a = {printINI:[filename, str1, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12, str13, str14, str15, str16, str17, str18, str19, str20]};
    label_func["func"+incLabelNum] = _a;
    incLabelNum++;
}