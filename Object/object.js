var para = document.getElementById('p1');
var para2 = document.getElementById('p2');
var person={
    firstName: "Koustav",
    lastName:   "Singha",
    id: 1252104,
    fullName:function(){
        return this.firstName + " " + this.lastName + this.id;
    }
}
alert(person.fullName());