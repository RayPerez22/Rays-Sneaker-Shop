const React = require('react')

class Home extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="/index.css" />
        </head>
        <div class='home'>
            <h1>Ray's Sneakers Shop</h1>
        </div>
        <div id='homebutton' className='buttons'>
            <a href="/Kicks">Enter</a>
        </div>
      </html>
      )
    }
  }

module.exports = Home