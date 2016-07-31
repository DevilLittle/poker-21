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
    it('should contains lots of A to get all points', function () {
        let normalPoints = [ 'A', '2','3', '2','A' ];
        let allPoints=getAllPoints(normalPoints);
        let expected = 19;
        expect(allPoints).toEqual(expected)
    });
    it('should get compare result', function () {
        let inputA = 'A-2-3-4-J';
        let inputB = '4-2-Q-5';
        let pointA=printPointA(inputA);
        let pointB=printPointB(inputB);
        let compareResult=getCompareResult(pointA,pointB);
        let expected = 'B win!';
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
    it('should get compare result from firstStep to finalStep', function () {
        let inputA ='4-2-Q-5' ;
        let inputB ='A-2-3-4-A';
        let result=getFinalResult(inputA,inputB);
        let expected = 'A win!';
        expect(result).toEqual(expected)
    });
});
 