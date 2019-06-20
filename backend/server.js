const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

mongoose.connect('mongodb://localhost/fake_db', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(3001))
  .catch(e => console.log(e))
