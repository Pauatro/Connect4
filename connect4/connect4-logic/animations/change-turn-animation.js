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


// function changeTurn(){
//     const docTurn = document.getElementById('turn');

//     docTurn.classList.remove(`player${turn}`);

//     if (turn === 1){
//         turn = 2; 
//     } else if (turn === 2){
//         turn = 1;
//     }
//     docTurn.textContent = `Player ${turn}`;

//     docTurn.classList.add(`player${turn}`);
// }