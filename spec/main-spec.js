/*global describe,it,expect,spyOn*/
let {getFormattedInput,getNormalPoints,getAllPoints,printPointA,printPointB,getCompareResult,printResult} =require('../src/main.js');
describe('poker-21', function () {

    it('should format input', function () {
        let input = 'A-3-J-Q-7';
        let formattedInput = getFormattedInput(input);
        let expected = ['A','3','J','Q','7'];
        expect(formattedInput).toEqual(expected)
    });
    it('should get normalPoints', function () {
        let formattedInput = [ '4', '2', 'Q' ];
        let normalPoints=getNormalPoints(formattedInput);
        let expected = [ '4', '2', '10' ];
        expect(normalPoints).toEqual(expected)
    });
    it('should get normalPoints', function () {
        let formattedInput = [ 'A', '2', '3', '4', 'J' ];
        let normalPoints=getNormalPoints(formattedInput);
        let expected = [ 'A', '2', '3', '4', '10' ];
        expect(normalPoints).toEqual(expected)
    });
    it('should get allPoints', function () {
        let normalPoints = [ 'A', '2', '3', '4', '10' ];
        let allPoints=getAllPoints(normalPoints);
        let expected = 20;
        expect(allPoints).toEqual(expected)
    });
    it('should get allPoints', function () {
        let normalPoints = [ 'A', '2', '3', '4' ];
        let allPoints=getAllPoints(normalPoints);
        let expected = 20;
        expect(allPoints).toEqual(expected)
    });

    it('should get compareResult', function () {
        let inputA = 'A-2-3-4-J';
        let inputB = '4-2-Q-5';
        let normalPointA=['A','2','3','4','10'];
        let normalPointB=['4','2','10','5'];
        let pointA=printPointA(inputA);
        let pointB=printPointB(inputB);
        let compareResult=getCompareResult(pointA,pointB,normalPointA,normalPointB);
        let expected = 'B win!';
        expect(compareResult).toEqual(expected)
    });

    it('should get compareResult from firstStep to finalStep', function () {
        let inputA = 'A-2-3-4-J';
        let inputB = '4-2-Q-5';
        let result=printResult(inputA,inputB);
        let expected = 'B win!';
        expect(result).toEqual(expected)
    });
});
