//  comperason operators are used to compare two values in javascript there are different types of comparison operators in javascript such as ==, ===, !=, !==, >, <, >=, <=, etc.
// ascii values are used to compare two strings in javascript the string with the higher ascii value is considered greater than the string with the lower ascii value
console.log("a" > "b"); // false because the ascii value of "a" is 97 and the ascii value of "b" is 98
console.log("abc" > "abd");
// true because the ascii value of "c" is 99 and the ascii value of "d" is 100
console.log("abc" > "ab"); // true because the ascii value of "c" is 99 and the ascii value of "" is 0
console.log(10 > 20); // false because 10 is less than 20
console.log(10 < 20);
// true because 10 is less than 20
console.log(10 >= 10); // true because 10 is equal to 10
console.log(10 <= 10); // true because 10 is equal to 10
//A-Z 65-90
//a-z 97-122

// equality operators are used to compare two values in javascript there are different types of equality operators in javascript such as ==, ===, !=, !==, etc.
console.log(10 == "10"); // true because == operator performs type coercion and converts the string "10" to a number before comparing it to the number 10
console.log(10 === "10"); // false because === operator does not perform type coercion and compares the number 10 to the string "10" which are not equal
console.log(10 != "10");    // false because != operator performs type coercion and converts the string "10" to a number before comparing it to the number 10
console.log(10 !== "10"); // true because !== operator does not perform type coercion and compares the number 10 to the string "10" which are not equal 

// logical operators are used to perform logical operations on boolean values in javascript there are different types of logical operators in javascript such as &&, ||, !, etc.
console.log(true && true); // true because both operands are true
console.log(true && false);
// false because one of the operands is false
console.log(false && false); // false because both operands are false
console.log(true || true); // true because at least one of the operands is true
console.log(true || false); // true because at least one of the operands is true
console.log(false || false); // false because both operands are false
console.log(!true); // false because the operand is true
console.log(!false); // true because the operand is false
// & | ^ ~ are bitwise operators that perform bitwise operations on numbers in javascript there are different types of bitwise operators in javascript such as & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift), >>> (unsigned right shift), etc.
console.log(5 & 3); // 1 because the binary representation of 5 is 101 and the binary representation of 3 is 011 and the result of the bitwise AND operation is 001 which is 1 in decimal
console.log(5 | 3); // 7 because the binary representation of 5 is 101 and the binary representation of 3 is 011 and the result of the bitwise OR operation is 111 which is 7 in decimal
console.log(5 ^ 3); // 6 because the binary representation of 5 is 101 and the binary representation of 3 is 011 and the result of the bitwise XOR operation is 110 which is 6 in decimal
console.log(~5); // -6 because the binary representation of 5 is 101 and the result of the bitwise NOT operation is 010 which is -6 in decimal


// assignment operaters it is used for assiging values to variables in javascript there are different types of assignment operators in javascript such as =, +=, -=, *=, /=, %=, **=, etc.
let x = 10; 
x += 5; // x = x + 5
console.log(x); // 15
x -= 3; // x = x - 3
console.log(x); // 12

// ternary operator it is a conditional operator that takes three operands in javascript it is often used as a shorthand for an if-else statement the syntax of the ternary operator is condition ? expression1 : expression2 if the condition is true, the operator returns the value of expression1 otherwise it returns the value of expression2
let age = 22;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Yes because the condition age >= 18 is true  // condition ? task1 : task2 if the condition is true the print task1 otherwise print task2

// typeof operator it is used to determine the data type of a value in javascript the syntax of the typeof operator is typeof operand it returns a string that represents the data type of the operand
console.log(typeof 10); // number because 10 is a number
console.log(typeof typeof "hello"); // string because the typeof operator returns a string that represents the data type of the operand which is "string" in this case

// increment and decrement operators are used to increment or decrement the value of a variable in javascript there are two types of increment and decrement operators in javascript such as pre-increment and post-increment for increment operators and pre-decrement and post-decrement for decrement operators the syntax of the increment and decrement operators is variable++ for post-increment, ++variable for pre-increment, variable-- for post-decrement, and --variable for pre-decrement
let a = 10;
console.log(a++);
// 10 because the post-increment operator returns the value of a before incrementing it
console.log(a);
// 11 because the post-increment operator increments the value of a after returning it
console.log(++a); // 12 because the pre-increment operator increments the value of a before returning it


