const hero = ["ch","shaikh","baba" ]
 const hero2 = ["chdddd","shaidddkh","bdddaba"]

 //hero.push(hero2)

 // in this we will concate the 2 arry with concat method

 const all = hero.concat(hero2)
 console.log(all);
 
 // one more method called sparad to combine all .
 const allnew = [...hero,...hero2]
 console.log("All", allnew);

 //we use flate method is used to combile arry in aryyy
 const arrryinary =[1,2,3,[3,5,6,],5,5,[7,8,8]]
 const real = arrryinary.flat(Infinity)
 console.log(real);

 // how can i convert any object or string into arry through from method and of method
 console.log(Array.isArray("Qasimchaudhary"))
 console.log(Array.from("Qasimchaudhary"));
 
 
 