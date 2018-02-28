var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/home/koustav/web-devolopment/Image/download.jpeg') {
      myImage.setAttribute ('src','/home/koustav/web-devolopment/Image/roses_flowers_plant_216000.jpg');
    } else {
      myImage.setAttribute ('src','/home/koustav/web-devolopment/Image/download.jpeg');
    }
}