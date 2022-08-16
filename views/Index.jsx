const React = require('react')

class Index extends React.Component {
    render() {
        const { Kicks } = this.props
        const imgstyle = {
            width: "17vw",
            position: "relative"
        }
        return (
            <html lang="en">
            <head>              
                <link rel="stylesheet" href="/index.css" />
                <title >Ray's Sneakers Shop</title>
            </head>
            <body className="site">               
                <header className="mastheader"><a href='/' className="mastheader">Ray's Sneakers Shop</a></header>
                 <h1  className="page-title">Air Jordans</h1>
                                      
                <main className="main-content">                   
                    {Kicks.map((Kicks) => {
                        return(
                            <div className='product'>
                                <div>
                                <h3 className='sneakername'>{Kicks.name}</h3> 
                                </div>
                                <div>
                                    <a href={`/Kicks/${Kicks.id}`}>
                                        <div style={imgstyle}>
                                        <img src={`${Kicks.img}`}></img>
                                        {Kicks.stock ?
                                        <h3 className='price-tag'>{Kicks.price}</h3>
                                        : <h3 className='price-tag'>SOLD OUT</h3>
                                        }
                                        
                                        </div>
                                        </a>
                                </div>
                                <div className='buttons-div'>
                                    <div>
                                        <form action={`/Kicks/${Kicks.id}?_method=DELETE`}method='POST'><button type='submit' className='buttons'>Delete</button></form>
                                    </div>
                                    
                                    <div>
                                        <a href={`/Kicks/${Kicks.id}/edit`}><button className='buttons'>Edit</button></a> 

                                    </div>
                                    <div>
                                    <button className='buttons' id='buy-button'>BUY</button>
                                    </div>
                                    
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        )
                    })}                
                </main>
                <aside className="sidebar">
                    <a href="/Kicks/new" className="sidebar"><button className='buttons'>Create a new Sneaker</button></a>
                    <p>Air Jordan is a line of basketball shoes and athletic clothing produced by American corporation Nike. The first Air Jordan shoe was produced for Hall of Fame former basketball player Michael Jordan during his time with the Chicago Bulls in late 1984 and released to the public on April 1, 1985. The shoes were designed for Nike by Peter Moore, Tinker Hatfield, and Bruce Kilgore.</p>
                    </aside>
                <footer className="footer"></footer>
            </body>
            </html>
        )
    }
}

module.exports = Index