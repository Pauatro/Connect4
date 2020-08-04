//Checks for draws

module.exports = function (draw){
    var drawScore = 0
    for (column of boardByColumns){
        if (column.full === true){
            drawScore += 1
        }
    }
    if (drawScore === 7){
        return draw = true;
    }
}