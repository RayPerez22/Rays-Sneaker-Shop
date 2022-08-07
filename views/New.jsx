const React = require('react')

class New extends React.Component {
  render() {
    return (
      <html>
        <head>
            {/* <link rel="stylesheet" href="/index.css" /> */}
        </head>
        <div>
            <h1>Ray's Sneakers</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/Kicks" method="POST">
              Name: <input type="text" name="name" /><br/>
              Image URL: <input type="text" img="img"/><br/>
              <input type="submit" name="" img="" value="Add Sneaker"/>
            </form>
            <a href="/Kicks">Back</a>
        </div>
      </html>
      )
    }
  }

module.exports = New