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

