function getAverage(array: number[]): number{
    let average: number = 0;
    array.forEach((value) => {
        average += value;
    });
    return average/array.length;
}

function getAmountOfPositive(array: number[]): number{
    let counter: number =0;
    array.forEach((value) => {
        if(value > 0) counter++;
    });
    return counter;
}

function sortList(array: number[]): number[]{
    return array.sort();
}


