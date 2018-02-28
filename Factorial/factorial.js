var myButton = document.querySelector('button');
var myParagraph = document.querySelector('p');

function Fact(x){
  if (x === 0){
      return 1;

  }
  
      return x*Fact(x-1);

}

myButton.onclick = function()
{ 
var n = prompt('enter any number');
var x= Fact(parseInt(n));
console.log(x);
}
