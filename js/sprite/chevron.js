/**
 * an interesting chevron pattern
 * @author Sourjyamoy - sprite design
 * @author Michael Crockett - code
 */

/**
 * print chevron pattern designed by Sourjyamoy
 * @param repeat - number of times to repeat the pattern
 * @returns {string}
 */
const printChevron = (repeat = 1) =>
  "3100061115000111300011110002111000430001<br/>0000511100001112000111100011110000110000<br/>0000111500011120001111000211100000000000<br/>0004115000111200011110002111000400000040<br/>1000300001113000111100021110004115000113<br/>1100000011120001111000111100000111501110<br/>1110000111300011110002111000000011111150<br/>1111000412000111100021110006100001111500<br/>3111100050001111000111100051110000110000<br/>0011110000011110002111000003111000000001<br/>0002111000611100021110006000311100000011<br/>1000111100041000211100041100031110000111<br/>1100011110000002111000011110003111001113<br/>1110002111000021110000001111000311111130<br/>1111000111100061100062000111100031111300<br/>0111100011110004000411100011110003113000<br/>0011110002111000000011110001111000330001<br/>0001111000211100000001112000111100000011<br/>3000111100011110000000111100011110000111<br/>1300011110001113000400011110001111001111<br/>1130001111000230001130001112000111111110<br/>1113000111100000011120000111100011111100<br/>0111300011110000111100000011110001111000<br/>0011130001130001111000140001111000110002<br/>0001113000400011120002113000111200000021<br/>0000111300000111100011110000011110000211<br/>1000011100001111000111100060001111001111<br/>1100001300011120002111000313000111121110<br/>1110000000111100021110003111000011111100<br/>5111000001111000111100031110000001111000<br/>0011400011110001111000311100004000110004<br/>".repeat(
    repeat
  );

export default printChevron;
