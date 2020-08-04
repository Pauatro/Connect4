module.exports = {
    addPiece: require("./add-piece-to-board.js"),
    changeTurn: require("./change-turn.js"),
    animations: require("./animations")    ,
    debounce: require('./helpers/debounce.js'),
    check4InRow: require('./check-4-in-row.js'),
    checkResult: require('./check-result.js'),
    generateBoardByRows: require('./generate-board-by-rows.js'),
    generateBoardDiagonalsTopBot: require('./generate-board-by-diagonals-top-bot.js'),
    generateBoardDiagonalsBotTop: require('./generate-board-by-diagonals-bot-top.js'),
}