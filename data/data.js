const { faker } = require('@faker-js/faker');

const createProduct = () => {

    return {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
        image: faker.image.urlPicsumPhotos({ width: 400, height: 400 })
    }
}

const products = faker.helpers.multiple(() => createProduct(), {
    count: 5
})


const createVehicle = () => {
    return {
        id: faker.string.uuid(),
        brand: faker.vehicle.manufacturer(),
        description: faker.commerce.productDescription(),
        model: faker.vehicle.model(),
        price: faker.commerce.price(),
        image: faker.image.urlPicsumPhotos({ width: 600, height: 400 })
    }
}

const vehicles = faker.helpers.multiple(() => createVehicle(), {
    count: 5
})


const createPerson = () => {
    return {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.location.streetAddress(),
        image: faker.image.personPortrait({ size: 256 })
    }
}

const persons = faker.helpers.multiple(() => createPerson(), {
    count: 5
})

module.exports = { products, vehicles, persons }