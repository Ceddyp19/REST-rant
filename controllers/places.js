const router = require('express').Router()
const db = require('../models')

//INDEX
router.get('/', (req, res) => {
  //res.send('GET /places')
  db.Place.find()
    .then(places => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

//POST
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      if (err.name == "ValidationError") {
        let message = 'Validation Error: '
        // TODO: Genereate error message(s)
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
      }
        res.render('places/new', { message })
      } else {
        console.log('err', err)
        res.render('error404')
      }
    })
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
    res.render('places/edit', { place: places[id] })
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
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/show', { place })
    }).catch(err => {
      console.log('err', err)
      res.render('error404')
    })


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