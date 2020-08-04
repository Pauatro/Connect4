(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//An array that represents the board column by column
module.exports = [
    {
        "column": "a",
        "full": false,
        "content": [
            {
                "tag": "a1",
                "coordinates": [
                    0,
                    0
                ],
                "value": 0
            },
            {
                "tag": "a2",
                "coordinates": [
                    0,
                    1
                ],
                "value": 0
            },
            {
                "tag": "a3",
                "coordinates": [
                    0,
                    2
                ],
                "value": 0
            },
            {
                "tag": "a4",
                "coordinates": [
                    0,
                    3
                ],
                "value": 0
            },
            {
                "tag": "a5",
                "coordinates": [
                    0,
                    4
                ],
                "value": 0
            },
            {
                "tag": "a6",
                "coordinates": [
                    0,
                    5
                ],
                "value": 0
            }
        ]
    },
    {
        "column": "b",
        "full": false,
        "content": [
            {
                "tag": "b1",
                "coordinates": [
                    1,
                    0
                ],
                "value": 0
            },
            {
                "tag": "b2",
                "coordinates": [
                    1,
                    1
                ],
                "value": 0
            },
            {
                "tag": "b3",
                "coordinates": [
                    1,
                    2
                ],
                "value": 0
            },
            {
                "tag": "b4",
                "coordinates": [
                    1,
                    3
                ],
                "value": 0
            },
            {
                "tag": "b5",
                "coordinates": [
                    1,
                    4
                ],
                "value": 0
            },
            {
                "tag": "b6",
                "coordinates": [
                    1,
                    5
                ],
                "value": 0
            }
        ]
    },
    {
        "column": "c",
        "full": false,
        "content": [
            {
                "tag": "c1",
                "coordinates": [
                    2,
                    0
                ],
                "value": 0
            },
            {
                "tag": "c2",
                "coordinates": [
                    2,
                    1
                ],
                "value": 0
            },
            {
                "tag": "c3",
                "coordinates": [
                    2,
                    2
                ],
                "value": 0
            },
            {
                "tag": "c4",
                "coordinates": [
                    2,
                    3
                ],
                "value": 0
            },
            {
                "tag": "c5",
                "coordinates": [
                    2,
                    4
                ],
                "value": 0
            },
            {
                "tag": "c6",
                "coordinates": [
                    2,
                    5
                ],
                "value": 0
            }
        ]
    },
    {
        "column": "d",
        "full": false,
        "content": [
            {
                "tag": "d1",
                "coordinates": [
                    3,
                    0
                ],
                "value": 0
            },
            {
                "tag": "d2",
                "coordinates": [
                    3,
                    1
                ],
                "value": 0
            },
            {
                "tag": "d3",
                "coordinates": [
                    3,
                    2
                ],
                "value": 0
            },
            {
                "tag": "d4",
                "coordinates": [
                    3,
                    3
                ],
                "value": 0
            },
            {
                "tag": "d5",
                "coordinates": [
                    3,
                    4
                ],
                "value": 0
            },
            {
                "tag": "d6",
                "coordinates": [
                    3,
                    5
                ],
                "value": 0
            }
        ]
    },
    {
        "column": "e",
        "full": false,
        "content": [
            {
                "tag": "e1",
                "coordinates": [
                    4,
                    0
                ],
                "value": 0
            },
            {
                "tag": "e2",
                "coordinates": [
                    4,
                    1
                ],
                "value": 0
            },
            {
                "tag": "e3",
                "coordinates": [
                    4,
                    2
                ],
                "value": 0
            },
            {
                "tag": "e4",
                "coordinates": [
                    4,
                    3
                ],
                "value": 0
            },
            {
                "tag": "e5",
                "coordinates": [
                    4,
                    4
                ],
                "value": 0
            },
            {
                "tag": "e6",
                "coordinates": [
                    4,
                    5
                ],
                "value": 0
            }
        ]
    },
    {
        "column": "f",
        "full": false,
        "content": [
            {
                "tag": "f1",
                "coordinates": [
                    5,
                    0
                ],
                "value": 0
            },
            {
                "tag": "f2",
                "coordinates": [
                    5,
                    1
                ],
                "value": 0
            },
            {
                "tag": "f3",
                "coordinates": [
                    5,
                    2
                ],
                "value": 0
            },
            {
                "tag": "f4",
                "coordinates": [
                    5,
                    3
                ],
                "value": 0
            },
            {
                "tag": "f5",
                "coordinates": [
                    5,
                    4
                ],
                "value": 0
            },
            {
                "tag": "f6",
                "coordinates": [
                    5,
                    5
                ],
                "value": 0
            }
        ]
    },
    {
        "column": "g",
        "full": false,
        "content": [
            {
                "tag": "g1",
                "coordinates": [
                    6,
                    0
                ],
                "value": 0
            },
            {
                "tag": "g2",
                "coordinates": [
                    6,
                    1
                ],
                "value": 0
            },
            {
                "tag": "g3",
                "coordinates": [
                    6,
                    2
                ],
                "value": 0
            },
            {
                "tag": "g4",
                "coordinates": [
                    6,
                    3
                ],
                "value": 0
            },
            {
                "tag": "g5",
                "coordinates": [
                    6,
                    4
                ],
                "value": 0
            },
            {
                "tag": "g6",
                "coordinates": [
                    6,
                    5
                ],
                "value": 0
            }
        ]
    }
]
},{}],2:[function(require,module,exports){
//Adds a piece to the board

module.exports = function (board, column, turn){

    let done = false

    board[column].full === false && board[column].content.forEach(({value, coordinates}, i, array)=>{
        if(value === 0 && done === false){
            done = true

            board[column].content[i].value = turn

            if (coordinates[1] === 5) board[column].full = true
        }
    })
}
},{}],3:[function(require,module,exports){
//Cambia de turno: cambia la variable turn y lo representa en el tablero

const changeTurn = require('../change-turn.js')

module.exports = function (turn){
    const docTurn = document.getElementById('turn');

    docTurn.classList.remove(`player${turn}`);

    turn = changeTurn(turn)

    docTurn.textContent = `Player ${turn}`;
    
    docTurn.classList.add(`player${turn}`);

    return turn
}
},{"../change-turn.js":8}],4:[function(require,module,exports){
module.exports = function(end, draw, turn, array, n){
    if (end === true){
        const endsentence = document.getElementById('endsentence');
        endsentence.textContent = `The Winner is Player ${turn}!`
        const ending = document.getElementById('end');
        ending.classList.remove('hidden');
        for (var j=0; j<4; j++){
            var winspot = document.getElementById(array[n+j].tag);
            winspot.classList.add('winspot');
        }
    }
    else if (draw === true){
        const endsentence = document.getElementById('endsentence');
        endsentence.textContent = `The Game Ended in a Draw!`
        const ending = document.getElementById('end');
        ending.classList.remove('hidden');
    }
}
},{}],5:[function(require,module,exports){
module.exports = {
    pieceAnimation: require('./piece-animation.js'),
    changeTurnAnimation: require('./change-turn-animation.js'),
    endGame: require('./end-game.js')
}
},{"./change-turn-animation.js":3,"./end-game.js":4,"./piece-animation.js":6}],6:[function(require,module,exports){
//Function for the animation of the  falling piece 
module.exports = async function (board, column, turn) {

    const color = ['', 'red', 'yellow'][turn]

    function sleep(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    const array = board[column].content
    const positionArray = [5, 4, 3, 2, 1, 0]

    let circle = document.getElementById(array[5].tag);

    circle.classList.add(color);

    let stop = false

    await array.forEach(async (notUsed, counter, array) => {
        await sleep(counter * 50)

        const { value } = array[positionArray[counter]]

        const nextElement = array[positionArray[counter+ 1]]

        if (value !== 0 || nextElement === undefined) return stop = true

        const { value: nextValue } = nextElement

        if (nextValue === 0 && stop === false) {
            circle.classList.remove(color)

            circle = document.getElementById(nextElement.tag)

            circle.classList.add(color)
        } else if (nextValue !== 0 && stop === false) {
            circle.classList.remove(color)

            circle = document.getElementById(nextElement.tag)

            circle.classList.add(color)
        }
    })
}

},{}],7:[function(require,module,exports){
const generateBoardByRows = require('./generate-board-by-rows.js')
const generateBoardByDiagonalsTopBot = require('./generate-board-by-diagonals-top-bot.js')
const generateBoardByDiagonalsBotTop = require('./generate-board-by-diagonals-bot-top.js')
const addPiece = require('./add-piece-to-board.js')
const checkScore = require('./check-score.js')
const pickBestScore = require('./pick-best-score.js')
const pieceAnimation = require('./animations/piece-animation.js')
const checkResult = require('./check-result.js')
const changeTurnAnimation = require('./animations/change-turn-animation.js')


module.exports = function (boardByColumns){
    setTimeout(
        () =>{
            const scores = [0, 1, 2, 3, 2, 1, 0];

            for (var i=0; i<scores.length; i++){        
                const simulatedBoard = JSON.parse(JSON.stringify(boardByColumns))

                addPiece(simulatedBoard, i, turn);

                const boardByRows = generateBoardByRows(simulatedBoard);
                const diagonalsTopBot = generateBoardByDiagonalsTopBot(simulatedBoard);
                const diagonalsBotTop = generateBoardByDiagonalsBotTop(simulatedBoard);

                scores[i] = checkScore(simulatedBoard, scores[i]);
                scores[i] = checkScore(boardByRows, scores[i]);
                scores[i] = checkScore(diagonalsTopBot, scores[i]);
                scores[i] = checkScore(diagonalsBotTop, scores[i]);

            };

            const scoreObjects = scores.map((score, i)=>({column: i, score}))

            const bestColumn = pickBestScore(scoreObjects, boardByColumns)
            addPiece(boardByColumns, bestColumn, turn);
            pieceAnimation(boardByColumns, bestColumn, turn);
            checkResult(boardByColumns, turn);
            turn = changeTurnAnimation(turn);
        }, 500
    )
}

},{"./add-piece-to-board.js":2,"./animations/change-turn-animation.js":3,"./animations/piece-animation.js":6,"./check-result.js":11,"./check-score.js":12,"./generate-board-by-diagonals-bot-top.js":14,"./generate-board-by-diagonals-top-bot.js":15,"./generate-board-by-rows.js":16,"./pick-best-score.js":19}],8:[function(require,module,exports){
module.exports = function (turn){
    if (turn === 1) return turn = 2
    else if (turn === 2) return turn = 1
}
},{}],9:[function(require,module,exports){
//Given an array, check if there's 4enralla an
module.exports = function (array) {
    for (var i = 0; i < (array.length - 3); i++) {
        if (array[i].value !== 0 &&
            (array[i].value === array[i + 1].value) &&
            (array[i + 1].value === array[i + 2].value) &&
            (array[i + 2].value === array[i + 3].value)) {

            return {end: true, n: i}
        };
    };
    return {end: false, n: i}
};
},{}],10:[function(require,module,exports){
//Checks for draws

module.exports = function (boardByColumns){
    var drawScore = 0
    for (column of boardByColumns){
        if (column.full === true){
            drawScore += 1
        }
    }
    if (drawScore === 7){
        return true;
    }
}
},{}],11:[function(require,module,exports){
//Checks4inARow in all possible positions
const generateBoardByRows = require('./generate-board-by-rows.js')
const generateBoardByDiagonalsTopBot = require('./generate-board-by-diagonals-top-bot.js')
const generateBoardByDiagonalsBotTop = require('./generate-board-by-diagonals-bot-top.js')
const check4InRow = require('./check-4-in-row.js')
const endGame = require('./animations/end-game.js')
const checkDraw = require('./check-draw.js')

module.exports = function (boardByColumns, turn){

    const boardInAllDirections = [
        boardByColumns, 
        generateBoardByRows(boardByColumns), 
        generateBoardByDiagonalsTopBot(boardByColumns), 
        generateBoardByDiagonalsBotTop(boardByColumns)
    ]

    boardInAllDirections.forEach(board=>board.forEach(({content})=>{
        const {end, n} = check4InRow(content)

        endGame(end, undefined, turn, content, n);
    }))

    const draw = checkDraw(boardByColumns);

    endGame(end, draw, turn);
}
},{"./animations/end-game.js":4,"./check-4-in-row.js":9,"./check-draw.js":10,"./generate-board-by-diagonals-bot-top.js":14,"./generate-board-by-diagonals-top-bot.js":15,"./generate-board-by-rows.js":16}],12:[function(require,module,exports){
//hace check de todos los patrones en la simulación de tablero y aplica los cambios de score
const checkUnderCoordinates = require('./check-under-coordinates.js')

module.exports = function (simulatedBoard, score){
    for (var i=0; i<simulatedBoard.length; i++){
        const array = simulatedBoard[i].content

        //Scores related to 4 in row
        for (var j=0; j<(array.length-3); j++) {
            stringToCheck = array[j].value.toString() + array[j+1].value.toString() + array[j+2].value.toString() + array[j+3].value.toString()
            //Si es una jugada ganadora, se le añande 100 al score
            if ( stringToCheck === '2222'){
                score += 100;                
            }
            //Si cortamos el 4 en raya del oponente, añadimos 50 al score
            else if ( stringToCheck === '2111' || stringToCheck === '1211'|| stringToCheck === '1121'|| stringToCheck === '1112'){
                score += 25;                
            };
        };

        //Scores related to 5 piece patterns (almost a win)
        for (var j=0; j<(array.length-4); j++) {
            stringToCheck = array[j].value.toString() + array[j+1].value.toString() + array[j+2].value.toString() + array[j+3].value.toString() + array[j+4].value.toString()
            //Si generamos una posición de victoria, añadimos 10
            
            if (stringToCheck === '02220'){
                score += 10;
            }
            //Si evitamos esta misma posición del oponente, añadimos 5
            if (stringToCheck === '02110' || stringToCheck === '01210' || stringToCheck === '01120'){
                score += 5;
            }
        };

        //Additional patterns of 4 pieces
        for (var j=0; j<(array.length-3); j++) {

            arrayInfo = [array[j], array[j+1], array[j+2], array[j+3]];
            stringToCheck = array[j].value.toString() + array[j+1].value.toString() + array[j+2].value.toString() + array[j+3].value.toString()

            //Si generamos una de las posiciones 'trampa', añadimos 3
            if (stringToCheck === '2220'){            
                var coordinates = arrayInfo[3].coordinates;

                score = checkUnderCoordinates(coordinates, score, 0, 3, simulatedBoard)
            }
            else if (stringToCheck === '2202'){
                var coordinates = arrayInfo[2].coordinates;

                score = checkUnderCoordinates(coordinates, score, 0, 3, simulatedBoard)
            }
            else if (stringToCheck === '2022'){
                var coordinates = arrayInfo[1].coordinates;

                score = checkUnderCoordinates(coordinates, score, 0, 3, simulatedBoard)
            }
            else if (stringToCheck === '0222'){
                var coordinates = arrayInfo[0].coordinates;

                score = checkUnderCoordinates(coordinates, score, 0, 3, simulatedBoard)
            }

            //Si le estamos regalando un 4 en raya al oponente, restamos 50 puntos

            if (stringToCheck === '1110'){
                var coordinates = arrayInfo[3].coordinates

                score = checkUnderCoordinates(coordinates, score, 2, -50, simulatedBoard)
            }
            else if (stringToCheck === '1101'){
                var coordinates = arrayInfo[2].coordinates;

                score = checkUnderCoordinates(coordinates, score, 2, -50, simulatedBoard)
            }
            else if (stringToCheck === '1011'){
                var coordinates = arrayInfo[1].coordinates;

                score = checkUnderCoordinates(coordinates, score, 2, -50, simulatedBoard)
            }
            else if (stringToCheck === '0111'){
                var coordinates = arrayInfo[0].coordinates;

                score = checkUnderCoordinates(coordinates, score, 2, -50, simulatedBoard)
            }

            //Si damos a nuestro oponente una oportunidad de cortar nestro 4 en raya, restamos 8
            if (stringToCheck === '2220'){
                //A menos que el patrón sea en vertical, en tal caso nos saltaría siempre el -8. chequeamos que no exista array.column,
                //lo cuál solo pasa si no estamos analizando una columna.
                if (!array.column){
                    coordinates = arrayInfo[3].coordinates;

                    score = checkUnderCoordinates(coordinates, score, 2, -8, simulatedBoard);
                }
            }
            else if (stringToCheck === '2202'){
                var coordinates = arrayInfo[2].coordinates;

                score = checkUnderCoordinates(coordinates, score, 2, -8, simulatedBoard)
            }
            else if (stringToCheck === '2022'){
                var coordinates = arrayInfo[1].coordinates;

                score = checkUnderCoordinates(coordinates, score, 2, -8, simulatedBoard)
            }
            else if (stringToCheck === '0222'){
                var coordinates = arrayInfo[0].coordinates;

                score = checkUnderCoordinates(coordinates, score, 2, -8, simulatedBoard)
            }
            
        };
    };
    return score;
};
},{"./check-under-coordinates.js":13}],13:[function(require,module,exports){
//Pequeña función que chequea el espacio debajo de un espacio específico, donde coordinates es el espacio específico,
//score es el score en ese momento, number1 es el value que queremos encontrar en la posición de debajo del espacio específico,
//y number2 es cómo afecta encontrar esta posición al score.

module.exports = function (coordinates, score, number1, number2, simulatedBoard){
    if(coordinates[1]>0){
        var under0 = simulatedBoard[coordinates[0]].content[coordinates[1]-1].value;

        if (under0 === number1){
            score += number2;
        }
    }
    return score;
};
},{}],14:[function(require,module,exports){
module.exports = function (boardByColumns){
    var diagonalsBotTop = []

    for(var i=0; i<3; i++){
        diagonal = {diagonal: i+1, content: []};
        for (var j=0; j<(i+4); j++){
            diagonal.content.push(
                boardByColumns[j].content[2-i+j]
            );
        }
        diagonalsBotTop.push(diagonal);
    }

    for(var i=0; i<3; i++){
        diagonal = {diagonal: i+4, content: []};
        for (var j=0; j<(6-i); j++){
            diagonal.content.push(
                boardByColumns[i+j+1].content[j]
            );
        }
        diagonalsBotTop.push(diagonal);
    }
    return diagonalsBotTop;
};

},{}],15:[function(require,module,exports){
//Generates an array that represents the board diagonal by diagonal (only de diagonals with 4 or more slots,
// which can actualy have relevant patterns)
module.exports = function (boardByColumns){

    var diagonalsTopBot = []

    for(var i=0; i<3; i++){
        diagonal = {content: []};
        for (var j=0; j<(i+4); j++){
            diagonal.content.push(
                boardByColumns[j].content[i+3-j]
            );
        }
        diagonalsTopBot.push(diagonal);
    }

    for(var i=0; i<3; i++){
        diagonal = {content: []};
        for (var j=0; j<(6-i); j++){
            diagonal.content.push(
                boardByColumns[i+j+1].content[5-j]
            );
        }
        diagonalsTopBot.push(diagonal);
    }
    return diagonalsTopBot;
};
},{}],16:[function(require,module,exports){
//Generates an array that represents the board row by row
module.exports = function (boardByColumns){
    var boardByRows = []
    for (var i=0; i<6;i++){
        row = {content: []};
        for (var j=0; j<7; j++){
            row.content.push(
                boardByColumns[j].content[5-i]
            )
        }
        boardByRows.push(row);
    }
    return boardByRows;
}
},{}],17:[function(require,module,exports){
module.exports = function (func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
},{}],18:[function(require,module,exports){
module.exports = {
    addPiece: require("./add-piece-to-board.js"),
    changeTurn: require("./change-turn.js"),
    animations: require("./animations"),
    debounce: require('./helpers/debounce.js'),
    check4InRow: require('./check-4-in-row.js'),
    checkResult: require('./check-result.js'),
    generateBoardByRows: require('./generate-board-by-rows.js'),
    generateBoardDiagonalsTopBot: require('./generate-board-by-diagonals-top-bot.js'),
    generateBoardDiagonalsBotTop: require('./generate-board-by-diagonals-bot-top.js'),
    checkScore: require('./check-score.js'),
    botTurn: require('./bot-turn.js')
}
},{"./add-piece-to-board.js":2,"./animations":5,"./bot-turn.js":7,"./change-turn.js":8,"./check-4-in-row.js":9,"./check-result.js":11,"./check-score.js":12,"./generate-board-by-diagonals-bot-top.js":14,"./generate-board-by-diagonals-top-bot.js":15,"./generate-board-by-rows.js":16,"./helpers/debounce.js":17}],19:[function(require,module,exports){
module.exports = function (scores, boardByColumns){
    scores = scores.sort(function(a, b){
        return b.score - a.score;
    })
    // console.log(scores);
    for (var i = 0; i<scores.length; i++){
        if (boardByColumns[scores[i].column].full === false){
            return scores[i].column;
        };
    };
};
},{}],20:[function(require,module,exports){
const { addPiece, debounce, checkResult, checkScore, botTurn, animations: { pieceAnimation, changeTurnAnimation } } = require("./connect4-logic")

const boardByColumns = require('./connect4-data/board.js')

//El juego empieza en turno 1 (Jugador 1), y alterna entre 1 y 2
turn = 1;

//El juego tiene el bot desactivado por default
bot = false;

const columns = Array.from(document.querySelectorAll('.column'));

for (i in columns){
    columns[i].addEventListener('mouseenter', (e)=>{
        e.target.classList.add('mouseoncolumn')
    })

    columns[i].addEventListener('mouseleave', (e)=>{
        e.target.classList.remove('mouseoncolumn')
    })

    const column = i

    const clickFunction = function (){
        if (boardByColumns[column].full) return

        addPiece(boardByColumns, column, turn);

        pieceAnimation(boardByColumns, column, turn);

        checkResult(boardByColumns, turn);

        turn = changeTurnAnimation(turn)

        bot === true && botTurn(boardByColumns)
    }

    columns[i].addEventListener('click', clickFunction)
}

const buttonPlayAgain = document.getElementById('Play');

buttonPlayAgain.addEventListener('click',
    ()=>{
        //Resetboard
        for (var i=0; i<boardByColumns.length; i++){
            boardByColumns[i].full = false;
            for(var j=0; j<boardByColumns[i].content.length; j++){
                boardByColumns[i].content[j].value = 0;
                document.getElementById(boardByColumns[i].content[j].tag).classList.remove('red');
                document.getElementById(boardByColumns[i].content[j].tag).classList.remove('yellow');
                document.getElementById(boardByColumns[i].content[j].tag).classList.remove('winspot');
            }
            
        }
        //Hide end and show start
        const ending = document.getElementById('end');
        ending.classList.add('hidden');
        const startMenu = document.getElementById('choice');
        startMenu.classList.remove('hidden');
        //Reset turns
        turn = 1;
        //Reset bot
        bot = false;  
    }
)

const buttonPVP = document.getElementById('PvP');

buttonPVP.addEventListener('click', 
    ()=>{
        const startMenu = document.getElementById('choice');
        startMenu.classList.add('hidden');
    }
);

const buttonPVB = document.getElementById('PvB');

buttonPVB.addEventListener('click', 
    ()=>{
        //Escondemos el menú de inicio
        const startMenu = document.getElementById('choice');
        startMenu.classList.add('hidden');
        //Activamos el bot
        bot = true;
    }
);
},{"./connect4-data/board.js":1,"./connect4-logic":18}]},{},[20]);
