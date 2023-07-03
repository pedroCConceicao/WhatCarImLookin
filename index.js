//JS Object to replace the Database, since we don't got one lol
const carros = [
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        passageiros: 4,
        road: ["Off-road", "Highway", "City"]
    },
    {
        marca: 'Citroen',
        modelo: 'C3',
        passageiros: 4,
        road: ["Highway", "City"]
    },
    {
        marca: 'Chevrolet',
        modelo: 'Onix',
        passageiros: 2,
        road: ["Highway", "City"],
    }
]

const passageiros = 3
const uso = "Off-road"
let carros_viaveis;

carros_viaveis = carros.filter( (carro) => carro.passageiros >= passageiros )

console.log("Primeiro filtro:")
console.log(carros_viaveis)

carros_viaveis = carros_viaveis.filter( (carro) => carro.road.includes(uso) )

console.log("Segundo filtro:")
console.log(carros_viaveis)