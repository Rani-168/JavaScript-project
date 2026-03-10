// Dynamic Heading Creation

// const ElH1 = document.createElement("h1");
// ElH1.innerText = "Hello, world!"
// document.body.appendChild(ElH1);


// Generate Unordered List from an Array

// let string = ["Apple", "Banana", "Cherry"];

// const ul = document.createElement("ul");

// for(let i= 0; i<=string.length-1; i++){
//     const li = document.createElement("li");
//      li.innerHTML = string[i];
//     ul.appendChild(li);
// }

// document.body.appendChild(ul);


//Button to Change Background Color

// const color = document.querySelector("button");
// color.onclick = changeColor;

// function changeColor(){
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     let backcolor = "rgb(" + red + "," + green + "," + blue + ")";

//     document.body.style.backgroundColor = backcolor;

// }




// let images = [
// "https://picsum.photos/id/1015/300/200",
// "https://picsum.photos/id/1016/300/200",
// "https://picsum.photos/id/1018/300/200"
// ];

// let gallery = document.getElementById("gallery");

// images.forEach(function(url){

//     let img = document.createElement("img");

//     img.src = url;

//     gallery.appendChild(img);

// });


// const items = [
//     { price: 10, quantity: 2 },
//     { price: 5, quantity: 5 },
//     { price: 8, quantity: 3 }
// ];

// const totals = items.map(item => item.price * item.quantity);

// console.log(totals);



//for each  Print numbers multiplied by 2

// const number = [1, 2, 3, 4, 5];
// number.forEach(num =>{
//     console.log(num*2);
// });


// word length
const words = ["JavaScript", "React", "Node", "MongoDB"];

words.forEach(word => {
    console.log(word + " - " + word.length);
});

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 20000 }
];

products.forEach(product => {
    console.log(`Product: ${product.name}, Price: ${product.price}`);
});
