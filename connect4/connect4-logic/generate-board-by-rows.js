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