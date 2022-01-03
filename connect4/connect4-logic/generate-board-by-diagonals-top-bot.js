//Generates an array that represents the board diagonal by diagonal (only de diagonals with 4 or more slots,
// which can actualy have relevant patterns)
module.exports = function (boardByColumns){

    var diagonalsTopBot = []

    for(var i=0; i<3; i++){
        diagonal = {content: []};
        for (var j=0; j<(i+4); j++){
            diagonal.content.push(
                boardByColumns[j].content[i+3-j]
            );
        }
        diagonalsTopBot.push(diagonal);
    }

    for(var i=0; i<3; i++){
        diagonal = {content: []};
        for (var j=0; j<(6-i); j++){
            diagonal.content.push(
                boardByColumns[i+j+1].content[5-j]
            );
        }
        diagonalsTopBot.push(diagonal);
    }
    return diagonalsTopBot;
};