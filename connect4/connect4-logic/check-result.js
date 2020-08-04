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