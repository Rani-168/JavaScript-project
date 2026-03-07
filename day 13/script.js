//3.classes:
//by two way
// 1. el.classesName()
//2. el.classList.add("class name")/.remove/.contains - used for checking given class is present or not /.toggle -used remove and add if given given class present then remove else add.


// const H1El = document.getElementsByClassName("H1El");

// function changeStyle(){
//     H1El.classList.toggle("para"); 
// }

//4.attributes // to work with attributes three importent function
// 1. el.getAttribute("key");
// 2. el.setAttributes("key", "value"); // it update key value pair
//3. el.removeattributes("key"); //remove the key 



//5.cterate and add element

// how to create element:
let para = document.createElement("p")//it only add in memory // it only create that element and return the created element

function CreateAndAddElement(){
    const para = document.createElement("p")
    para.innerText="rani";
    
// for add element:
 document.body.append(para);

}

function changeToImage1(){
    document.getElementById("myImage").src = "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?cs=srgb&dl=pexels-houzlook-3797991.jpg&fm=jpg";
}
function changeToImage2(){
    document.getElementById("myImage").src = "https://c.ndtvimg.com/2021-04/tdh9mob8_home-decor-650_625x300_12_April_21.jpg";
}

function changeToImage3(){
    document.getElementById("myImage").src = "https://bonito.in/wp-content/uploads/2021/10/Blog-Detail-01-1.jpg";
}




// create code button when we click on button dark with using css varibles






