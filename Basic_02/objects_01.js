// single ton object when we create constector this is also a singleton obj constrctr sy jo bi bny ga wo singlton hoga
Object.create     //this is single ton 

// we work on object litral
// we declair object and pass key and value 

//how can decclear symble real sytext to decler symbol

const sym = Symbol("my ch")
 const objlit = {

    [sym] : "hyyy",
    name : "Qasim",
    location : "bwn",
    age : "28",
    email : "qasimgoogle.com",
    lastloginday : ["monday","tuesday"]

 } 
// now we can acess this ["name"] this method is good to acess we also can acess through dot.

console.log(objlit["name"]);
console.log(objlit[sym]);
 // change the value 

 objlit.email = "qasim12@gmail.com "
 console.log(objlit["email"]);

 //how can i lock value  freez method in obj
// Object.freeze(objlit)
// console.log(objlit["email"]);

// now we are learn geeting function 

objlit.greeting =  function(){

    console.log("hyyyy your name is");
    
}
objlit.greetingtwo =  function(){

    console.log(`hyyyy your name is , ${this.name}`);
    
}
console.log(objlit.greeting());
console.log(objlit.greetingtwo());



