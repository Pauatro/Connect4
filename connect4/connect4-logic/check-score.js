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