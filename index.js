require('dotenv').config()

const express = require('express')
const app = express() // making an instance of express

const port = 4000;

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/facebook', (req, res) => {
    res.send("You are in facebook")
})

app.get('/google/youtube', (request, responce) => {
    responce.send("You are in youtube in google")
})

app.get('/login', (request, responce) => {
    responce.send('<h1> You are login at chai aur code </h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})