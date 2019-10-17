const items = [{
    iName : 'Ear ring',
    iId : 1,
    price : 5000
},{
    iName : 'kajal',
    iId : 2,
    price : 1000
},{
    iName :'Trimmer',
    iId : 3,
    price : 3000
},{
    iName : 'Beardo',
    iId : 4,
    price : 170
}];


const mapitem = items.map(value=>{
    value.price = value.price+300;
    return value;
})
console.log(mapitem);

const filteritem = items.filter(value=>value.price>1000)
console.log(filteritem);