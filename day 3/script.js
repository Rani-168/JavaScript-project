let infoStudents = {   // object  it is a collection of key value pairs
    name: "Rani",
    age: 22,
}; 
console.log(typeof infoStudents);
console.log(infoStudents); 

infoStudents.name = "ankita";
console.log(infoStudents); 

console.log(infoStudents.name); // or console.log(infoStudents["name"]); // to access the value of a key in an object we can use dot notation or bracket notation

infoStudents.city = "pune";
console.log(infoStudents);

delete infoStudents.age; // dont use delete operator to delete the properties of an object it is not a good practice 
console.log(infoStudents);

let age;
console.log(age); // undefined it is a data type that represents the absence of a value or a variable that has been declared but not assigned a value 
age = 22;
console.log(age); // 22

let username = null; // null it is a data type that represents THE INTENTIONAL absence of any object value it is often used to indicate that a variable should have no value or that an object property should be empty
console.log(username); // null
console.log(typeof username); // object it is a bug in javascript that typeof null returns object but it should return null


let s1 = Symbol("hello"); // symbol it is a primitive data type that represents a unique identifier it is often used to create unique keys for object properties
console.log(s1); // Symbol(hello)
console.log(typeof s1); // symbol

let s2 = Symbol("hello");
console.log(s1 === s2); // false because each symbol is unique even if they have the same description

const s3 = null; // const it is a keyword that is used to declare a variable that cannot be reassigned it is often used to declare constants or variables that should not be changed
console.log(s3); // null
console.log(typeof s3); // object it is a bug in javascript that typeof null returns object but it should return null

// cont can be change but cant not be reassigned it means that we can change the properties of an object declared with const but we cannot reassign the variable to a new value
const info = {
    name: "Rani",
    age: 22,
};
console.log(info);
info.name = "ankita"; // we can change the properties of an object declared with const
console.log(info);
//info = { // we cannot reassign the variable to a new value


//opraters  are used to perform operations on variables and values in javascript there are different types of operators in javascript such as arithmetic operators, assignment operators, comparison operators, logical operators, etc.
//arithmetic operators are used to perform mathematical operations on numbers in javascript there are different types of arithmetic operators in javascript such as addition, subtraction, multiplication, division, modulus, exponentiation, etc.
let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a ** b); // 100000
console.log(0/0); // NaN it is a special value that represents Not a Number it is returned when an operation that is expected to return a number fails to do so
console.log(10/0); // Infinity it is a special value that represents infinity it is returned when a number is divided by zero
console.log(-10/0); // -Infinity it is a special value that represents negative infinity it is returned when a negative number is divided by zero
console.log(10/20);   
// 12 it is a pre increment operator it increments the value of a before returning it

//assigmnment operators are used to assign values to variables in javascript there are different types of assignment operators in javascript such as =, +=, -=, *=, /=, %=, **=, etc.







  
