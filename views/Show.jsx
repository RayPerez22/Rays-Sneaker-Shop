const React = require('react')
class Show extends React.Component {
  render () {
   const { kicks } = this.props
    return (
      <html>
        <head>
            <title>Ray's Sneakers Shop</title>
            <link rel="stylesheet" href="/index.css" />
        </head>
        <body className="site">
          <header className="mastheader"><a href='/' className="mastheader">Ray's Sneakers Shop</a></header>
          <h1 className="page-title">Ray's Sneakers Shop</h1>
        <main className="main-content">
          <div className='product'>
            <div className='sneakername'>
              <h2>{kicks.name}</h2>
              </div>                      
              <img src={kicks.img} id="img"></img>
            <div className='buttons-div'>
              <form action={`/Kicks/${kicks.id}?_method=DELETE`}method='POST'><button type='submit' className='buttons'>Delete</button></form>
              {kicks.stock ?
                <div className='show-price'><h3 >{kicks.price}</h3></div> :
                <div className='out-of-stock'><h3>OUT OF STOCK</h3></div>
              }              
            </div>             
          </div>  
        </main>
        <aside className="sidebar">
          <button className='buttons'><a href={`/kicks/`}>Back</a></button><br />
          <p id='description'>{kicks.description}</p>
        </aside>
        <footer className="footer"></footer>
        </body>       
      </html>
      )
     }
   }


module.exports = Show