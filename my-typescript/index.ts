var num1: number = 10;
var num2: number = 5;
var firstName: string = "shai";
var isActive: boolean = true;

// JS
function JSprintFirstName(firstName) {
    console.log(firstName);
}
// TS
function TSprintFirstName(firstName: string): void {
    console.log(firstName);
}
TSprintFirstName("123");
// compile error
// TSprintFirstName(123);
function printNum(num: number): number {
    return num * 2;
}

console.log(printNum(4));
