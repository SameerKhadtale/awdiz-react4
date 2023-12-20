// var myNumber = 3;
// console.log(myNumber)
// var myNumber = 5;
// console.log(myNumber)

function person(name, age, number){
console.log(name, age, number)
}

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello my name is ${this.name} and i'm ${this.age} years old`);
    }
    myAge(){
        console.log(`My age is ${this.age}`)
    }
}
const john = new Person('John',30);
john.sayHello();
john.myAge();