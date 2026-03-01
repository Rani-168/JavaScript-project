// user defined function // it is block of code which perform a spcefic task

// declearning function
function greet(userName){ //parameter
    console.log("hiii", userName );

}
// calling the function
greet( "Ankita"); // argument

greet("Rani");

function calculateSum(num1, num2){
    let sum = num1 + num2;
    console.log(sum);
}

calculateSum(10, 20);



function calculateSum2(num1, num2){
     let sum = num1 + num2; //21

    return sum; //21

}

let sumof = calculateSum2(10, 20);

console.log(sumof);



function EvenORODD(num){
  if(num%2==0){
    return true;
  }else{
    return false;
  }

}

EvenORODD(10);



// let sum =0;
// function addSum(num){
//     for(let i=1 ; i<=num; i++){
        
//          sum= sum + i
        
//     }

//     return sum;

// }
//  addSum(5);
//  console.log(sum);


 let mul =1;
function addSum(num){
    for(let i=1 ; i<=num; i++){
        
         mul= mul *i
        
    }

    // return mul;

}
 addSum(5);

 console.log(mul);
 

 




 
 







