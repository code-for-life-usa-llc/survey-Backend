const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', () => {
    console.log("connected")
})
const routes = require('./routes')
app = express();
app.use('/api', routes)


app.listen(300, ()=> {
    console.log('server started!')
})