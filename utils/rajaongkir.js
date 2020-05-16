const axios = require('axios')

const headers = {
    'key': process.env.RAJAONGKIR_APIKEY
}

const getProvinces = async () => {
    try {
        const response = await axios.get(process.env.RAJAONGKIR_URL + '/province', {
            headers
        })

        return response.data.rajaongkir.results
    } catch (err) {
        console.log(err)
    }
}

const getCities = async () => {
    try {
        const response = await axios.get(process.env.RAJAONGKIR_URL + '/city', {
            headers
        })

        return response.data.rajaongkir.results
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getProvinces,
    getCities
}
