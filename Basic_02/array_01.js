// in this code we will prectice the arry in java script.
const myarr = [1,2,3,4,5,6]
//myarr.pop()
//myarr.push(56)

//this is add the element from first
//myarr.unshift(9)

//this is remove the element from start
//myarr.shift()

// this method use for check num is add or not
 //console.log(myarr.includes(2));

//they tell us which index of our value
//console.log(myarr.indexOf(2));

//slice and aplice method   slice return the copy of section of an arrry form both start and end. if i slice 1,2,3 they get 1 2 out of my arry .
// but i splice they if ask 1,2,3 they cut from arry
console.log("A",myarr);

const myn1 = myarr.slice(1,3)
console.log("B", myarr);
console.log(myn1);


const myn2 = myarr.splice(1,3)

console.log("c", myarr);
console.log(myn2);







