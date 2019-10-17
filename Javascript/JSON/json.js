const person = {
    name : 'Sundara',
    age : 100,
    color : 'white',
    address : {
        city : 'Bijapur',
        state : 'Karnataka',
        pincode : 586101
    },
    hobbies : ['Coding','Bird Watching']
}
console.log("JavaScript person Object",person);
const jsonObject = JSON.stringify(person);
console.log('JSON person Object',jsonObject);
const javaScriptObject = JSON.parse(jsonObject);
console.log('Javascript person Object',javaScriptObject);

localStorage.setItem('email','billgates@gmail.com');
const emailId = localStorage.getItem('email');
console.log('Email :',emailId);
localStorage.clear();
console.log('Email :',emailId);
