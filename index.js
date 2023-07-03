const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'db.kasparyan.freeddns.org',
    port: 53306,
    user: 'pedroc',
    password: 'Techers123$',
    database: 'pedroc_tcc',
});
connection.connect( (error) => {
    console.log(error)
    connection.query("SELECT * FROM `carros`", (resposta) => {
        console.log(resposta)
    });

});
















// const passageiros = 3
// const uso = "Off-road"
// let carros_viaveis;

// carros_viaveis = carros.filter( (carro) => carro.passageiros >= passageiros )

// console.log("Primeiro filtro:")
// console.log(carros_viaveis)

// carros_viaveis = carros_viaveis.filter( (carro) => carro.road.includes(uso) )

// console.log("Segundo filtro:")
// console.log(carros_viaveis)