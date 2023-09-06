//I'm using this object list as a simulation over a database
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
        condution: ['Cidade'],
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
        condution: ['Off-road'],
        fueltype: 'Diesel',
        traction: '4x4',
        load: 1280,
        space: 'Alto',
        transmission: 'Automatico',
        consume: 9.05
    },

]

module.exports = carros