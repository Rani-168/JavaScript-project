// // strings // strings are immutable - can't change
// // ""
// //''
// //``  

// let city = "      Pune    ".trim;
// // let userName = Rani;

// // let sentance = `My name is ${userName} and I live in ${city}.`  

// // console.log(sentance);

// // length is not function it is property

// // string Function

// let change= city.toUpperCase();  
// let change2= city.toLowerCase();  
// let change3= city.at();  

// // substring(strat, end value)   // ex. read more
// //slice(strat, end value)

// //trim()- remove white space from string
// // trimStrat()
// //trimEnd()
// //split(splitter) - from where you want breck tha string then use split 
// // it split the given string and return array of splitted string

// includes()
//stratWith()
//endWith()

//replace()




// console.log(change);



// let string = "rani"
// let sum = " ";
// for(let i = string.length-1; i>=0; i-- ){
//     sum +=string[i];
// }
// console.log(sum);

function captialised(string){
   
    let value = string[0].toUpperCase() 
    let sum =  string.slice(1);
    let sum1= sum.toLowerCase();
    
    
    console.log(value + sum1);
}

captialised("RANI");





