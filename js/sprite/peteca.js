/**
 * peteca sprite
 * @author Michael Crockett
 */

/**
 * peteca sprite
 * @param padding - offset on the left. default is random value from 0 to 28
 */
const printPeteca = (padding = Math.floor(Math.random() * 29)) => (`
    ${'&nbsp;'.repeat(padding)}&nbsp;&nbsp;&nbsp;&nbsp;\\<br/>
    ${'&nbsp;'.repeat(padding)}\\&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;^<br/>
    ${'&nbsp;'.repeat(padding)}&nbsp;\\|/&nbsp;|/&nbsp;|<br/>
    ${'&nbsp;'.repeat(padding)}&nbsp;&nbsp;|/&nbsp;|&nbsp;&nbsp;|/<br/>
    ${'&nbsp;'.repeat(padding)}&nbsp;\\|&nbsp;&nbsp;|&nbsp;/|<br/>
    ${'&nbsp;'.repeat(padding)}\\&nbsp;|/&nbsp;|/&nbsp;|/<br/>
    ${'&nbsp;'.repeat(padding)}&nbsp;\\\\/&nbsp;|&nbsp;&nbsp;/<br/>
    ${'&nbsp;'.repeat(padding)}^&nbsp;&nbsp;\\&nbsp;|&nbsp;//<br/>
    ${'&nbsp;'.repeat(padding)}&nbsp;\\&nbsp;&nbsp;\\|//&nbsp;&nbsp;&nbsp;^<br/>
    ${'&nbsp;'.repeat(padding)}&nbsp;\\\\&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;/<br/>
    ${'&nbsp;'.repeat(padding)}&nbsp;&nbsp;\\\\|&nbsp;|&nbsp;\\//<br/>
    ${'&nbsp;'.repeat(padding)}&nbsp;&nbsp;&nbsp;&nbsp;\\|&nbsp;&nbsp;//<br/>
    ${'&nbsp;'.repeat(padding)}&nbsp;&nbsp;&nbsp;&nbsp;|=|/<br/>
    ${'&nbsp;'.repeat(padding)}&nbsp;&nbsp;__|=|__<br/>
    ${'&nbsp;'.repeat(padding)}&nbsp;/&nbsp;|---|&nbsp;\\<br/>
    ${'&nbsp;'.repeat(padding)}&nbsp;\\_______/<br/>
`);
export default printPeteca;