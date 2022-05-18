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

//POST Place
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

//POST Comment
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  console.log('Object Id', req.params)
  db.Place.findById(req.params.id)
    .then(place => {
      console.log('find place by id')
      db.Comment.create(req.body)
        .then(comment => {
          console.log('Create comment')
          place.comments.push(comment.id)
          place.save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
          console.log('caught err at comment creation', err)
          res.render('error404')
        })
    })
    .catch(err => {
      console.log('caught err at place discovery', err)
      res.render('error404')
    })
  req.body.rant = req.body.rant ? true : false

})

//NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

//EDIT 
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/edit', { place })
    })
    .catch(err => {
      res.render('error404')
    })
})

//DELETE 
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})


//SHOW 
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      res.render('places/show', { place })
    }).catch(err => {
      console.log('err', err)
      res.render('error404')
    })


})

//PUT
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(place => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log*=('err', err)
    res.render('error404')
  })
})



module.exports = router