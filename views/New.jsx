const React = require('react')

class New extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="/index.css" />
        </head>
        <div>
            <h1>Ray's Sneakers</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/Kicks/" method="POST">
              Name: <input type="text" name="name" /><br/>
              Image URL: <input type="text" name="img"/><br/>
              Stock: <select name="" id="">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select><br/>
              price: <input type="text" name="price" value="$"/><br/>
              <input type="submit" name="" value="Add Sneaker"/>
            </form>
            <a href="/Kicks">Back</a>
        </div>
      </html>
      )
    }
  }

module.exports = New