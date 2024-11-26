let button = document.getElementById("btn");
// jb function ko pass krte tab ()ka use nahi krte
button.addEventListener("click", display);
button.addEventListener("mouseover" , function(){
    console.log("heloooooooooooo");
});














// regular function
function dispaly(){
    alert("ahhhh");
}
// function expression
const display1 = function(){
    alert("function expression called");
};
// arrow function
const display2 = () => {
    alert("arrow function called");
};