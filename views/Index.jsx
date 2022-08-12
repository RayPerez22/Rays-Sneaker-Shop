const React = require('react')

class Index extends React.Component {
    render() {
        const { Kicks } = this.props
        return (
            <html lang="en">
            <head>              
                <link rel="stylesheet" href="/index.css" />
                <title >Ray's Sneakers</title>
            </head>
            <body className="site">               
                <header className="mastheader"><a href='/'>Ray's Sneakers Shop</a></header>
                 <h1  className="page-title">Air Jordans</h1>
                                      
                <main className="main-content">                   
                    {Kicks.map((Kicks) => {
                        return(
                            <div className='product'>
                                <div>
                                <h3 className='sneakername'>{Kicks.name}</h3> 
                                </div>
                                <div>
                                    <a href={`/Kicks/${Kicks.id}`}><img src={`${Kicks.img}`}></img></a>
                                </div>
                                <div className='buttons'>
                                    <form action={`/Kicks/${Kicks.id}?_method=DELETE`}method='POST'><button type='submit'>Delete</button></form>
                                    <a href={`/Kicks/${Kicks.id}/edit`}><button>Edit</button></a>
                                    {Kicks.stock ?
                                        <div>
                                            <button>Add to Cart</button>
                                            <h3>{Kicks.price}</h3>
                                        </div> :
                                        <h3>OUT OF STOCK</h3>
                                    }
                                    
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        )
                    })}                
                </main>
                <aside className="sidebar"><a href="/Kicks/new" className="sidebar"><button>Create a new Sneaker</button></a></aside>
                <footer className="footer"></footer>
                <nav>
                
                </nav>
            </body>
            </html>
        )
    }
}

module.exports = Index