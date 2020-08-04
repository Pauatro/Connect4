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
