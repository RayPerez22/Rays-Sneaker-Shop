const React = require('react')
const Kicks = require('../models/Kicks')
class Show extends React.Component {
  render () {
   const kicks = this.props.kicks
   console.log(kicks)
    return (
      <html>
        <head>
            <title>Ray's Sneakers</title>
        </head>
        <body>
        <div>
          <h1>Ray's Sneakers</h1>
          <h2>{Kicks.name}</h2>
          <img src={`${Kicks.img}`} alt="" />
          <a href="/kicks">Back</a>
          
        </div>
        </body>       
      </html>
      )
     }
   }


module.exports = Show