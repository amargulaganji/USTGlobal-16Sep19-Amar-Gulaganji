const message = new Promise(function(resolve,reject){
    if(30 < 20){
        resolve('Success');
    }else{
        reject('Failed');
    }
})

message.then(function(msg){
    console.log("mesage is ",msg);
}).catch(function(err){
    console.log('message is',err);
})


const demo = new Promise(function(resolve,reject){
    if(30 > 20){
        resolve([{
            name : 'Billgates',
            age : 64
        },{
            name : 'Mark Zukerberg',
            age : 40
        },{
            name : 'Jeff Bezos',
            age : 45
        }]);
    }else{
        reject('Failed');
    }
})

demo.then(function(msg){
    console.log("mesage is ",msg);
}).catch(function(err){
    console.log('message is',err);
})

//Closure Example
//closure means inner function will always have acess 
//- to outer function properties,if outer function is returned and removed from the stack.
function outerFunction(counter){
    function innerFunction(){
        let count;
        count = counter+10;
        return count;
    }
    return innerFunction;
}

let innerFunc = outerFunction(10);
let count = innerFunc();
console.log("count is",count);

