const express = require("express")
const path = require("node:path")

const app = express()

app.use(express.static(path.join(__dirname,"www")))

app.use((req,res,next) =>
{
    console.info(`[DevServer] ${req.method} ${req.url} | ${res.statusCode} ${res.statusMessage}`)
    next()
})

app.listen(8080)