module.exports = {
    sum: function(a, b, cb = function(){}) {
        cb(a + b);
        return a + b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};