module.exports = function (scores, boardByColumns){
    scores = scores.sort(function(a, b){
        return b.score - a.score;
    })
    // console.log(scores);
    for (var i = 0; i<scores.length; i++){
        if (boardByColumns[scores[i].column].full === false){
            return scores[i].column;
        };
    };
};