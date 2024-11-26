function addition(){
    let num1 =parseInt(document.getElementById("input1").value);
    let num2 =parseInt(document.getElementById("input2").value);
    var result =num1 + num2;
    document.getElementById("demo").innerHTML = result;
}
function subtraction(){
    let num1 =parseInt(document.getElementById("input1").value);
    let num2 =parseInt(document.getElementById("input2").value);
    var result =num1 - num2;
    document.getElementById("demo").innerHTML = result;
}
function multiply(){
    let num1 =parseInt(document.getElementById("input1").value);
    let num2 =parseInt(document.getElementById("input2").value);
    var result =num1 * num2;
    document.getElementById("demo").innerHTML = result;
}
function divide(){
    let num1 =parseInt(document.getElementById("input1").value);
    let num2 =parseInt(document.getElementById("input2").value);
    var result =num1 / num2;
    document.getElementById("demo").innerHTML = result;
}


function display(){
    let text =(document.getElementById("myinput").value);
     var result =text;
    document.getElementById("demo").innerHTML = result;
}