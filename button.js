var myButton=document.querySelector('Button');
function myFunction() {
    var hour = new Date().getHours(); 

    var greeting;
    if (hour > 12) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";

    }
    document.getElementById("demo").innerHTML = greeting;


}
    myButton.onclick=function(){
        myFunction();
    }

