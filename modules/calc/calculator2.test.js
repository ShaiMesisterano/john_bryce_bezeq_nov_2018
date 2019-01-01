var calc = require('./calculator');

describe('1+2 sum', function () {
    var sum;

    beforeAll(function () {
        sum = calc.sum(1, 2);
    });

    afterAll(function(){
        sum = null;
    });

    test('it should return a number', function(){
        expect(typeof sum).toBe('number');
    });

    test('it should return 3', function(){
        expect(sum).toBe(3);
    });
});