var myParagraph=document.querySelector('p');

function Person(name){
    this.name=name;
    this.greeting=function(){
        prompt('Hii koustav'+ 'this.name' );
    }
}
    var parson1 = new Person('Singha');
/*Person1.name;
    Person1.greeting();*/
