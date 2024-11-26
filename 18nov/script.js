// object literals
const person = {
    name: "atika",
    age: 20,
    city: "bhopal",
};
// to know the dataa type of person
console.log(typeof person);
console.log(person.name)
console.log(person.age)
console.log(person.city)
// array(t)
const number = [10, 20, 30,89];
console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
// function 
// it is the way to group code together yuo can run anytime anytime
function sayHello(){
    console.log("heloo everyone");
    alert("hello");
    document.write=("Hello");
}
// function calling
sayHello();

// parameter
// parameters are when you are declaring a function 
function addition(num1, num2){
    return num1 + num2;
}
// aruments
// argument while calling the function
console.log(addition(100, 500));
document.getElementById("demo").innerHTML = addition(100, 400);


function cube(number){
    return number * number * number;
}
console.log(cube(3));

// function expression
const multiply = function (x,y){
    return x*y;
};

console.log(multiply(3*4));

// arrow function
const divide = (a,b)=>{
    return a/b;
}
console.log(divide(100, 20));