let _ = require('lodash');

function getCards(input) {
    return input.split('-');
}
function convertJkqToNumberCards(formattedInput) {
    return _(formattedInput).map(element=> {
        let isJQK = ['J', 'K', 'Q'].includes(element);
        return isJQK ? '10' : element;
    }).value();
}
function getPointAndCount(numberCards) {
    let point = _(numberCards).map(element=> {
        return element === 'A' ? 1 : parseInt(element);
    }).sum();

    if (point <= 11) {
        point += 10;
    }
    return {
        point,
        count: numberCards.length
    }
}
function getComparedResult(aPointAndCount, bPointAndCount) {
    let {point:aPoint, count:aCount} = aPointAndCount;
    let {point:bPoint, count:bCount} = bPointAndCount;
    if (aPoint > 21 && bPoint > 21) return "tied";
    if (aPoint > 21) return 'B won';
    if (bPoint > 21) return 'A won';
    if (aPoint > bPoint) return 'A won';
    if (bPoint > aPoint) return 'B won';
    if (aCount > bCount) return 'B won';
    if (bCount > aCount) return 'A won';
    return 'tied';
}

function printWinner(inputA, inputB) {
    let aPointAndCount = getPointAndCount(convertJkqToNumberCards(getCards(inputA)));
    let bPointAndCount = getPointAndCount(convertJkqToNumberCards(getCards(inputB)));
    let result = getComparedResult(aPointAndCount, bPointAndCount);
    console.log(result);
}
let inputA = 'A-2-2-3';
let inputB = '4-7-7';
printWinner(inputA, inputB);
module.exports = {
    getCards,
    convertJkqToNumberCards,
    getPointAndCount,
    getComparedResult,
    printWinner
};