var todayDate=new Date();
console.log('Today Date :',todayDate)
console.log('day :',todayDate.getDay());
console.log('Month :',todayDate.getMonth());
console.log('Date :',todayDate.getDate());
console.log('Year :',todayDate.getFullYear());

console.log('------------------------------------');
var constMilli = new Date(0);
console.log('date :',constMilli);
var constString = new Date('Nov 10');
console.log('Date String Constructor :',constString);
var constYear = new Date(2017,10);
console.log('Date Year Constructor :',constYear);
var constString = new Date('Nov 10 2019');
console.log('Date String Constructor :',constString);

