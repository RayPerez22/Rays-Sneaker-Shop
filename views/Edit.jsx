const React = require('react')

class New extends React.Component {
  render() {
    const Kicks = this.props.Kicks
    return (
      <html>
        <head>
            <link rel="stylesheet" href="/index.css" />
        </head>
        <div>
            <h1>Ray's Sneaker</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action={`/Kicks/${Kicks.id}?_method=PUT`} Method="POST">
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