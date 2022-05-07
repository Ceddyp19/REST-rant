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

//EDIT 
router.get('/:id/edit', (req, res) => {
  // res.send('this is the edit page')
  let id = Number(req.params.id)
  if (isNaN(id) || !places[id]) {

    res.render('error404')

  } else {
    places.splice(id, 1)
    res.render('places/edit', {place: places[id]})
  }
})

//DELETE 
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id) || !places[id]) {

    res.render('error404')

  } else {
    places.splice(id, 1)
    res.redirect('/places')
  }

})


//SHOW 
router.get('/:id', (req, res) => {
  // res.send('This is the show page')
  let id = Number(req.params.id)
  console.log('hitting show route', id)

  if (isNaN(id) || !places[id]) {

    res.render('error404')

  } else {

    res.render('places/show', { place: places[id], id })

  }
})

//PUT
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
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

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})



module.exports = router