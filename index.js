const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/StudentDB'

const  app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connection established')
})

app.use(express.json())

const studentRouter = require('./routes/students')
app.use('/students',studentRouter)

app.listen(9000, () => {
    console.log('server started on port 9000')
})