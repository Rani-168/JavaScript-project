

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
function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}

greet("Alice");  // "Alice" is the argument

function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();
greet("Aman");