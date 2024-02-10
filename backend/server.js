const express = require('express')
const app = express()
const port = 9000

app.listen(port,() => console.log( `server listening to the ${port}`))

app.get("/", (req,res) => {
    res.send("server connection sucessful")
})


