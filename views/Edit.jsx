const React = require('react')

class Edit extends React.Component {
  render() {
    const { Kicks } = this.props
    return (
      <html>
        <head>
            <link rel="stylesheet" href="/index.css" />
        </head>
        <div>
            <h1>Ray's Sneaker</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action={`/kicks/${Kicks.id}?_method=PUT`} Method="POST">
              Name: <input value={Kicks.name} type="text" name="name" /><br/>
              Image URL: <input value={Kicks.img} type="text" img="img"/><br/>
              Stock: <select name="" id="">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select><br/>
              price: <input type="text" name="price" value="$"/><br/>
              <input type="submit" name="" img="" value="Update Sneaker"/>
            </form>
            <a href="/Kicks">Back</a>
        </div>
      </html>
      )
    }
  }

module.exports = Edit