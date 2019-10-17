//Named Function 
function calcir(r) {
     if (0 < r){
        console.log("The circumference of the circle :",(r*2*Math.PI));
}else{
        console.log("Error.");
    return false;
}
}
calcir(4);

//Function Expression
var circum = function (r) {
    if (0 < r){
       console.log("The circumference of the circle :",(r*2*Math.PI));
}else{
       console.log("Error.");
   return false;
}
}
circum(2);

//Self Invoked
(function (r) {
    if (0 < r){
       console.log("The circumference of the circle :",(r*2*Math.PI));
}else{
       console.log("Error.");
   return false;
}
})(5);

//Fat Arrow function
var cir = r=>{
    if (0 < r){
       console.log("The circumference of the circle :",(r*2*Math.PI));
}else{
       console.log("Error.");
   return false;
}
}
cir(6);