//Function for the animation of the  falling piece 
module.exports = async function (board, column, turn) {

    const color = ['', 'red', 'yellow'][turn]

    function sleep(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    const array = board[column].content
    const positionArray = [5, 4, 3, 2, 1, 0]

    let circle = document.getElementById(array[5].tag);

    circle.classList.add(color);

    let stop = false

    await array.forEach(async (notUsed, counter, array) => {
        await sleep(counter * 50)

        const { value } = array[positionArray[counter]]

        const nextElement = array[positionArray[counter+ 1]]

        if (value !== 0 || nextElement === undefined) return stop = true

        const { value: nextValue } = nextElement

        if (nextValue === 0 && stop === false) {
            circle.classList.remove(color)

            circle = document.getElementById(nextElement.tag)

            circle.classList.add(color)
        } else if (nextValue !== 0 && stop === false) {
            circle.classList.remove(color)

            circle = document.getElementById(nextElement.tag)

            circle.classList.add(color)
        }
    })
}
