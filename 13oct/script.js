console.log("hello");
window.alert("hello");
document.write("hello");
document.getElementById("demo").innerHtml = "hello";
// var , let ,const
var global1 = "john";
var global2 = "dow";
var global3 = "harry";
// variable are stored in globalscope
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(b);
    console.log(c);
}
console.log(a);

