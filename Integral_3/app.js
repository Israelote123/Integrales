const url = 'https://jsonplaceholder.typicode.com/users';
let resultado;
let usuarioN=0;

function getUsuariosGit(){
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            resultado = json;
        })
        .then(()=>{
            usuarioN=parseInt(prompt("Ingrese el numero de usuario que quiere, debe ser del 1 al 10"))
            usuarioN--;
            while(usuarioN>9)
            {
                alert("Ingreso un numero no valido");
                usuarioN=parseInt(prompt("Ingrese el numero de usuario que quiere, debe ser del 1 al 10"))
                usuarioN--;
            }
            
        })
        .then(() => {
            document.getElementById("photo").innerHTML = `Usuario: ${resultado[usuarioN].name} <br>Nombre de usuario: ${resultado[usuarioN].username}`;
            document.getElementById("profile").innerHTML = `Direccion: ${resultado[usuarioN].address.street}, ${resultado[usuarioN].address.city}  <br>Telefono celular:  ${resultado[usuarioN].phone} <br> Empresa:  ${resultado[usuarioN].company.name} Email: ${resultado[0].email}`  ;
            document.getElementById("data").innerHTML = `Descripcion: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat, rerum natus dolorum inventore ab quos facere quidem illo dolorem tempore eius porro deleniti, tempora, vel voluptates et velit veniam.`;
            
        })
        .catch(error => {
            console.log("Error al solicitar los datos")
        })
}

getUsuariosGit()
