"use strict";
function getAverage(array) {
    let average = 0;
    array.forEach((value) => {
        average += value;
    });
    return average / array.length;
}
function getAmountOfPositive(array) {
    let counter = 0;
    array.forEach((value) => {
        if (value > 0)
            counter++;
    });
    return counter;
}
function sortList(array) {
    return array.sort();
}
console.log(sortList([10, 20, 15]));
