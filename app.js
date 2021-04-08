const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('combined'))

app.get("/", (req, res) => {
    console.log("Responding to root server")
    res.send("Hello from root")
})


app.get("/users", (req,res) => {
    var user1 = {firstName: "first", lastName: "last"}
    res.json(user1)
    // res.send("nodemon auto updates")
})

app.listen(3003, () => {
    console.log("server is up and listening")
})