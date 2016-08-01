/*global describe,it,expect,spyOn*/
let {getFormattedInput,getNormalPoints,getAllPoints,printPointA,printPointB,getCompareResult,getFinalResult} =require('../src/main.js');
describe('poker-21', function () {

    it('should format input', function () {
        let input = 'A-3-J-Q-7';
        let formattedInput = getFormattedInput(input);
        let expected = ['A','3','J','Q','7'];
        expect(formattedInput).toEqual(expected)
    });
    it('should consider J,Q,K as 10 not contain A to get normal points' , function () {
        let formattedInput = [ '4', '2', 'Q','J','K' ];
        let normalPoints=getNormalPoints(formattedInput);
        let expected = [ '4', '2', 10 ,10,10];
        expect(normalPoints).toEqual(expected)
    });
    it('should consider J,Q,K as 10 contain A to get normal points', function () {
        let formattedInput = [ 'A', '2', '3', '4', 'J' ];
        let normalPoints=getNormalPoints(formattedInput);
        let expected = [ 'A', '2', '3', '4', 10 ];
        expect(normalPoints).toEqual(expected)
    });

    it('should only contains "2-10" to get all points', function () {
        let normalPoints = [ '2','5', '9' ];
        let allPoints=getAllPoints(normalPoints);
        let expected = 16;
        expect(allPoints).toEqual(expected)
    });
    it('should only contains "J,Q,K" to get all points', function () {
        let formattedInput = [ 'J','Q' ];
        let normalPoints=getNormalPoints(formattedInput);
        let allPoints=getAllPoints(normalPoints);
        let expected = 20;
        expect(allPoints).toEqual(expected)
    });
    it('should contains "2-10" and "J,Q,K" to get all points', function () {
        let formattedInput = ['2','J','3','2'];
        let normalPoints=getNormalPoints(formattedInput);
        let allPoints=getAllPoints(normalPoints);
        let expected = 17;
        expect(allPoints).toEqual(expected)
    });
    it('should consider A as 1 to get all points', function () {
        let normalPoints = [ 'A', '2', '3', '4', '10' ];
        let allPoints=getAllPoints(normalPoints);
        let expected = 20;
        expect(allPoints).toEqual(expected)
    });
    it('should consider A as 11 to get all points', function () {
        let normalPoints = [ 'A', '2', '3', '4' ];
        let allPoints=getAllPoints(normalPoints);
        let expected = 20;
        expect(allPoints).toEqual(expected)
    });
    it('should contains lots of A to get all points', function () {
        let normalPoints = [ 'A', '2', 'A','3', '4','A' ];
        let allPoints=getAllPoints(normalPoints);
        let expected = 12;
        expect(allPoints).toEqual(expected)
    });
    it('should contains "2-10"&&"JQK"&&"A" to get all points', function () {
        let formattedInput = [ '2', 'A','3', 'J' ];
        let normalPoints=getNormalPoints(formattedInput);
        let allPoints=getAllPoints(normalPoints);
        let expected = 16;
        expect(allPoints).toEqual(expected)
    });
    it('should consider pointA>21&&pointB>21 to get compare result', function () {
        let inputA = 'A-J-3-J';
        let inputB = '4-7-Q-5';
        let pointA=printPointA(inputA);
        let pointB=printPointB(inputB);
        let compareResult=getCompareResult(pointA,pointB);
        let expected = 'A & B tied!';
        expect(compareResult).toEqual(expected)
    });
    it('should consider pointA<=21&&pointB<=21(pointA>pointB) to get compare result', function () {
        let inputA = 'A-3-4-J';
        let inputB = '4-2-5';
        let pointA=printPointA(inputA);
        let pointB=printPointB(inputB);
        let compareResult=getCompareResult(pointA,pointB);
        let expected = 'A win!';
        expect(compareResult).toEqual(expected)
    });
    it('should consider pointA<=21&&pointB<=21(pointA<pointB) to get compare result', function () {
        let inputA = 'A-3-J';
        let inputB = '4-2-3-A';
        let pointA=printPointA(inputA);
        let pointB=printPointB(inputB);
        let compareResult=getCompareResult(pointA,pointB);
        let expected = 'B win!';
        expect(compareResult).toEqual(expected)
    });
    it('should consider pointA<=21&&pointB<=21(pointA===pointB) to get compare result', function () {
        let inputA = 'A-3-4-J';
        let inputB = '4-4-J';
        let pointA=printPointA(inputA);
        let pointB=printPointB(inputB);
        let compareResult=getCompareResult(pointA,pointB);
        let expected = 'B win!';
        expect(compareResult).toEqual(expected)
    });
    it('should consider pointA<=21&&pointB<=21 to get compare result', function () {
        let inputA = 'A-2-2-3';
        let inputB = '4-7-7';
        let pointA=printPointA(inputA);
        let pointB=printPointB(inputB);
        let compareResult=getCompareResult(pointA,pointB);
        let expected = 'B win!';
        expect(compareResult).toEqual(expected)
    });

    it('should consider pointA<=21&&pointB>21 to get compare result', function () {
        let inputA = 'A-2-2';
        let inputB = '4-4-7-J';
        let pointA=printPointA(inputA);
        let pointB=printPointB(inputB);
        let compareResult=getCompareResult(pointA,pointB);
        let expected = 'A win!';
        expect(compareResult).toEqual(expected)
    });

    // integration testing
    it('should get compare result from firstStep to finalStep', function () {
        let inputA = 'A-2-3-4-J';
        let inputB = '4-2-Q-5';
        let result=getFinalResult(inputA,inputB);
        let expected = 'B win!';
        expect(result).toEqual(expected)
    });
});
 