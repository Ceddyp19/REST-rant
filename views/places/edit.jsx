const React = require('react')
const Def = require('../default.jsx')
// import {useState} from 'react'

function edit_form(data) {
    // const place = useState(data.place); 

    // console.log('this is place', place)
    return (
        <Def>
            {/* {console.log('this data', data.place)} */}
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className='form-control' id="name" name='name' value={data.place.name} required/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input className='form-control' id="pic" name='pic' value={data.place.pic} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input className='form-control' id="city" name='city' value={data.place.city} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input className='form-control' id="state" name='state' value={data.place.state} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input className='form-control' id="cuisines" name='cuisines' value={data.place.cuisines} />
                        </div>
                        <button type="submit" className="btn">
                            Finish Edit
                        </button>
                    </div>
                </form>

            </main>
        </Def>
    )
}

module.exports = edit_form
