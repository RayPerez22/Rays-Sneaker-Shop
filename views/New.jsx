const React = require('react')

class New extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="/index.css" />
        </head>
        <body className="site">
        <header className="mastheader"><a href='/' className="mastheader" ><img src="/images/Logo.png" alt="" id='mastheader'/></a></header>
          <h1 className="page-title">New Sneaker</h1>
          <main className="main-content">
            <form action="/Kicks/" method="POST">
              Name: <input type="text" name="name" /><br/>
              Image URL: <input type="text" name="img"/><br/>
              Stock: <select name="stock" id="">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select><br/>
              Price: <input type="text" name="price" value="$"/><br/>
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

module.exports = New