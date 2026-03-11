//asyn
//setTimeout(() =>{
    // console.log("B");

    // },4000);

//setInterval(() =>{
    // console.log("B");

    // },2000);


    // call stack-> Web API -> task queue <->Event loop <-> call stack

    //for wiritng asyn code as follows

    //1. callback - we cant use This
    //2. promise  // eventual copmlition of task orit is js object which represent a task which will copmplete after some time  which may or may complete task
      // It can be in three state
      //1.pending
      //2.complete
      //3.failed(rejected)

      //fetch(api) 
     //

    //  const promise = fetch("https://random.dog/woof.json");
    //  promise
    //  .then((data) => data.json())
    // .then((actualData => {
    //     // console.log(actualData)
    //     console.log(actualData.url)
    //     img.setAttributes
    // }))
    //  .catch((error => console.log(error)));

    let button = document.querySelector("button")
    button.addEventListener("click", () =>{
       const promise = fetch("https://emojihub.yurace.pro/api/random");
     promise
     .then((data) => data.json())
    .then((actualData => {
        
        console.log(actualData)
       
    }))
     .catch((error => console.log(error)));
    })

    //dummyjson.com



    let num = 100;

    for(let i=1; i<=100; i++){
        console.log("Sorry ji 😔" );
    }
