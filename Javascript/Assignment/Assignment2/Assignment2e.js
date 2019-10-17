//NAmed Fun
function prime(n){
    var temp = 0;
    for(var i = 2; i<=n/2; i++)
    {
        if((n%i) === 0){
            temp = 1;
        }
        
    }
    if(temp === 1){
        console.log("not prime")

    }else{
        console.log("prime")
    }
}
prime(5);

//Function Expression
var fprime = function(n){
    var temp = 0;
    for(var i = 2; i<=n/2; i++)
    {
        if((n%i) === 0){
            temp = 1;
        }
        
    }
    if(temp === 1){
        console.log("not prime")

    }else{
        console.log("prime")
    }
}
fprime(10);



//Self Invoked fn

(function(n){
    var temp = 0;
    for(var i=2; i<=n/2; i++)
    {
        if((n%i) === 0){
            temp = 1;
        }
        
    }
    if(temp === 1){
        console.log("not prime")

    }else{
        console.log("prime")
    }
})(13);

//fat Arrow Fn
var pri = n=>{
    var temp = 0;
    for(var i=2; i<=n/2; i++)
    {
        if((n%i) === 0){
            temp = 1;
        }
        
    }
    if(temp === 1){
        console.log("not prime")

    }else{
        console.log("prime")
    }
}
pri(26);

