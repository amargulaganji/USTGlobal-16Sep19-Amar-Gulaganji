//named Function
function fib(n){
    var fib1 = 0;
    var fib2 = 1;
    var fib3;
    console.log(fib1);
    console.log(fib2);
    for(var i=2 ; i<=n ; i++){
        fib3 = fib1+fib2;
        fib1 = fib2;
        fib2 = fib3;
        
        console.log(fib3);
        fib3 = i;
    }

}
fib(4);
console.log("--------------------------");

//Function Expression(Anonymous)
var fibo = function (n){
    var fib1 = 0;
    var fib2 =  1;
    var fib3;
    console.log(fib1);
    console.log(fib2);
    for(var i = 2; i<=n ; i++){
        fib3 = fib1+fib2;
        fib1 = fib2;
        fib2 = fib3;
        
        console.log(fib3);
        fib3 = i;
    }

}
fibo(6);
console.log("--------------------------");

//Self Invoked function
(function (n){
    var fib1 = 0;
    var fib2 = 1;
    var fib3;
    console.log(fib1);
    console.log(fib2);
    for(var i = 2 ; i<=n ; i++){
        fib3 = fib1+fib2;
        fib1 = fib2;
        fib2 = fib3;
        
        console.log(fib3);
        fib3 = i;
    }
})(8);
console.log("--------------------------");

//Fat Arrow Function
var fib1 = n=>{
    var fib1 = 0;
    var fib2 = 1;
    var fib3;
    console.log(fib1);
    console.log(fib2);
    for(var i = 2 ; i<=n ; i++){
        fib3 = fib1+fib2;
        fib1 = fib2;
        fib2 = fib3;
        
        console.log(fib3);
        fib3 = i;
    }       
}
fib1(3);