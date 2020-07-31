//Function for the animation of the  falling
module.exports = function (board, column, turn) {

    let color = ['', 'red', 'yellow'][turn]

    function sleep(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    const array = board[column].content.reverse()

    let circle = document.getElementById(array[0].tag);

    circle.classList.add(color);

    let stop = false

    array.forEach(async ({ value }, counter, array) => {
        await sleep(counter * 50)

        if (value !== 0 || array[counter + 1] === undefined) return stop = true
        else if (array[counter + 1].value === 0 && stop === false) {
            circle.classList.remove(color)

            circle = document.getElementById(array[counter+1].tag)

            circle.classList.add(color)
        }
        else if (array[counter + 1].value !== 0 && stop === false) {
            circle.classList.remove(color)

            circle = document.getElementById(array[counter+1].tag)

            circle.classList.add(color)
        }

    })
};
