// const button = document.querySelector("button");

// // fuction declaration
// // fuction expression // it can understand the this kay word
// // arrow function // it cant understand the this kay word

// button.addEventListener("click", (event) =>{
//     console.log("hii", event);
// });

//Bom // window //localStorage// cookes// session

//task -dom:

let input = document.querySelector("input");

const button = document.querySelector("button");

const h1 = document.querySelector("strong");

button.addEventListener("click", () =>{
    let output = h1.innerText = "Hello!"+ input.value;

    document.body.append(output);

});


// onclike
// onsunbmit // used with form
//onchange // used to change input value





