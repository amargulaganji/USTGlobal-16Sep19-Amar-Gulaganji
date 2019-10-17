let h1element=document.getElementById('demo');
console.log("Element :",h1element);
console.log("Element Text:",h1element.textContent);
h1element.textContent = 'Good Evening';

let buttonElement = document.createElement('button');
// console.log(buttonElement);
buttonElement.textContent="Click Me!!!";
console.log("Button Element",buttonElement);
document.body.appendChild(buttonElement);


let ulElement=document.createElement('ul');
let li1Element=document.createElement('li');
let li2Element=document.createElement('li');
let li3Element=document.createElement('li');

li1Element.textContent='Java';
li2Element.textContent='SQL';
li3Element.textContent='Javascript';

ulElement.appendChild(li1Element);
ulElement.appendChild(li2Element);
ulElement.appendChild(li3Element);

document.body.appendChild(ulElement);

h1element.style.color ='red';
h1element.style.fontSize = '20px';

function showMessage(){
    alert("Hello World");
}

function changeColor()
{
    let ele=document.getElementById('mover');
    
    ele.style.color = 'red';

}
function removeColor(){
    let ele1=document.getElementById('mover');
    ele1.style.color = 'black';

}
function printHello(){
    let uName=document.getElementById('username').value;
    document.getElementById('showusername').textContent=uName;
    console.log("hello World");
}

let name='Amar';
let age=22;
let phno=987665443221;
console.log("Name is"+name+"age is"+age+"Phone no is"+phno);
console.log(`Name is ${name} age is ${age} phone no is ${phno}`);
console.log(`2+2 =${2+2}`);