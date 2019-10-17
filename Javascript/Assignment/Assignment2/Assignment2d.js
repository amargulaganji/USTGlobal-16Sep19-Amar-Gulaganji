var a = [1,2,3,4];

//Named fun
function add(n,array){
array[array.length] = n;
var sum = 0;
for(var i = 0 ; i<array.length; i++){
sum = sum+array[i];
}
console.log("Sum is: ",sum);
}
add(5,a);

//fun Expression
var adar = function(n,array){
    array[array.length] = n;
    var sum = 0;
    for(var i = 0; i<array.length; i++){
    sum = sum+array[i];
    }
    console.log("Sum is",sum);
    }

adar(9,a);

//Self invoked
(function(n,array){
    array[array.length] = n;
    var sum = 0;
    for(var i = 0; i<array.length; i++){
    sum = sum+array[i];
    }
    console.log("Sum is",sum);
    })(78,a);


//FAt Arrow Fn
var faa = (n,array)=>{
    array[array.length] = n;
    var sum = 0;
    for(var i=0 ;i<array.length; i++){
    sum = sum+array[i];
    }
    console.log("Sum is",sum)
    }
faa(56,a);