var myButton = document.querySelector('Button');
var myHeading =document.querySelector('h1');

function setUserName() {
 var myName= prompt("enter your name");
 localStorage.setItem('name',myName);
 myHeading.innerHTML = 'Hi, ' + myName;
}

if(!localStorage.getItem(name))
{
    setUserName();
}
else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = "Hi" + storedName ;
}

myButton.onclick = function()
{
    setUserName();
}