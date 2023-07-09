//Database simulation
const carros = [
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        passageiros: 4,
        road: ["Off-road", "Highway", "City"],
        tracao: ["4x2"]
    },
    {
        marca: 'Citroen',
        modelo: 'C3',
        passageiros: 4,
        road: ["Highway", "City"],
        tracao: ["4x4"]
    },
    {
        marca: 'Chevrolet',
        modelo: 'Onix',
        passageiros: 2,
        road: ["Highway", "City"],
        tracao: ["AWD"]
    }
]

const passageiros = 3;
const uso = "Off-road";
const tracao = "4x2";
let carros_viaveis;

//First Filter
carros_viaveis = carros.filter( (carro) => carro.passageiros >= passageiros );

console.log("Primeiro filtro:");
console.log(carros_viaveis);

//Second Filter
carros_viaveis = carros_viaveis.filter( (carro) => carro.road.includes(uso) );

console.log("Segundo filtro:");
console.log(carros_viaveis);

//Third Filter
carros_viaveis = carros_viaveis.filter( (carro) => carro.tracao.includes(tracao) );

console.log("Terceiro Filtro:");
console.log(carros_viaveis);

