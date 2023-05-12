// import {numToSpace} from "../stringManipulation.js";

function chandelierCluster(chandelierGrid, x, y, arrowPiece) {
    const chars = [arrowPiece, arrowPiece, arrowPiece, '|', '|', '|', ';', '|', ';', 'o', ';', 'o', '&nbsp;', 'o', '&nbsp;']
    let charIndex = 0;
    for (i=y; i<(y+5); i++) {
        for (j=x; j<(x+3); j++) {
            chandelierGrid[i][j] = chars[charIndex]
            charIndex++;
        }
    }
    return chandelierGrid
}

export function printChandelierA() {
    const m = 40
    const n = 17
    let chandelierGrid = Array.from(Array(n), _ => Array(m).fill('&nbsp;'));

    var brassRows = Math.floor((Math.random() * 3) + 4); // btwn 4 and 6
    var crystalRows = Math.floor((Math.random() * 3) + 1); // btwn 1 and 3 (each row is rly 2 rows)
    var crystalWidth = '';
    var crystalPrefix = ''; // the # of spaces before crystals start.
    // when 4 brass rows, there are 5 crystal columns
    // when 5, 9
    // when 6, 13
    if (brassRows == 4) {
        crystalWidth = 5;
        crystalPrefix = 6;
    } else if (brassRows == 5) {
        crystalWidth = 9;
        crystalPrefix = 4;function printChandelierA() {
            const m = 40
            const n = 17
            let chandelierGrid = Array.from(Array(n), _ => Array(m).fill('&nbsp;'));
        
            var brassRows = Math.floor((Math.random() * 3) + 4); // btwn 4 and 6
            var crystalRows = Math.floor((Math.random() * 3) + 1); // btwn 1 and 3 (each row is rly 2 rows)
            var crystalWidth = '';
            var crystalPrefix = ''; // the # of spaces before crystals start.
            // when 4 brass rows, there are 5 crystal columns
            // when 5, 9
            // when 6, 13
            if (brassRows == 4) {
                crystalWidth = 5;
                crystalPrefix = 6;
            } else if (brassRows == 5) {
                crystalWidth = 9;
                crystalPrefix = 4;
            } else if (brassRows == 6){
                crystalWidth = 13;
                crystalPrefix = 2; //eyeballing this
            }
        
            chandelierGrid[0][7] = '<'
            chandelierGrid[0][8] = '^'
            chandelierGrid[0][9] = '>'
            chandelierGrid[1][7] = '^'
            chandelierGrid[1][8] = '^'
            chandelierGrid[1][9] = '^'
            chandelierGrid[2][6] = '<'
            chandelierGrid[2][7] = '^'
            chandelierGrid[2][8] = '^'
            chandelierGrid[2][9] = '^'
            chandelierGrid[2][10] = '>'
            chandelierGrid[3][5] = '<'
            chandelierGrid[3][6] = '^'
            chandelierGrid[3][7] = '^'
            chandelierGrid[3][8] = '^'
            chandelierGrid[3][9] = '^'
            chandelierGrid[3][10] = '^'
            chandelierGrid[3][11] = '>'
        
            let currRow = 4
        
            if (brassRows == 5 || brassRows == 6) {
                const brassString = '<^^^^^^^^^>'
                for(i=0; i<brassString.length; i++) {
                    chandelierGrid[4][3 + i] = brassString[i]
                }
                currRow = 5
            }
            if (brassRows == 6) {
                const brassString = "<^^^^^^^^^^^^^>"
                for(i=0; i<brassString.length; i++) {
                    chandelierGrid[5][1 + i] = brassString[i]
                }
                currRow = 6
            }
        
            for(let i=0; i<crystalRows; i++) {
                for (let j=0; j<crystalWidth; j++) {
                    chandelierGrid[currRow][j + crystalPrefix] = '|'
                }
                currRow++
                for (let j=0; j<crystalWidth; j++) {
                    chandelierGrid[currRow][j + crystalPrefix] = 'o'
                }
                currRow++
            }
        
            chandelierGrid[6][30] = '+'
            chandelierGrid[7][29] = '='
            chandelierGrid[7][30] = '='
            chandelierGrid[7][31] = '='
            for (let i=8; i<n; i+=2) {
                chandelierGrid[i][30] = '('
                if (i + 1 < n) {
                    chandelierGrid[i+1][31] = ')'
                }
            }
        
            let arrText='';
            for (let i = 0; i < chandelierGrid.length; i++) {
                for (let j = 0; j < chandelierGrid[i].length; j++) {
                    arrText+=chandelierGrid[i][j];
                }
                arrText += "<br/>";
            }
            return arrText;
        }
        
        function printChandelierB() {
            const m = 40;
            const n = 17;
            let chandelierGrid = Array.from(Array(n), _ => Array(m).fill('&nbsp;'));
        
            var hasTail = true;
            // determine the variation
            var hasWings = Math.random() > 0.5 ? true : false;
            if (hasWings) {
             hasTail = Math.random() > 0.5 ? true : false; // it can only -not- have a tail if it has wings.
            }
        
            chandelierGrid[0][29] = '<'
            chandelierGrid[0][30] = '^'
            chandelierGrid[0][31] = '>'
            for (i=1; i<5; i++) {
                chandelierGrid[i][30] = '|'
            }
            chandelierGrid[5][30] = ';'
        
            chandelierCluster(chandelierGrid, 26, 1, '>')
            chandelierCluster(chandelierGrid, 32, 1, '>')
        
            if (hasWings) {
                chandelierGrid = chandelierCluster(chandelierGrid, 22, 3, '>')
                chandelierGrid = chandelierCluster(chandelierGrid, 36, 3, '>')
            }
            if (hasTail) {
                chandelierGrid = chandelierCluster(chandelierGrid, 27, 7, '<')
                chandelierGrid = chandelierCluster(chandelierGrid, 31, 7, '>')
                chandelierGrid[6][30] = ':'
                chandelierGrid[7][30] = '^'
                for (i=8; i<12; i++) {
                    chandelierGrid[i][30] = '|'
                }
                chandelierGrid[12][30] = ';'
                chandelierGrid[13][30] = ':'
                chandelierGrid[14][30] = '^'
                chandelierGrid[15][30] = ';'
                chandelierGrid[16][30] = '0'
            }
        
            chandelierGrid[6][8] = '+'
            chandelierGrid[7][7] = '='
            chandelierGrid[7][8] = '='
            chandelierGrid[7][9] = '='
            for (let i=8; i<n; i+=2) {
                chandelierGrid[i][8] = '('
                if (i + 1 < n) {
                    chandelierGrid[i+1][9] = ')'
                }
            }
        
            let arrText='';
            for (let i = 0; i < chandelierGrid.length; i++) {
                for (let j = 0; j < chandelierGrid[i].length; j++) {
                    arrText+=chandelierGrid[i][j];
                }
                arrText += "<br/>";
            }
            return arrText;
        }
        
        function chandelierCluster(chandelierGrid, x, y, arrowPiece) {
            const chars = [arrowPiece, arrowPiece, arrowPiece, '|', '|', '|', ';', '|', ';', 'o', ';', 'o', '&nbsp;', 'o', '&nbsp;']
            let charIndex = 0;
            for (i=y; i<(y+5); i++) {
                for (j=x; j<(x+3); j++) {
                    chandelierGrid[i][j] = chars[charIndex]
                    charIndex++;
                }
            }
            return chandelierGrid
        }
    } else if (brassRows == 6){
        crystalWidth = 13;
        crystalPrefix = 2; //eyeballing this
    }

    chandelierGrid[0][7] = '<'
    chandelierGrid[0][8] = '^'
    chandelierGrid[0][9] = '>'
    chandelierGrid[1][7] = '^'
    chandelierGrid[1][8] = '^'
    chandelierGrid[1][9] = '^'
    chandelierGrid[2][6] = '<'
    chandelierGrid[2][7] = '^'
    chandelierGrid[2][8] = '^'
    chandelierGrid[2][9] = '^'
    chandelierGrid[2][10] = '>'
    chandelierGrid[3][5] = '<'
    chandelierGrid[3][6] = '^'
    chandelierGrid[3][7] = '^'
    chandelierGrid[3][8] = '^'
    chandelierGrid[3][9] = '^'
    chandelierGrid[3][10] = '^'
    chandelierGrid[3][11] = '>'

    let currRow = 4

    if (brassRows == 5 || brassRows == 6) {
        const brassString = '<^^^^^^^^^>'
        for(i=0; i<brassString.length; i++) {
            chandelierGrid[4][3 + i] = brassString[i]
        }
        currRow = 5
    }
    if (brassRows == 6) {
        const brassString = "<^^^^^^^^^^^^^>"
        for(i=0; i<brassString.length; i++) {
            chandelierGrid[5][1 + i] = brassString[i]
        }
        currRow = 6
    }

    for(let i=0; i<crystalRows; i++) {
        for (let j=0; j<crystalWidth; j++) {
            chandelierGrid[currRow][j + crystalPrefix] = '|'
        }
        currRow++
        for (let j=0; j<crystalWidth; j++) {
            chandelierGrid[currRow][j + crystalPrefix] = 'o'
        }
        currRow++
    }

    chandelierGrid[6][30] = '+'
    chandelierGrid[7][29] = '='
    chandelierGrid[7][30] = '='
    chandelierGrid[7][31] = '='
    for (let i=8; i<n; i+=2) {
        chandelierGrid[i][30] = '('
        if (i + 1 < n) {
            chandelierGrid[i+1][31] = ')'
        }
    }

    let arrText='';
    for (let i = 0; i < chandelierGrid.length; i++) {
        for (let j = 0; j < chandelierGrid[i].length; j++) {
            arrText+=chandelierGrid[i][j];
        }
        arrText += "<br/>";
    }
    return arrText;
}

export function printChandelierB() {
    const m = 40;
    const n = 17;
    let chandelierGrid = Array.from(Array(n), _ => Array(m).fill('&nbsp;'));

    var hasTail = true;
    // determine the variation
    var hasWings = Math.random() > 0.5 ? true : false;
    if (hasWings) {
     hasTail = Math.random() > 0.5 ? true : false; // it can only -not- have a tail if it has wings.
    }

    chandelierGrid[0][29] = '<'
    chandelierGrid[0][30] = '^'
    chandelierGrid[0][31] = '>'
    for (i=1; i<5; i++) {
        chandelierGrid[i][30] = '|'
    }
    chandelierGrid[5][30] = ';'

    chandelierCluster(chandelierGrid, 26, 1, '>')
    chandelierCluster(chandelierGrid, 32, 1, '>')

    if (hasWings) {
        chandelierGrid = chandelierCluster(chandelierGrid, 22, 3, '>')
        chandelierGrid = chandelierCluster(chandelierGrid, 36, 3, '>')
    }
    if (hasTail) {
        chandelierGrid = chandelierCluster(chandelierGrid, 27, 7, '<')
        chandelierGrid = chandelierCluster(chandelierGrid, 31, 7, '>')
        chandelierGrid[6][30] = ':'
        chandelierGrid[7][30] = '^'
        for (i=8; i<12; i++) {
            chandelierGrid[i][30] = '|'
        }
        chandelierGrid[12][30] = ';'
        chandelierGrid[13][30] = ':'
        chandelierGrid[14][30] = '^'
        chandelierGrid[15][30] = ';'
        chandelierGrid[16][30] = '0'
    }

    chandelierGrid[6][8] = '+'
    chandelierGrid[7][7] = '='
    chandelierGrid[7][8] = '='
    chandelierGrid[7][9] = '='
    for (let i=8; i<n; i+=2) {
        chandelierGrid[i][8] = '('
        if (i + 1 < n) {
            chandelierGrid[i+1][9] = ')'
        }
    }

    let arrText='';
    for (let i = 0; i < chandelierGrid.length; i++) {
        for (let j = 0; j < chandelierGrid[i].length; j++) {
            arrText+=chandelierGrid[i][j];
        }
        arrText += "<br/>";
    }
    return arrText;
}

