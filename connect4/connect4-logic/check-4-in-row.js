//Given an array, check if there's 4enralla an
module.exports = function (array) {
    for (var i = 0; i < (array.length - 3); i++) {
        if (array[i].value !== 0 &&
            (array[i].value === array[i + 1].value) &&
            (array[i + 1].value === array[i + 2].value) &&
            (array[i + 2].value === array[i + 3].value)) {

            return {end: true, n: i}
        };
    };
    return {end: false, n: i}
};