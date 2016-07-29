let _ = require('lodash');

function getFormattedInput(input) {
    return _
        .chain(input)
        .split('-')
        .value();
}
function getNormalPoints(formattedInput) {
    let containStringJQK = _.chain(formattedInput).includes('J').value() || _.chain(formattedInput).includes('Q').value() || _.chain(formattedInput).includes('K').value();
    if (containStringJQK) {
        return _.chain(formattedInput).map(element=> {
            if (element === 'J' || element === 'Q' || element === 'K') {
                return _.replace(element, element, 10);
            } else {
                return element;
            }
        }).value();
    }
    return formattedInput;
}

function getAllPoints(normalPoints) {
    let containStringA = _.chain(normalPoints).includes('A').value();
    
    if (containStringA) {
        let initalPoints = _.chain(normalPoints).map(element=> {
            let stringArray = '';
            if (element === 'A') {
                stringArray = _.chain(element).replace('A', 1).value();
            } else {
                stringArray = element;
            }
            return _.chain(stringArray).parseInt().value();
        }).sum().value();

        if (initalPoints <= 11) {
            initalPoints += 10;
        }

        return initalPoints;
    } else {
        return _.chain(normalPoints).map(element=> {
            return _.chain(element).parseInt().value();
        }).sum().value();
    }
}
function printPointA(inputA) {
    let formattedInputA = getFormattedInput(inputA);
    // console.log(formattedInputA);
    let normalPointsA = getNormalPoints(formattedInputA);
    // console.log(normalPointsA);
    let allPoints = getAllPoints(normalPointsA);
    return allPoints;
    // console.log(allPoints);

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

function getCompareResult(pointA, pointB, normalPointsA, normalPointsB) {
    if (pointA > 21 && pointB > 21) {
        return "A failed & B failed!";
    } else if (pointA > 21 && pointB <= 21) {
        return 'B won!';
    } else if (pointA <= 21 && pointB > 21) {
        return 'A won!';
    } else if (pointA <= 21 && pointB <= 21) {
        if (pointA === pointB) {
            if (normalPointsA.length === normalPointsB.length) {
                return 'A & B tied!';
            } else {
                if (normalPointsA.length > normalPointsB.length) {
                    return 'B win!';
                } else {
                    return 'A win!';
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

function printResult(inputA, inputB) {
    let pointA = printPointA(inputA);
    let pointB = printPointB(inputB);
    let normalPointsA = getNormalPoints(inputA);
    let normalPointsB = getNormalPoints(inputB);
    let compareResult = getCompareResult(pointA, pointB, normalPointsA, normalPointsB);
    return compareResult;
    // console.log(compareResult);

}
// let inputA='A-2-4';
let inputA = 'A-2-3-4-J';
let inputB = '4-2-Q-5';

printResult(inputA, inputB);
module.exports = {
    getFormattedInput: getFormattedInput,
    getNormalPoints: getNormalPoints,
    getAllPoints:getAllPoints,
    printPointA:printPointA,
    printPointB:printPointB,
    getCompareResult:getCompareResult,
    printResult:printResult
};