const router = require('express').Router()

//INDEX
router.get('/', (req, res) => {
    //res.send('GET /places')
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'images/diner.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'images/cafe.jpg'
      }]
      
    res.render('places/index', { places })
})

//POST
router.post('/', (req, res) =>{
  res.send('this is the post page')
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