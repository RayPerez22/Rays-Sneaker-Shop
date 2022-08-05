const React = require('react')
class Show extends React.Component {
  render () {
   const kicks = this.props.kicks
   console.log(kicks)
    return (
      <html>
        <head>
            <title>Ray's Kicks</title>
        </head>
        <body>
        <div>
          <h1> Gotta Catch 'Em All </h1>
          
          <a href="/kicks">Back</a>
          
        </div>
        </body>       
      </html>
      )
     }
   }


module.exports = Show