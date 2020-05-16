const rajaongkir = require('../utils/rajaongkir')

const searchByName = async (name) => {
    try {
        const cities = await rajaongkir.getCities()

        const city = cities.find((c) => {
            return c.city_name == name
        })

        return city
    } catch (err) {
        throw err
    }
}

module.exports = {
    searchByName
}
