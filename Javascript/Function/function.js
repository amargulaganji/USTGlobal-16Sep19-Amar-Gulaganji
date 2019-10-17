//Named Functions
function add(num1,num2){
    console.log('sum =',num1+num2)
}
add(10,20);

//Function Expression (Anonymous)
var sub = function(num1,num2){
    var value=num1-num2;
    return value;
}
var subans=sub(50,30);
console.log('Sub ans :',subans);

//Self Invoked Function
(function(n1,n2){
    
    console.log('value=',n1*n2);
})(10,5);


//Fat arrow function
var div=(x,y)=>{
    console.log('div value =',x*y);
}

div(5,6);
//if one parameter, no () parenthesis
var abc=numx=>{
    console.log('val=',numx);
}
abc(5);

//if one line, no {} parenthesis
var div2=num1=>console.log(num1);


//if one line, no {} parenthesis
var div5 = (number1,number2)=>number1+number2;
var div6 = div5(4,5);
console.log('val div6:',div6);

//Calling before Declaring
greeting('Amar')
function greeting(msg)
{
    console.log('Hello ',msg);
}



// //Calling before Declaring
// //Error bcz of Anonymous fn
// greet('Amar')
// var greet=function(msg)
// {
//     console.log('Hello ',msg);
// }
// //Calling before Declaring
// //Error bcz of Anonymous fn
// greets('Amar')
// var greets=(msg)=>
// {
//     console.log('Hello ',msg);
// }


