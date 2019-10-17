let names : string = "Amar";

console.log(names, typeof names);

let age : number;
age = 22;
console.log(age, typeof age);

let mobileNumber = 123456;

console.log(mobileNumber, typeof mobileNumber);

let address;
console.log(address, typeof address);

address = "Bijapur";
address = 586101;

console.log(address, typeof address);


let calAge = function() : void{
    console.log("Age is 26");
}

calAge();

class Person{
    constructor(public name : string, public age : number){

    }
}

let person1 = new Person("amar",22);
console.log(person1);

class student extends Person{
    constructor(name : string, age : number, public mobile : number){
        super(name,age);
    }
}

let student1 = new student('Amar',22,253944);
console.log(student1);