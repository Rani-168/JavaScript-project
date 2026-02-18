
var name = "Rani";  // variable declaration and initialization
console.log(name);  // output: Rani
console.log("Hello, World!");



// This is a single-line comment in JavaScript
/* This is a multi-line comment in JavaScript
 It can span multiple lines and is often used for longer explanations or documentation.
*/

// hoisting - a JavaScript mechanism where variables and function declarations are moved to the top of their 
// containing scope during the compilation phase. 
// This means that you can use variables and functions before they are declared in the code, 
// but it can lead to unexpected behavior if not used carefully.


// scope - the context in which variables and functions are accessible in JavaScript.
// There are three types of scope in JavaScript:
// 1. Global Scope - variables and functions declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
// 2. Function Scope - variables and functions declared inside a function are in the function scope and can only be accessed within that function.
// 3. Block Scope - variables declared with let or const inside a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block.


// function greet(name) {   // 'name' is a parameter
//   console.log("Hello " + name);
// }

// greet("Alice");  // "Alice" is the argument

// function greet(name = "Guest") {
//   console.log("Hello, " + name);
// }

// greet();
// greet("Aman");


// let it is a keyword used to declare a block-scoped variable in JavaScript.
// It was introduced in ECMAScript 6 (ES6) to provide better scoping rules compared to the var keyword.
// Variables declared with let are only accessible within the block they are defined in, 
// which helps prevent issues related to variable hoisting and unintended global variables.


// ruls of naming variables in JavaScript:
// 1. Variable names must begin with a letter, underscore (_), or dollar sign ($).
// 2. Variable names can contain letters, digits, underscores, and dollar signs.
// 3. Variable names cannot be reserved keywords in JavaScript (e.g., var, let, const, if, else, etc.).
// 4. Variable names are case-sensitive (e.g., myVariable and myvariable are different variables).
// 5. Variable names should not start with a number.
// 6. camelCase is a common convention for naming variables in JavaScript, where the first word is lowercase and subsequent words are capitalized (e.g., myVariableName).


// for checking the type of a variable, we can use the typeof operator in JavaScript.
// It returns a string indicating the type of the operand. 
// For example:
let myString = "Hello, World!";
console.log(typeof myString); // Output: "string"

let myNumber = 42;
console.log(typeof myNumber); // Output: "number"
let myBoolean = true;
console.log(typeof myBoolean); // Output: "boolean"
let myUndefined;
console.log(typeof myUndefined);
// Output: "undefined"
let myNull = null;
console.log(typeof myNull); // Output: "object" (this is a quirk in JavaScript, null is considered an object)


// backticks are used in JavaScript to create template literals, which are a way to define strings that can span multiple lines and include embedded expressions.
// Template literals are enclosed by backticks (`) instead of single or double quotes. 
// They allow for easier string interpolation and multi-line strings without the need for concatenation or escape characters.
// ES6 in backticks were introduced to provide a more convenient way to work with strings, especially when you need to include variables or expressions within the string.
// For example:
let name = "Alice";
let greeting = `Hello, ${name}!`; // Using backticks and template literals
console.log(greeting); // Output: "Hello, Alice!"