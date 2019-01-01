var calc = require('./calculator');

test("1+2=3", function(){
    expect(calc.sum(1,2)).toBe(3);
});

test("2*3=6", function(){
    expect(calc.multiply(2,3)).toBe(6);
    expect(calc.multiply(2,3)).not.toBe(12);
});