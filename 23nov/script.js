document.getElementById("myForm").addEventListener("submit", validate);

function validate(e){
    // to prevent the defult behaviour of form submission
    e.preventDefault();
    // fetch input value
                                                                  // syntheticevent????
    let myname = document.getElementById("name").value;
    let myemail = document.getElementById("email").value;
    let password = document.getElementById("psw").value;
    let confirmpassword = document.getElementById("cnfpsw").value;

    console.log(myname, myemail, password, confirmpassword);
    if(
        myname === ""||
        myemail === ""||
        password === ""||
        confirmpassword === ""
    ){
        alert("all feilds reqiured");
        return false;
    }
if(password !== confirmpassword){
    alert("password does not match");
    return false;
}
alert("form submitted successfully");
}