//imports 
require('dotenv').config()
const DBCONNECTION = process.env.MONGO_URI
const mongoose = require('mongoose')

//Database connection 
mongoose.connect(DBCONNECTION, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

//DB Collection exports
module.exports.Place = require('./places')
