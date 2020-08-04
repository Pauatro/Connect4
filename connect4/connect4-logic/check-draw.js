//Checks for draws

module.exports = function (boardByColumns){
    var drawScore = 0
    for (column of boardByColumns){
        if (column.full === true){
            drawScore += 1
        }
    }
    if (drawScore === 7){
        return true;
    }
}