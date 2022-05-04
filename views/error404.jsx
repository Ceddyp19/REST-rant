const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src='/images/smiley.jpg'/>
              <p>Photo by:<a href='https://unsplash.com/@jacquiemunguia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Jacquiline Munguia</a> on <a href='https://unsplash.com/s/photos/happy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a></p>
          </main>
      </Def>
    )
}
  

module.exports = error404
