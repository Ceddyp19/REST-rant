const router = require('express').Router()
const places = require('../models/places.js')

//INDEX
router.get('/', (req, res) => {
    //res.send('GET /places')
      
    res.render('places/index', { places })
})

//POST
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  //res.send('POST /places')
  res.redirect('/places')
})



//NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW 
router.get('/:id', (req, res) => {
  res.send('This is the show page')
})



module.exports = router