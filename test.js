// var myNumber = 3;
// console.log(myNumber)
// var myNumber = 5;
// console.log(myNumber)

function Person(name, age, number){
console.log(name, age, number)
}

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello my name is ${this.name}`);
    }
    myAge(){
        console.log(`Hello my age is ${this.age}`)
    }
}