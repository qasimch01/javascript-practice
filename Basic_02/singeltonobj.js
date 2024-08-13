// this is singleton objects

const tinder = new Object()

tinder.name = "Qasim Chaudhary"
tinder.id = "12333"
tinder.islogin = false 

// console.log(tinder);

const regular = {
    email : "qasim@gmail.com",
    fullname : {
        fname: "qasim",
        lname: "ch"
    }
}
 console.log(regular.fullname.fname);
// now we can learn how can we combine the object 

const obj1 = {a:"1",b:"2",}

const obj2 = {c:"3",d:"4",}

//const obj3 = Object.assign({},obj1,obj2)

//how we can sprate objects 
const obj3 = {...obj1,...obj2}


console.log(obj3);
// when we get from data to data base in arrry how can create obj

const datee = [
    {
        eamil: "assasas",
        id : "444"
    },
    {
        eamil: "assasas",
        id : "444"
    },
    {
        eamil: "assasas",
        id : "444"
    }
]
console.log(datee[1]);

//how can check keys values 

console.log(Object.keys(tinder));

console.log(Object.values(tinder));

// to check the property have or not
console.log(tinder.hasOwnProperty("islog"));




