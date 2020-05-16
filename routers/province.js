const express = require('express')
const router = new express.Router()
const provinceService = require('../services/province')

router.get('/search', async (req, res) => {
    const name = req.query.name
    
    try {
        const province = await provinceService.searchByName(name)
        res.status(200).send(province)    
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router
