const React = require('react')
// const Kicks = require('../models/Kicks')
class Show extends React.Component {
  render () {
   const { kicks } = this.props
   console.log(kicks)
    return (
      <html>
        <head>
            <title>Ray's Sneakers</title>
            <link rel="stylesheet" href="/index.css" />
        </head>
        <body>
        <div>
          <h1>Ray's Sneakers</h1>
          <h2>{kicks.name}</h2>
          <img src={`${kicks.img}`}></img>
          <form action={`/Kicks/${kicks.id}?_method=DELETE`}method='POST'><button type='submit'>Delete</button></form>
          <a href={`/kicks/`}>Back</a>
          
        </div>
        </body>       
      </html>
      )
     }
   }


module.exports = Show