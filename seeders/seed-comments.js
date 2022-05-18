const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })
    let comment2 = await db.Comment.create({
        author: 'Hungry Henry',
        rant: false,
        stars: 4.5,
        content: 'Man, I was just hungry...it was aight though'
    })
    let comment3 = await db.Comment.create({
        author: 'Parched Peter',
        rant: false,
        stars: 3.6,
        content: 'The seafood messed my stomach up a little bit, but it tasted really good going in...just not sure about coming out.'
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)
    place.comments.push(comment2.id)
    place.comments.push(comment3.id)
    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()
