var para = document.querySelector('p');
para.addEventListner('click',updateName());


function updateName() {
    var name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
  }