// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// Controllers & Routes
/*
import our router
The first argument to app.use, /places sets all routes in the places controller relative to /places. 
This means that /places will be added in front of any other path we define in the controller.
*/
app.use('/places', require('./controllers/places'))
//Home page
app.get('/', (req, res) => {
      //res.send('Hello World!')
    res.render('home')
})

//if user requests non-existent page
app.get('*', (req, res) => {
    //res.status(404).send('<h1>404 Page</h1>')
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)
