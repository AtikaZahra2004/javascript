function display(){
    console.log("hello world");
}
var name="atika";
var age=21;
function show(){
    document.getElementById("demo").innerHTML = name + " "+ age;
}

// question
function cube(){
    var number = prompt("enter any number");
    document.getElementById("demo").innerHTML = number*number*number;
}
// question
function change(){
    demo.innerHTML ="atika"
    demo.style.color = "red";
    demo.style.backgroundColor = "yellow";
}
