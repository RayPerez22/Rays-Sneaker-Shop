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
        <header className="mastheader"><a href='/' className="mastheader" ><img src="/images/Logo.png" alt="" id='mastheader'/></a></header>
          <h1 className="page-title">{kicks.name}</h1>
        <main className="main-content">
          <div className='product shoe'>
            <div className='sneakername'>
              <h2 className='kicksname'>{kicks.name}</h2>
              </div>                      
              <img src={kicks.img} id="img"></img>
            <div className='buttons-div'>
              <form action={`/Kicks/${kicks.id}?_method=DELETE`}method='POST'><button type='submit' className='buttons'>Delete</button></form>

              {kicks.stock ?
              <>
                <form action={`/Kicks/${kicks.id}/buy?_method=PUT`}method='POST'><button className='buttons' id='showbuy-button'>BUY</button></form>
                <div className='show-price'><h3 >{kicks.price}</h3></div>
              </>
                : <div className='show-price'><h3>SOLD OUT</h3></div>
              }              
            </div>
            <div>
              {kicks.stock ?
              <h2 className='kicksname'>IN STOCK: {kicks.stock}</h2> :
              <h2 className='kicksname'>SOLD OUT</h2>
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