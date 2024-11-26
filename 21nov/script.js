let mypara =document.getElementById("demo")
function display(){
mypara.innerHTML = "this is my javascript";
}
function styling(){
    mypara.style.color="black";
    mypara.style.backgroundColor="yellow";
    mypara.style.border="2px solid green";
    mypara.style.borderRadius="10px";
}
// attribute
var input1 =document.getElementById("myinput");
console.log(input1);
function change(){
    input1.value ="indore";
    var myimage=document.getElementById("myimage");
myimage.src="s.jpg";
}
// arrow function