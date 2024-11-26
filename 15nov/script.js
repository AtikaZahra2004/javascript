var heading = document.getElementById("demo");
var name = "john doe";
var age = 24;
// concatination
console.log(name + " "+age);
heading.innerHTML = name + " "+age;
// to get the value from user
var userName = prompt("enter your name");
var userAge = prompt("enter your age");
heading.innerHTML = userName + " " +userAge;
var color=prompt("enter color");
var bgcolor=prompt("enter backgroundcolor");
heading.style.txtColor=color;
heading.style.backgroundColor=bgcolor;
// attribute
var myimage=document.getElementById("myimage");
myimage.src="1.jpg";