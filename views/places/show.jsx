const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    //check whether there are comments
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((total, comment) => {
            return total + comment.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++){
            stars +='⭐️ '
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😍˜»'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt={data.place.name} width='300' height='auto' />
                <div>
                    <h2>Rating</h2>
                    {rating}
                </div>
                <div>
                    <h2>Description</h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                </div>
                <div>
                    <hr />
                    <h2>Comments</h2>
                    {comments}
                </div>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                    Edit
                </a>

                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
            <footer>
                <form method='POST' action={`/places/${data.place.id}/comment`}>
                    <div className='form-group'>
                        <label htmlFor='content'>Content</label>
                        <textarea className='form-control' id='content' name='content' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='author'>Author</label>
                        <input className='form-control' id='author' name='author' required />
                    </div>

                    <div className='form-group form-label'>
                        <label htmlFor='stars'>Rating</label>
                        <input type='range' className='form-control form-range' id='stars' name='stars' max='5' min='1' step='.5' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='rant'>Rant?</label>
                        <input type='checkbox' className='form-control' id='rant' name='rant' />
                    </div>
                    <input className='btn btn-primary' type="submit" value="Add Comment" />
                </form>
            </footer>
        </Def>
    )
}

module.exports = show
