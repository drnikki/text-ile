/**
 * prints the twinkle banner as specified in the spec doc.
 * @param {boolean} left tells the function to draw from left (if true) or right (if false). randomized if omitted
 * @returns {string} twinkle banner
 */
const printTwinkleBanner = (left = Math.random() < 0.5) => {
  const ribbonChoices = "_*':-^";
  // decide how many ribbons to use
  const numRibbons = Math.floor(Math.random() * 30 + 5); // random int from 5-35

  // create top pole
  let pole = "";
  pole += "&nbsp;".repeat(numRibbons + 3) + "___" + "<br/>";
  pole += "=".repeat(numRibbons + 4) + "[]" + "<br/>";

  // decide the order of ribbon styles
  let longestRibbonLength = 0;
  let ribbonStyles = [];
  let maxRibbonLength = Math.floor(Math.random() * 30 + 3);
  for (let i = 0; i < numRibbons; i++) {
    const choice = Math.floor(Math.random() * ribbonChoices.length); // pick random char from ribbonChoices string
    const length = Math.floor(Math.random() * maxRibbonLength + 1); // random length between 3 and 11
    ribbonStyles.push({
      style: ribbonChoices.charAt(choice),
      length,
    });

    // update longest ribbon length
    longestRibbonLength = Math.max(longestRibbonLength, length);
  }

  // generate first 3 rows of ribbons
  let ribbons = "";
  ribbons += printRibbonRow(ribbonStyles) + "[]" + "<br/>";
  ribbons += printRibbonRow(ribbonStyles) + "[" + "<br/>";
  ribbons += printRibbonRow(ribbonStyles) + "|" + "<br/>";

  // generate the rest of the ribbons
  for (let i = 4; i <= longestRibbonLength; i++)
    ribbons += printRibbonRow(ribbonStyles, i) + "<br/>";

  const banner = pole + ribbons;

  return left ? banner : reverseBanner(banner);
};

/**
 * returns a single row of the twinkle banner based on the current ribbon styles
 * @param ribbonStyles an array that specifies the order and style and length of each ribbon
 * @param rowNum current row we are printing, starting from 1
 * @return one row
 */
const printRibbonRow = (ribbonStyles, rowNum = 0) => {
  let row = "&nbsp;".repeat(4);

  ribbonStyles.forEach(({ style, length }) => {
    if (rowNum < length)
      row += style; // add ribbon to row if we're not past its length
    else if (rowNum === length)
      row += style === ":" ? "v" : style; // top ribbon off appropriately
    else row += "&nbsp;"; // if we're past the ribbon, just add space
  });

  return row;
};

/**
 * a crude way to flip the banner for use on right side
 * @param banner
 */
const reverseBanner = (banner) => {
  const receiptWidth = 40;

  const rows = banner.split("<br/>");
  let flippedRows = [];
  rows.forEach((row) => {
    //find length, adjusted based on number of non-breaking spaces
    const spaceCount = (row.match(/nbsp/g) || []).length;
    const length = row.length - 5 * spaceCount;
    const padding = "&nbsp;".repeat(receiptWidth - length);

    const flippedRow = row
      .split("")
      .reverse()
      .join("") // flipped row with spaces and brackets backwards
      .replaceAll(";psbn&", "&nbsp;") // spaces fixed
      .replaceAll("[", "]") // ]'s fixed
      .replaceAll("]]", "[]"); // []'s fixed
    flippedRows.push(padding + flippedRow);
  });
  return flippedRows.join("<br/>");
};

export default printTwinkleBanner;
