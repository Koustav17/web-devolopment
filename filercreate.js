var fs= require('fs'); 

fs.writeFile('myNewfile.txt'  ,'I came from Kolkata and My name is Koustav' ,function(error){
if(error) throw err;
console.log('Saved!');
});