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