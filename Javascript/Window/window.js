console.log('Window object',window);
// this keyword refers to window object ie whenever we invoke this keyword using object reference
console.log("this keyword",this);
console.log(this===window);
// window.alert("welcome to Javascript class");
// alert("welcome to UST Global and Test Yantra");

// let confirmdel=confirm("Are you Sure you want to delete");
// console.log("Confirm Delition :",confirmdel);

// let userName=prompt("What is your name","Amar");
// console.log('user name:',userName);

const person = {
    firstName : 'Alia',
    age : 25,
    lastname : 'Kapoor',
    getName : function(){
        return this.firstName + ' ' + this.lastname;
    }
}
let fullName = person.getName();
console.log("Full Name :",fullName);

