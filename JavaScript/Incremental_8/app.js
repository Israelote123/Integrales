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

report();