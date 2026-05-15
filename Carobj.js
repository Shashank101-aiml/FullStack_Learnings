const car ={
    speed:120,
    color:'Red',
    company:'Mahindra',
    model:'suv',
    Safety:'5 star'
}
console.log("Initial Car Object");
for(let key in car){
    console.log(`${key}:${car[key]}`);
}
console.log("--------------------")
const secondProperty = Object.keys(car)[1];
console.log("Car object's second property's value:",car[secondProperty]);
console.log("-----------------------------");
delete car[secondProperty];
console.log("Car Object after deleting the second property");
for(let key in car){
    console.log(`${key}:${car[key]}`);
}
console.log("-------------------")
const lengthofcar = Object.keys(car).length;
console.log("Length of car object is : ", lengthofcar);
console.log("-----------------------------");