let button = document.getElementById("demo");
function display(){
        demo.innerHTML = "this is my javascript";
        demo.style.color="black";
        demo.style.backgroundColor="yellow";
        demo.style.border="2px solid green";
        demo.style.borderRadius="10px";
    
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
    function area(){
        var length=prompt("enter length :");
        var width=prompt("enter width :");
        document.getElementById("demo").innerHTML = "Area of rectangle :"+lenght*width;
    }