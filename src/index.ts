
import * as lineReader from 'line-reader';

function getAverage(array: number[]): number{
    let average: number = 0;
    array.forEach((value) => {
        average += value;
    });
    return average/array.length;
}

function getAmountOfPositive(array: number[]): number{
    let counter: number = 0;
    array.forEach((value) => {
        if(value > 0) counter++;
    });
    return counter;
}

function sortList(array: number[]): number[]{
    return array.sort();
}

const exchange = (): void =>{
    
    const currencyType = String(prompt("Enter Currency: "))
    const amount : number = Number(prompt("Enter amount of money: "));
    console.log(amount);

}

const findCurrency = (currencyType: string, amount: number): void => {
    lineReader.eachLine('coinCurrency.txt', (line: string)=>{
        if(line.includes(currencyType)){
            const exchanged: number = (1/Number(line.split(",")[1])) * amount ;
            console.log(exchanged)
            return false;
        }
    });
}


console.log(findCurrency("Euro", 200));
