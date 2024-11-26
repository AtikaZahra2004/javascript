var heading = document.getElementById("demo");
// declare 5 variable for name age city course & country and dispaly in console
var name="atika zhara";
var age=21;
var city="Delhi";
var course="Computer sceince";
var country="India";
console.log(name+ " "+age +" "+city +" "+course +" "+country);


// declare 2string variables and contact them into one variable and display in alert
var name="anshu";
var city="bhopal";
heading.innerHTML=name + " " + city;
 alert(name);
alert(city); 


// Declare three variable for firstname ,lastname,hobby and display it in innerhtml in one line
var firstName="Atika";
var lastName="khan";
var hobby="studying";
heading.innerHTML=firstName + " "+ lastName +" "+ hobby;


// take user name and age from user and display it in alert ,console and innerhtml
var userName= prompt("Enter your name:");
var userAge= prompt("Enter your age");
console.log(userName+ " " + userAge);
heading.innerHTML=userName + " " + userAge;
alert(userName);
alert(userAge);

// take 2 variables of your name and age and display it using the function in innerhtml and console
var name = "atika";
var age = 12;
function displayInfo(){
    console.log(name + " "+ age);
    document.getElementById("demo").innerHTML = name +" "+age;
}
displayInfo();

// write a function that takes 3 parameters and perform arithmetic operations on that.
function add(a, b, c){
    return a+ b+ c;
}
console.log(add(3, 4, 6));



//  Write a function to display your name in console ,alert and innerhtml of any element.
function display(){
    let name = "atikazahra";
    console.log(name);
    alert(name);
    document.getElementById("demo").innerHTML = name;
}

// Write a function to get the value of an input tag and display it in alert , console and innerhtml

function displayinput(){
    let text =(document.getElementById("input1").value);
     var result =text;
    document.getElementById("demo").innerHTML = result;
    alert(result);
    console.log(result);
}

// . Write a function to get the values from 3 input tags and display it in innerhtml in string form (concatinate).
function displayvalue(){


 
        let value1 =document.getElementById("input2").value;
        let value2 =document.getElementById("input3").value;
        let value3 =document.getElementById("input4").value;
        let result = value1 +' '+value2 + ' '+value3;
        document.getElementById("demo").innerHTML =  result;

    }