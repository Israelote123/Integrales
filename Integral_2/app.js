
//incremental_6

function registro()
{
var nombre=prompt("Introduce tu nombre","");
var apellido=prompt("Introduce tus apellidos","");
var fechaNacimiento=prompt("Introduce tu fecha de nacimiento con formato DD/MM/AAAA","DD/MM/AAAA");
var cursos=parseInt(prompt("Introduce los cursos de programacion que realizaste",""));
var comparacion=fechaNacimiento.split("/");

cursos = cursos + 1;
console.log(cursos);

if(comparacion[2]<2000)
{
    alert(nombre+" "+apellido +", "+"¿Estas seguro que eres un programador junior?");
}
else{
    alert(nombre+" "+apellido +", "+"Eres un programador junior");
}

}



// Incremental 7//

function photos(){
var numeroFotos = Math.floor(Math.random() * (11 - 1) + 1);
var totalLikes = 0;
var likes = 0;
var fotosMenosDiezLikes = 0;
for (let i = 0; i <numeroFotos; i++) {
    likes=parseInt(prompt("Ingrese el numero de likes de la foto " + (i + 1)));
    totalLikes = totalLikes + likes;
    if(likes < 10){
        fotosMenosDiezLikes++;
    }
}

console.log("El total de likes de todas tus fotos es " + totalLikes);

console.log("Hay " + fotosMenosDiezLikes + "foto(s) con menos de 10 likes");

alert("Hay " + fotosMenosDiezLikes + " foto(s) con menos de 10 likes");
}

// Incremental 8//

function altas()
{
    const register = [{id: 1, name: "Job daniel", alta: new Date("2021-09-16")}, 
    {id: 5, name: "Juan", alta: new Date("2021-05-01")},
    {id: 6, name: "Jose", alta: new Date("2021-01-01")},
    {id: 14, name: "Citlalli", alta: new Date("2021-03-15")},
    {id: 600, name: "Maria", alta: new Date("2021-03-11")}
    ];
    
    let idProfile = parseInt(prompt("Inserte el id del usuario"));
    
    let nameReport = () => {
        return arrayRegister.find(user => user.id===idProfile).name;
    }
    
    let dateRegister = () => {
        let year = arrayRegister.find(user => user.id===idProfile).alta.getFullYear();
        let month = arrayRegister.find(user => user.id===idProfile).alta.toLocaleString('default', {month: 'long'});
        let day = arrayRegister.find(user => user.id===idProfile).alta.getDate()+1;
    
        if (day > 31) {
            day = 32 - day + 1;
        }
        return  year + '-' + month + '-' + day;
    }
    
    let report = () => {
        console.log(nameReport() + ', fecha alta: ' + dateRegister());
    }
    
}

//Incremental 9 //

function amigos()
{
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
}




