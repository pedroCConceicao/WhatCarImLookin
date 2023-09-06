//Importing object list
const carros = require('./carList.js')

//User car variables
const userPrice = 50000;
const userPassangers = 3;
const userCondution = ["Cidade", "Off-Road"];
const tracao = "4x2";
const carga = 345;
const espaco = "Mediano";
const transmissao = ["Manual", "Automatico"];
const consumo = 9.00;

//Variable that will save the best car option for the user
let carros_viaveis; //JS Object

// PRICE - FIRST FILTER
carros_viaveis = carros.filter( (carro) => carro.price <= userPrice);

console.log("Primeiro Filtro:");
console.log(carros_viaveis);

// PASSENGERS - SECOND FILTER
carros_viaveis = carros_viaveis.filter( (carro) => carro.passengers >= userPassangers ); //he gonna filter the list that were filtered

console.log("Segundo filtro:");
console.log(carros_viaveis);

// CONDUTION - THIRD FILTER
carros_viaveis = carros_viaveis.filter( (carro) => carro.condution.includes(userCondution) );

console.log("Terceiro filtro:");
console.log(carros_viaveis);

// TRACTION - FOURTH FILTER
carros_viaveis = carros.filter( (carro) => carro.traction.includes(tracao) );

console.log("Quarto Filtro:");
console.log(carros_viaveis);

// LOAD - FIFTH FILTER
carros_viaveis = carros.filter( (carro) => carro.load <= carga);

console.log("Quinto Filtro:");
console.log(carros_viaveis);
