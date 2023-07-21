const mysql = require('mysql2/promise');
const { isAsyncFunction } = require('util/types');
const connection = mysql.createConnection({
    host: 'db.kasparyan.freeddns.org',
    port: 53306,
    user: 'pedroc',
    password: 'Techers123$',
    database: 'pedroc_tcc',
});

const preco = 30000;
const passengers = 3;
const condution = "Cidade";
const fueltype = "Flex";
const traction = "4x2";
const load = 350;
const space = "Mediano";
const transmission = "Automatic";
const consumo = 9.00;

//Saves the database over a object list
async function teste(){
    
    //rows = cars
    const [rows, fields] = await (await connection).execute('SELECT * FROM `carros`');

    //First Filter (Passengers)
    let viable_car = rows.filter( (car) => car.passengers >= passengers );
    console.log("Primeiro Filtro");
    console.log(viable_car);

}

teste();

















// const passageiros = 3
// const uso = "Off-road"
// let carros_viaveis;

// carros_viaveis = carros.filter( (carro) => carro.passageiros >= passageiros )

// console.log("Primeiro filtro:")
// console.log(carros_viaveis)

// carros_viaveis = carros_viaveis.filter( (carro) => carro.road.includes(uso) )

// console.log("Segundo filtro:")
// console.log(carros_viaveis)