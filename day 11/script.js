// let cities = ["pune", "delhi"]
// console.log(cities.length); 


// cities.splice(1, 2, "nagpur"); // (index, count , element to add)


// console.log(Array.isArray(cities));

// arr.pop();  is used to delete the last element from array  // it will returns delete element  
//arr.push(); is add to last element from array  // it will return new length of array
// arr.shift
// arr.unshift

//Array.isArray(cities); // for chicking it is array or not if array then give true else false.






// function addSum(nums){

// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum +=arr[i];

// }
// return sum;
// }

// let sum= addSum([1, 2, 3, 4]);
// console.log(sum);



// function higestNUm(arr){
   
//    let num = arr.sort((a,b) => b -a);
//     return num[0];
// }
// let num = higestNUm([1, 2, 3, 5, 8, 3]);
// console.log(num);


// function higestNUm(arr){
   
//    let num = arr.sort((a,b) => b -a);
//     return num[0];
// }
// let num = higestNUm([1, 2, 3, 5, 8, 3]);
// console.log(num);



// function lengthOfLongestSubstring(s) {
//     let left = 0;
//     let max = 0;
//     const set = new Set();

//     for (let right = 0; right < s.length; right++) {
//         while (set.has(s[right])) {
//             set.delete(s[left]);
//             left++;
//         }
//         set.add(s[right]);
//         max = Math.max(max, right - left + 1);
//     }
//     return max;
// }

// let max =lengthOfLongestSubstring("bbbscd");
// console.log(max);



function secondlargest(num){
    let largest = num[0];
    for(let i = 1 ; i<=num.length; i++ ){
        if(num[i] > largest){
            largest = num[i];
     
        }
      
    }

    return largest;
      

}

let maxNum = secondlargest([20, 3, 60, 30, 10]);

console.log(maxNum);