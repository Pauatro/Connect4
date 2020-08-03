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