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