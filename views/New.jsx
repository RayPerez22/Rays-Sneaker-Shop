const React = require('react')

class New extends React.Component {
  render() {
    const { kicks } = this.props
    return (
      <html>
        <head>
            <link rel="stylesheet" href="/index.css" />
        </head>
        <body className="site">
          <header className="mastheader"><a href='/' className="mastheader">Ray's Sneakers Shop</a></header>
          <h1 className="page-title">Ray's Sneakers Shop</h1>
          <main className="main-content">
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
              <p><label for="description">Description:</label></p>               
              <textarea name="description" id="description" cols="30" rows="10"></textarea><br />
              <input type="submit" name="" value="Add Sneaker" className='buttons'/>
            </form><br/>
            </main>
            <aside className="sidebar">
          <button className='buttons'><a href={`/kicks/`}>Back</a></button>
          </aside>
        <footer className="footer"></footer>
        </body>
      </html>
      )
    }
  }
{/* description: <input type="text" name='description'/><br/> */}
module.exports = New