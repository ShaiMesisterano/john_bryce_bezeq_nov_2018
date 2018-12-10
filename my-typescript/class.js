var Person = /** @class */ (function () {
    function Person(_age) {
        this.age = _age;
    }
    Person.prototype.walk = function () {
        var arr = [1, 2];
        arr.find(function (item) { return item === 1; });
        console.log("walking...");
    };
    Person.prototype.talk = function (word, female) {
        var isFemale = female ? "woman" : "man";
        console.log(isFemale + " is talking...");
    };
    return Person;
}());
var shai = new Person(14);
console.log(shai.age);
shai.walk();
shai.talk("123", false);
