//event and event handling:
// select the elemnet
const button = document.querySelector("button");

// 2nd way

button.onclick = dosomething;



// 3rd way

// button.addEventListener("click", dosomething);
// button.addEventListener("dblclick", dosomething);
// button.addEventListener("", dosomething);


function dosomething(){
    console.log("do something");
}

// tiktak 
// calculater
// todolist