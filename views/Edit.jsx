const React = require('react')

class Edit extends React.Component {
  render() {
    const { Kicks } = this.props
    return (
      <html>
        <head>
            <link rel="stylesheet" href="/index.css" />
        </head>
        <body className="site">
        <header className="mastheader"><a href='/' className="mastheader" ><img src="/images/Logo.png" alt="" id='mastheader'/></a></header>
          <h1 className="page-title">Ray's Sneakers Shop</h1>
          <main className="main-content">
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
              Price: <input type="text" name="price" value={Kicks.price}/><br/>
              <p><label for="description">Description:</label></p>               
              <textarea name="description" id="description" cols="30" rows="10" value=''></textarea><br />
              <input type="submit" name="" img="" value="Update Sneaker" className='buttons'/>
            </form><br />
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

module.exports = Edit