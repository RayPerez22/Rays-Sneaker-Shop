const React = require('react')

class Home extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="/index.css" />
        </head>
        <body className='homestyle'>
          <div class='home'>
            <img src="/images/Logo.png" alt="" className='sneakerlogo'/>
          </div>
          <div id='homebutton' className='buttons'>
              <a href="/Kicks">Enter</a>
          </div>
        </body>
       
      </html>
      )
    }
  }

module.exports = Home