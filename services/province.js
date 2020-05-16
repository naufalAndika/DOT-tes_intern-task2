const rajaongkir = require('../utils/rajaongkir')

const searchByName = async (name) => {
    try {
        const provinces = await rajaongkir.getProvinces()
        
        const province = provinces.find((p) => {
            return p.province == name
        })

        return province
    } catch (err) {
        throw err
    }
}

module.exports = {
    searchByName
}
