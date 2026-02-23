//loops are used to repeat a block of code until a specified condition is met.
// avoid writing same code again and again
  
// for loop


// for(let num=1; num<=20; num++){
//     if(num%2==0){
//         console.log(num);
//     }
    
// }



// for(let num=2; num<=20; num+=2){
//     console.log(num);
// }

for(let num=1; num<=100; num++){
   if(num%3==0 && num%5==0){
    console.log("fizzbuzz");
   }    
   else if(num%3==0){
    console.log("fizz");
   }

   else if(num%5==0){
      console.log("buzz");
   }
   else{
      console.log(num);
   }
} 




// given number check if it is prime or not if it prime thrn print given number is prime  if it not then print given number is not prime

