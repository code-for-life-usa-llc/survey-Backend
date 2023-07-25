const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', () => {
    console.log("error 234")
})

database.once('connected', ()=> {
    console.log("connected 456")
})
const routes = require('./routes')
app = express();
app.use(express.json())
app.use('/api', routes)


app.listen(3000, ()=> {
    console.log('server started 2!')
})