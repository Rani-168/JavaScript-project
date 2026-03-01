// Intermediate Level

//Factorial Calculation

// let num = 5;
// let mul = 1;
// for(let i = 1; i<= num; i++){
//     if(num>=1){
//         mul *= i;
//     }
//     else{
//         console.log("not a factorial number");
//     }
// }

// console.log(mul);



// Fibonacci Series Generator
// let num= 21;
// let a= 0;
// let b = 1;

// for(let i = 1; i<=num; i++){
//     console.log(a);
//     let c= a+b;
//     a=b;
//     b=c;
    
// }



// String Reversal

// let str = "Rani";
// let sum = "";
// for(let i=str.length-1 ; i>=0 ; i--){
//  sum += str[i];
// }
// console.log(sum);


// Prime Number Checker

// let num= 1;
// let count = 0;
// for( let i = 1; i<=num; i++){
   
//      if(num%i===0){
        
//         count++;
//     }
// }

// if(count===2){
//         console.log(" prime");
//        }
//     else{
//         console.log("not prime")
      
//     }



// // sum of digits

// let num = 123456;
// let sum = 0;

// while(num > 0){
//     sum += num% 10;
//     num = Math.floor(num/10);

// }
// console.log(sum);

// function sumOfDigit(){
//     let num = prompt("enter a number");
//     let sum =0 ;
//     while(num >0){
//         sum += num%10;
//         num = Math.floor(num/10);
//     }
//     alert(sum);
// }

// //Vowel Counter

// let str ="Rani";
// let sum = 0;
// for(let i = 0; i<str.length; i++){
//     if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" ||str[i]==="u" || str[i]==="A" || str[i]==="E" || str[i]==="I" || str[i]==="O" ||str[i]==="U" ){
//       sum ++;
      
//     }
// }
// console.log(sum);


// // OR

// let text = "Ankita";
// let count = 0;
// let Vowel = "aeiouAEIOU"

// for(let i=0; i<text.length; i++){
//     if(Vowel.includes(text[i])){
//         count ++;

//     }
// }

// console.log(count);



// 2nd largest number in an array


function secondLargest(arr){
    let unique = [...new Set(arr)]; // for remove duplicate value
    let sum = unique.sort((a, b) => b - a); // sort descending
    return sum[1];

}
console.log(secondLargest([10, 2, 20, 4]));



// short number

// let num = [8, 2, 4, 1]

// console.log(num.sort((a, b) => a-b ));




//Palindrome Checker

// function palindromeChecker(str){
//     let sum = "";
//     for(let i=str.length-1; i>=0; i--){
        
//         sum+=str[i];
//     }

//     if(sum === str){
//   console.log("true");
  
//      }
// else{
//    console.log("false");

// }
    
// }
//  palindromeChecker("rani");

//  palindromeChecker("ihi");


 // or 

//  function palindromeChecker(str) {
//     let reversed = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return reversed === str;
// }

// console.log(palindromeChecker("rani"));
// console.log(palindromeChecker("madam"));



// //Filter Even Numbers from an Array

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));









// check palindrome

function chickPalindorme(){
    let str = prompt("Enteer a string");
    let sum = "";
    for(i = str.length - 1; i >=0; i--){
        sum += str[i]; 
    }
     if(sum == str){
        alert("true");
      }else{
        alert("false");
      }
      
}











