//Adds a piece to the board

module.exports = function (board, column, turn){

    let done = false

    board[column].full === false && board[column].content.forEach(({value, coordinates})=>{
        if(value === 0 && done === false){
            done = true

            value = turn

            if (coordinates[1] === 5) board[column].full = true
        }
    })
}


// function addPiece(board, column){

//     if (board[column].full === false){

//         for (var i=0; i<6; i++){

//             if (board[column].content[i].value === 0){
//                 if (turn1 === true){
//                     board[column].content[i].value = 1;     
//                 }
//                 else if(turn1 === false){
//                     board[column].content[i].value = 2;
//                 };

//                 if (i === 5){
//                     board[column].full = true;
//                 }
//                 return
//             }
//         }
//     }
// };