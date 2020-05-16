const express = require('express')
const provinceRouter = require('../routers/province')
const cityRouter = require('../routers/city')

const app = express()

app.get("/", (req, res) => {
    res.status(200).send({"status" : "OK"})
})

app.use('/province', provinceRouter)
app.use('/city', cityRouter)

module.exports = app
