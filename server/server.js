const path = require('path');

const http = require("http")

const express = require('express');

const socketIO = require("socket.io");
//console.log(path.join(__dirname, './../public'))
const publicpath = path.join(__dirname, './../public')

const app = express();
const port = process.env.PORT || 3000
app.use(express.static(publicpath));

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})