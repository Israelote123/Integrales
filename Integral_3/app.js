const url = 'https://jsonplaceholder.typicode.com/users';
let resultado;
var friend;
let userFriends = new Array();

class amigo{
    constructor(userId,nameUser,userName,email,address,phone,website,company){
        this.userId = userId;
        this.nameUser = nameUser;
        this.userName = userName;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
}

function traerAmigos(){
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            resultado = json;
            console.log(resultado);
        })
        .then(()=>{
            
            for( let x = 0; x < resultado.length; x++){
            friend = new amigo();
            friend.userId = resultado[x].id;
            friend.nameUser = resultado[x].name;
            friend.userName = resultado[x].username;
            friend.email = resultado[x].email;
            friend.address = resultado[x].address;
            friend.phone = resultado[x].phone;
            friend.website = resultado[x].website;
            friend.company = resultado[x].company;
            userFriends.push(friend);
            }
            console.log(userFriends);
        })
        .then(() => {
            for(let x = 0; x < 10; x++){      
            document.getElementById(`amigo${x}`).innerHTML = `${userFriends[x].userName}<br>${userFriends[x].company.name}`;
            }
        })
        .catch(error => {
            console.log("Error al solicitar los datos")
            console.log(error);
        })
}

traerAmigos();
