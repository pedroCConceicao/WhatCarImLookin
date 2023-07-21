//Database simulation by object list
const carros = [
    {
        id: 1,
        modelo: 'Voyage',
        brand: 'Volkswagen',
        price: 33900,
        passengers: 5,
        condution: ['Cidade', 'Rodovia'],
        fueltype: 'Flex',
        traction: '4x2',
        load: 462,
        space: 'Mediano',
        transmission: 'Automatico',
        consume: 8.95
    },
    {
        id: 2,
        modelo: 'Fox',
        brand: 'Volkswagen',
        price: 24900,
        passengers: 5,
        condution: 'Cidade',
        fueltype: 'Flex',
        traction: '4x2',
        load: 270,
        space: 'Pouco',
        transmission: 'Manual',
        consume: 10.75
    },
    {
        id: 3,
        modelo: 'Amarok',
        brand: 'Volkswagen',
        price: 168879,
        passengers: 5,
        condution: 'Off-road',
        fueltype: 'Diesel',
        traction: '4x4',
        load: 1280,
        space: 'Alto',
        transmission: 'Automatico',
        consume: 9.05
    }

]

//User car variables
const preco = 50000;
const passageiros = 3;
const conducao = ["Cidade", "Off-Road"];
const tracao = "4x2";
const carga = 345;
const espaco = 300;
const transmissao = ["Manual", "Automatico"];
const consumo = 9.00;

//Variable that will save the best car option for the user
let carros_viaveis;

// PRICE - FIRST FILTER
carros_viaveis = carros.filter( (carro) => carro.price <= preco);

console.log("Primeiro Filtro:");
console.log(carros_viaveis);


// PASSENGERS - SECOND FILTER
carros_viaveis = carros.filter( (carro) => carro.passengers >= passageiros );

console.log("Segundo filtro:");
console.log(carros_viaveis);

// CONDUTION - THIRD FILTER
carros_viaveis = carros_viaveis.filter( (carro) => carro.condution.includes(conducao) );

console.log("Terceiro filtro:");
console.log(carros_viaveis);

// TRACTION - FOURTH FILTER
carros_viaveis = carros_viaveis.filter( (carro) => carro.traction.includes(tracao) );

console.log("Quarto Filtro:");
console.log(carros_viaveis);

