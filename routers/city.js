const express = require('express')
const router = new express.Router()
const cityService = require('../services/city')

router.get('/search', async (req, res) => {
    const name = req.query.name

    try {
        const city = await cityService.searchByName(name)
        res.status(200).send(city)
    } catch (err) {
        res.status(500).send()
    }
})

module.exports = router
