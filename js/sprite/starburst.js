


// helper function to get a random int within a certain range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function printStarburst(width = 20, height = 20) {
    let availChars = "#*."
    const centChar = "#"
    // var centChar = availChars[Math.floor(Math.random() * availChars.length)]     //uncomment to make central character random

    // dimensions of 2d array. uncomment following lines to make dimensions random within given range
    const m = width
    const n = height
    // m = getRandomInt(min, max);
    // n = getRandomInt(min, max);

    var starGrid = Array.from(Array(n), _ => Array(m).fill('&nbsp;'));

    // x and y values of center rectangle within starburst 2d array
    const xmid_min = Math.floor(m / 4);
    const xmid_max = Math.floor((m * 3) / 4);
    const ymid_min = Math.floor(n / 4);
    const ymid_max = Math.floor((n * 3) / 4);

    // central coordinates
    const cent_x = Math.floor(m / 2);
    const cent_y = Math.floor(n / 2);

    const chosenDirection = Math.round(Math.random())
    // available directions for "arms" of central character in starburst
    const allDirections = [[[[0,1], [-1,1]], [[1,0],[1,1]], [[0,-1],[1,-1]], [[-1,0],[-1,-1]], [[0,1], [0,1]], [[0,-1], [0,-1]], [[1,0], [1,0]], [[-1,0], [-1,0]]],
                        [[[0,1], [1,1]], [[1,0], [1,-1]], [[0,-1], [-1,-1]], [[-1,0], [-1,1]], [[0,1], [0,1]], [[0,-1], [0,-1]], [[1,0], [1,0]], [[-1,0], [-1,0]]]];
    let directions = allDirections[chosenDirection]
    let pert = [[[0,1], [0,1]], [[0,-1], [0,-1]], [[1,0], [1,0]], [[-1,0], [-1,0]]]
    pert = pert[Math.floor(Math.random() * 3)]

    directions.push(pert)

    for (var i = directions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = directions[i];
        directions[i] = directions[j];
        directions[j] = temp;
    }

    let clockTips = [{'[0,1]': [-1,1], '[1,0]': [1,1], '[0,-1]': [1,-1], '[-1,0]': [-1,-1]}, 
                    {'[0,1]': [1,1], '[1,0]': [1,-1], '[0,-1]': [-1,-1], '[-1,0]': [-1,1]}]

    const clockDirection = clockTips[chosenDirection]

    // iterate through directions and produce arms
    for (let s = 0; s < directions.length - 2; s++) {
        const lineLen = getRandomInt(2, Math.min(xmid_max - xmid_min, ymid_max - ymid_min) / 3);
        let currLen = 0;
        let x = cent_x;
        let y = cent_y

        // for each direction, create each arm
        while (y < starGrid.length && y > 0 && x < starGrid[0].length && x > 0) {
            starGrid[y][x] = centChar;

            // continue extending arm until reach max arm limit
            if (currLen < lineLen) {
                x += directions[s % directions.length][getRandomInt(0, 1)][0];
                y += directions[s % directions.length][getRandomInt(0, 1)][1];
            }

            // add curvature to arm at the end (not necessary and can comment out)
            else if (Math.round(Math.random()) == 1) {
                let endDirection = clockDirection[JSON.stringify(directions[s % directions.length][0])]
                // console.log(directions[s % directions.length][0])
                // console.log(JSON.stringify(directions[s % directions.length][0]))
                // console.log(clockDirection, JSON.stringify(directions[s % directions.length][0]))
                // console.log(clockDirection['[1,0]'])
                x += endDirection[0];
                y += endDirection[1];
                starGrid[y][x] = centChar;
                break;
            }

            // break if crossing another arm
            currLen++
            if (starGrid[y][x] === centChar) {
                break;
            }
        }
    }

    createSpreadChar(starGrid, "*", centChar, xmid_min, xmid_max, ymid_min, ymid_max, 4);
    createSpreadChar(starGrid, ".", centChar, xmid_min, xmid_max, ymid_min, ymid_max, 10);
    createSpreadChar(starGrid, "*", centChar, 0, m - 1, 0, n - 1, 3);
    createSpreadChar(starGrid, ".", centChar, 0, m - 1, 0, n - 1, 7);

    // convert 2d array into string
    let arrText='';
    for (let i = 0; i < starGrid.length; i++) {
        for (let j = 0; j < starGrid[i].length; j++) {
            arrText+=starGrid[i][j] + ' ';
        }
        arrText += "<br/>";
    }
    return arrText;
    // return stringStarBust(starGrid)
}


// helper function to randomly scatter emanating in grid
// pass in the grid, character to scatter, central character, x and y range, and max number of characters to scatter
function createSpreadChar(grid, char, centChar, x_min, x_max, y_min, y_max, max_spots) {
    let occupiedSpots = 0;

    while(occupiedSpots < max_spots) {
        const x_ran = getRandomInt(x_min, x_max);
        const y_ran = getRandomInt(y_min, y_max);
        if(grid[y_ran][x_ran] !== centChar && grid[y_ran][x_ran] !== char){
            grid[y_ran][x_ran] = char;
            occupiedSpots++;
        }
    }
}

