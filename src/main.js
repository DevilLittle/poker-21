let _ = require('lodash');

function getFormattedInput(input) {
    return input.split('-');
}
function getNormalPoints(formattedInput) {
    let containsJQK = _(['J','K','Q']).some(x => formattedInput.includes(x));
    if (containsJQK) {
        return _.chain(formattedInput).map(element=> {
            if (['J', 'K' ,'Q'].includes(element)) {
                return 10;
            } else {
                return element;
            }
        }).value();
    }
    return formattedInput;
}

function getAllPoints(normalPoints) {
    let containsA =normalPoints.includes('A');

    if (containsA) {
        let initalPoints = _(normalPoints).map(element=> {
            return element==='A' ? 1 : parseInt(element);
        }).sum();

        if (initalPoints <= 11) {
            initalPoints += 10;
        }
        return initalPoints;
    } else {
       return _(normalPoints).map(element => parseInt(element)).sum();
    }
}
function printPointA(inputA) {
    // console.log(inputA);
    let formattedInputA = getFormattedInput(inputA);
    // console.log(formattedInputA);
    let normalPointsA = getNormalPoints(formattedInputA);
    // console.log(normalPointsA);
    let allPoints = getAllPoints(normalPointsA);
    // console.log(allPoints);
    return allPoints;
}
function printPointB(inputB) {
    let formattedTagB = getFormattedInput(inputB);
    // console.log(formattedTagB);
    let normalPointsB = getNormalPoints(formattedTagB);
    // console.log(normalPointsB);
    let allPoints = getAllPoints(normalPointsB);
    return allPoints;
    // console.log(allPoints);
}

function getCompareResult(pointA, pointB) {
    let formattedInputA=getFormattedInput(inputA);
    let cardNumberA=formattedInputA.length;
    let formattedInputB=getFormattedInput(inputB);
    // console.log(formattedInputB);
    let cardNumberB=formattedInputB.length;
    // console.log(cardNumberB);
    if (pointA > 21 && pointB > 21) {
        return "A & B tied!";
    } else if (pointA > 21 && pointB <= 21) {
        return 'B won!';
    } else if (pointA <= 21 && pointB > 21) {
        return 'A win!';
    } else if (pointA <= 21 && pointB <= 21) {
        if (pointA === pointB) {
            if (cardNumberA === cardNumberB) {
                return 'A & B tied!';
            } else {
                if (cardNumberA < cardNumberB) {
                    return 'A win!';
                } else {
                    return 'B win!';
                }
            }
        } else {
            if (pointA > pointB) {
                return 'A win!';
            } else {
                return 'B win!';
            }
        }
    }
}
function getFinalResult(inputA, inputB) {
    let pointA = printPointA(inputA);
    let pointB = printPointB(inputB);
    let compareResult = getCompareResult(pointA, pointB);
    // console.log(compareResult);
    return compareResult;
}
let inputA = 'A-2-2-3';
let inputB = '4-7-7';
// let inputA = '4-2-Q-5';
// let inputB = 'A-2-3-4-A';

getFinalResult(inputA, inputB);
module.exports = {
    getFormattedInput: getFormattedInput,
    getNormalPoints: getNormalPoints,
    getAllPoints:getAllPoints,
    printPointA:printPointA,
    printPointB:printPointB,
    getCompareResult:getCompareResult,
    getFinalResult:getFinalResult
};