//Named Function
function factorial(n){
var fact = 1;
for(var i = 1 ; i<=n ; i++){
    fact = fact*i;
}
console.log('factorial is ',fact);
}
factorial(3);

//Function Expression (Anonymous)
var factO = function(n){
    var fact = 1;
    for(var i = 1 ; i<=n ; i++){
        fact = fact*i;
        
    }
    console.log('factorial is ',fact);
}
factO(4);


//Self Invoked Function
(function(n){
    var fact = 1;
    for(var i = 1 ; i<=n ; i++){
        fact = fact*i;   
    }
    console.log('factorial is ',fact);
})(5);

//Fat arrow function
var fact1 = n=>{
    var fact = 1;
    for(var i=1 ; i<=n ; i++){
        fact = fact*i;   
    }
    console.log('factorial is ',fact);
}
fact1(6);