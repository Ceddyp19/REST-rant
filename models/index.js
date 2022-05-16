//imports 
const mongoose = require('mongoose')

//Database connection 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

//DB Collection exports
module.exports.Place = require('./places')
