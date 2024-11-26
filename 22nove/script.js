//addevent listner


let button = document.getElementById("btn");

button.addEventListener("click", display1);

button.addEventListener("mouseover", function(){
    console.log("hello from mouseover event");
});


//querry selector

let h1 = document.querySelectorAll("h1");
    console.log(h1);


    h1[0].innerHTML = "hello from querry selector";
    h1[0].style.color ="black";
    h1[0].style.backgroundColor ="blue";