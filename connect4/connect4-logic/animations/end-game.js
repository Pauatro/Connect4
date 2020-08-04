module.exports = function(end, draw, turn, array, n){
    if (end === true){
        const endsentence = document.getElementById('endsentence');
        endsentence.textContent = `The Winner is Player ${turn}!`
        const ending = document.getElementById('end');
        ending.classList.remove('hidden');
        for (var j=0; j<4; j++){
            var winspot = document.getElementById(array[n+j].tag);
            winspot.classList.add('winspot');
        }
    }
    else if (draw === true){
        const endsentence = document.getElementById('endsentence');
        endsentence.textContent = `The Game Ended in a Draw!`
        const ending = document.getElementById('end');
        ending.classList.remove('hidden');
    }
}