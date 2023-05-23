/**
 * peteca sprite
 * @author Michael Crockett
 */

/**
 * peteca sprite
 * @param padding - offset on the left. default is random value from 0 to 28
 */
const printPeteca = (padding = Math.floor(Math.random() * 10)) => (`
    ${'&nbsp;'.repeat(padding)}&nbsp;&nbsp;&nbsp;&nbsp;\\
    ${'&nbsp;'.repeat(padding)}\\&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;^
    ${'&nbsp;'.repeat(padding)}&nbsp;\\|/&nbsp;|/&nbsp;|
    ${'&nbsp;'.repeat(padding)}&nbsp;&nbsp;|/&nbsp;|&nbsp;&nbsp;|/
    ${'&nbsp;'.repeat(padding)}&nbsp;\\|&nbsp;&nbsp;|&nbsp;/|
    ${'&nbsp;'.repeat(padding)}\\&nbsp;|/&nbsp;|/&nbsp;|/
    ${'&nbsp;'.repeat(padding)}&nbsp;\\\\/&nbsp;|&nbsp;&nbsp;/
    ${'&nbsp;'.repeat(padding)}^&nbsp;&nbsp;\\&nbsp;|&nbsp;//
    ${'&nbsp;'.repeat(padding)}&nbsp;\\&nbsp;&nbsp;\\|//&nbsp;&nbsp;&nbsp;^
    ${'&nbsp;'.repeat(padding)}&nbsp;\\\\&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;/
    ${'&nbsp;'.repeat(padding)}&nbsp;&nbsp;\\\\|&nbsp;|&nbsp;\\//
    ${'&nbsp;'.repeat(padding)}&nbsp;&nbsp;&nbsp;&nbsp;\\|&nbsp;&nbsp;//
    ${'&nbsp;'.repeat(padding)}&nbsp;&nbsp;&nbsp;&nbsp;|=|/
    ${'&nbsp;'.repeat(padding)}&nbsp;&nbsp;__|=|__
    ${'&nbsp;'.repeat(padding)}&nbsp;/&nbsp;|---|&nbsp;\\
    ${'&nbsp;'.repeat(padding)}&nbsp;\\_______/
`);
export default printPeteca;