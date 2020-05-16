const express = require('express')
const provinceRouter = require('../routers/province')

const app = express()

app.get("/", (req, res) => {
    res.status(200).send({"status" : "OK"})
})

app.use('/province', provinceRouter)

module.exports = app
