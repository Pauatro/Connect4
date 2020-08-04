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