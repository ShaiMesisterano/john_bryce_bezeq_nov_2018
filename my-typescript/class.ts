class Person {
    public age: number;
    constructor(_age: number) {
        this.age = _age;
    }
    public walk(): void {
        var arr = [1,2];
        arr.find(item => item ===1);
        console.log(`walking...`);
    }
    public talk(word: string, female?: boolean): void {
        let person = female ? "woman" : "man";
        console.log(`${person} is talking...`);
    }
}

let shai = new Person(14);
console.log(shai.age);
shai.walk();
shai.talk("123", false);