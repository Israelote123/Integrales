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

alert("Hay " + fotosMenosDiezLikes + "foto(s) con menos de 10 likes");