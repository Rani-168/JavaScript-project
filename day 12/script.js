// DOM // Document object model
// tree like structure of html or content of web page  //in this tree is data structure
// DOM manipulation
// document
// in dom all nodes are object



// for content change


//step 1. select element


// there have five ways to select element

// // i. by id  // this function return  you element given id else no return null
// document.getElementById("heading");

// // ii. by class  // it will be return you HTMLCollection(array like object) //  array like means we can acces there using index // if else show the emptyelement
// document.getElementsByClassName("para");
// // for 1st class
// //para[0];

// // iii. by tag  // it will be return you HTMLCollection(array like object) //  array like means we can acces there using index // if else show the emptyelement
//  document.getElementsByTagName("p");


// // iv. by query selector
// // for single selector we use // it we return single element // it take 1st element only
// document.querySelector(".para");

// // for all selector we use // it return nodelist
// document.querySelectorAll(".para");


// 2. content change there have three ways

// // i. innerHTML //dont use that much why beacuse security resion
const h1Element = document.getElementById("heading");

// function changeContent(){
//     h1Element.innerHTML = "h1 html added by js"
// }

// // ii. innerText 
// function changeContent(){
//     h1Element.innerText = "h1 html added by js"
// }

// iii. textContent




// B.style change

function changeStyle(){
    if( h1Element.style.display == "none"){
       h1Element.style.display ="block";
    }else{
        h1Element.style.display = "none";
    }
   
    
}








