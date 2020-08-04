module.exports = function (boardByColumns){
    var diagonalsBotTop = []

    for(var i=0; i<3; i++){
        diagonal = {diagonal: i+1, content: []};
        for (var j=0; j<(i+4); j++){
            diagonal.content.push(
                boardByColumns[j].content[2-i+j]
            );
        }
        diagonalsBotTop.push(diagonal);
    }

    for(var i=0; i<3; i++){
        diagonal = {diagonal: i+4, content: []};
        for (var j=0; j<(6-i); j++){
            diagonal.content.push(
                boardByColumns[i+j+1].content[j]
            );
        }
        diagonalsBotTop.push(diagonal);
    }
    return diagonalsBotTop;
};
