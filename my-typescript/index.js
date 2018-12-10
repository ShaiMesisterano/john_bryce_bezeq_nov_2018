var num1 = 10;
var num2 = 5;
var firstName = "shai";
var isActive = true;
// JS
function JSprintFirstName(firstName) {
    console.log(firstName);
}
// TS
function TSprintFirstName(firstName) {
    console.log(firstName);
}
TSprintFirstName("123");
// compile error
// TSprintFirstName(123);
function printNum(num) {
    return num * 2;
}
console.log(printNum(4));
