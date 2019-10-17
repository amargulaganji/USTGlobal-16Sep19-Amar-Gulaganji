var hobbies=['Sleeping','Gaming','Eating','Coding','Roaming'];
console.log(typeof hobbies); //Except 7 primitive data types all are Objects

//Array Methods
console.log(Array.isArray(hobbies));//returns type of hobbies
console.log(hobbies.includes('Gaming',3)); //3 is start index for searching
console.log(hobbies.includes('Gaming')); //0 is start index for searching
console.log(hobbies.push('Guitar','Volleyball'));//Elements are added at last opf the array and prints the new length of array
console.log(hobbies.pop());//last element in the array is poped and popend element is printed
console.log(hobbies.unshift('Numismatics','singing'));//add elements at first of array
console.log(hobbies.shift());//remove first element in array
console.log(hobbies);
hobbies.splice(1,0,'Bird Watching','PUBG');
console.log(hobbies);
const afterslice=hobbies.slice(2,4);//it create new array by copying element index 2 to 3(end index - 1)
console.log(afterslice);

console.log(hobbies.indexOf('coding',2));//strt searching from inder 2 for 'coding' if it is present it returns index else returns -1 
var str=hobbies.join('-');//add seperator between all the elements and returns string
console.log(str);

const numbers=[100,200,300,400];
const numbers1=numbers.map(function(value,index){//using anonymous fn
    let newvalue=value+50;
    return newvalue;
})
console.log(numbers1);
const numbers2=numbers.map(value=>value+50);//using fat arrow fn
console.log(numbers2);
//numbers.filter creates new array and insert element if inside fn returns true else nothing
const numbers3=numbers.filter(function(value,index){
    if(value>200){
        return true;
    }else{
        return false;
    }
})

console.log(numbers3);
const numbers4=numbers.filter(value=>value>200)//numbers.filter method using fat arrow fn

console.log(numbers4);




