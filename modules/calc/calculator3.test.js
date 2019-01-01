var calc = require('./calculator');

describe('given two numbers', function () {
    var a, b;

    beforeAll(function () {
        a = 1;
        b = 2;
    });

    afterAll(function () {
        a = b = null;
    });

    test('when executing the sum with a callback then the callback should be executed', function (done) {
        calc.sum(a, b, function (sum) {
            expect(sum).toBe(3);
            done();
        });
    })
});