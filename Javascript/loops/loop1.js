 var brands=['Kingfisher','Bisleri','aqua','kinley'];

 for(var element of brands){ //element is passed
     console.log("value :",element);
 }
 // for and forof is not is used for objects
 //forof is only for arrays
 console.log("---------------------------------");

 for(var index in brands){ //index is passed
console.log("brand:",brands[index])
 }

 //forin can be used both for Arrys and objects
console.log("---------------------------------");
 var person={
     name:'Sundari',
     age:33,
     color:'white'
 }

 for(var key in person){
     console.log("value =",person[key]);
//states or behaviour in objects can be accessed by both . and []
//in forin [] is used
 }
 console.log("---------------------------------");


 var movies=['sholay','mayabazar','Jurassic park','Titanic'];
 movies.forEach(function(value,index){
     console.log('Movies =',value);
 })
 console.log("---------------------------------");

 movies.forEach(function(value){
    console.log('Movies =',value);
})
console.log("---------------------------------");
movies.forEach(function(value,index){
    console.log('Movies =',value+' & index =',index);
})

console.log("---------------------------------");
var items=[{
    item:'bangles',
    id:1,
    price:100
},
{
    item:'eyeliner',
    id:2,
    price:500
},{
    item:'watch',
    id:3,
    price:5000
},{
    item:'bike',
    id:4,
    price:1000000
}];
items.forEach(function(value,index){
    console.log('item =',value.item+', id '+value.id+', price '+value.price);
    console.log(value)
    
})
console.log("---------------------------------");
//break statement can not be used in forEach()
var numbers=[1,2,3,4,,5,,6,,7];
for(var i=0;i<numbers.length;i++){
    console.log("for loop :",numbers[i]);
}
console.log("---------------------------------");

numbers['hundered']=50;
for(var i=0;i<numbers.length;i++){
    console.log("for loop :",numbers[i]);
}
console.log("---------------------------------");
for(var a in numbers){
    console.log("for in loop :",numbers[a]);
}
