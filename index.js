const express = require('express');
const mysql = require('mysql2/promise');
const { isAsyncFunction } = require('util/types');
const connection = mysql.createConnection({
    host: '191.55.128.101',
    port: 53306,
    user: 'pedroc',
    password: 'Techers123$',
    database: 'pedroc_tcc',
});

async function teste(){
    
    const [rows, fields] = await (await connection).execute('SELECT * FROM `carros`');

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