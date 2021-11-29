var friends = [];
var value = "";
var i = 0;

alert("Ingrese el nombre de sus amigos")

function add(){

    while(value.toLowerCase().localeCompare("salir"))
    {
       value=prompt("Ingrese nombre el nombre de un amigo\n Si ya no tiene amigos que agregar ingrese salir");
       if(value.toLowerCase().localeCompare("salir"))
       {
           friends[i]=value;
           i++;
       } 
    }
    friends.sort((a, b) => a.localeCompare(b));
}
add();
console.log(friends);