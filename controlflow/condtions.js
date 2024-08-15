// if else condtion 
const scor = 100

if (scor>200) {
    console.log("good");   
    
}
else {
    console.log("bad");
    
}

// this is nested if  its mean if under if then else
const bal = 1000
if (bal > 500) {
    console.log("good");
    
} else if (bal <500){
    console.log("nicea");
    
    
} else{
    console.log("bad");
    
}
// now we can learn multiple condition

const userlogin = true
const useratm = true
 if (userlogin&&useratm) {
    console.log("continue shoping");
    
    
 } else {
    console.log("Deactive");
    
 }

 // this is switch statment when we have multiple condition

 const month = 3
  switch (month) {
    case 1:
        console.log("jan");
        break;
     
            case 2:
                console.log("feb");
                 
                break;
         case 3:
                        console.log("mar");
                                              
                        break;
  
    default:
        break;
  }