//3. async await

// async function loadProducts(){

// const response = await fetch("https://dummyjson.com/products")

// const data = await response.json();

// function(){

//     let products = data.products;
//     let container = document.getElementById("container");

//     products.forEach(function(product){

//         let card = document.createElement("div");
//         card.className = "card";

//         card.innerHTML = `
//         <img src="${product.thumbnail}">
//         <h4>${product.title}</h4>
//         <p>Price: ₹${product.price}</p>
//         <p>Discount: ${product.discountPercentage}%</p>
//         `;

//         container.appendChild(card);

//     });

// }
// }

async function loadProducts(){

try{
     const response = await fetch("https://dummyjson.com/products/1")

const data = await response.json();
console.log(data);
}catch(error){
    console.log(error);
}
}  


// if there error come then we use 
// try catch block // to hanle run time errors

// 1.query parameters
// 2. params: /2
//3. body// extra info
//4. headers //when use sensivtive info.

//jwt
//practice on dummyjson.com


//const response = await fetch("https://dummyjson.com/products/1", {
// method: "POST",
// body= {},
// headers: {}
// // });



// 1️⃣ Try–Catch Block (Exception Handling)

// A try–catch block is used to handle runtime errors so that the program does not crash.

// Example in Java:

// try {
//     int a = 10 / 0;  // error
// }
// catch (Exception e) {
//     System.out.println("Error occurred: " + e);
// }

// Explanation

// try → code that may cause error

// catch → handles the error

// Purpose: prevent program crash and handle runtime errors.

// 2️⃣ Query Parameters

// Query parameters are values sent in the URL after ?.

// Example:

// https://api.example.com/products?category=mobile

// Here:

// category=mobile

// is a query parameter.

// Used for:

// Filtering data

// Searching data

// Example API:

// GET /products?limit=10
// 3️⃣ Route Params (URL Parameters)

// Params are dynamic values in the URL path.

// Example:

// /users/2

// Here 2 is a parameter.

// Example in backend:

// GET /users/:id

// If request is:

// /users/2

// Then id = 2.

// 4️⃣ Request Body

// Body contains extra information sent with requests (mostly POST / PUT).

// Example JSON body:

// {
//  "name": "Rani",
//  "age": 21
// }

// Used when:

// Creating data

// Updating data

// 5️⃣ Headers

// Headers contain metadata or sensitive information.

// Examples:

// Authentication token

// Content type

// Example:

// Authorization: Bearer token
// Content-Type: application/json
// 6️⃣ JWT

// JSON Web Token (JWT) is used for secure authentication between client and server.

// Structure of JWT:

// Header.Payload.Signature

// Purpose:

// User authentication

// Secure API access

// Session management

// Example:

// Authorization: Bearer <token>
// 7️⃣ Practice API

// A very good API for practice is:

// DummyJSON API

// Example request:

// https://dummyjson.com/products

// You can practice:

// GET products

// POST data

// PUT update

// DELETE data

// Using tools like:

// Postman.

// ⭐ Example API Practice (JavaScript)
// fetch("https://dummyjson.com/products")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));
