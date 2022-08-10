const React = require('react')

class Index extends React.Component {
    render() {
        const { Kicks } = this.props
        return (
            <html lang="en">
            <head>
                <title>Ray's Sneakers</title>
                <link rel="stylesheet" href="/index.css" />
            </head>
            <body>               
                <header>Ray's Sneakers</header>                           
                <div>                   
                    {Kicks.map((Kicks) => {
                        return(
                            <div class="site">
                                <div>
                                <h2>{Kicks.name}</h2> 
                                </div>
                                <div>
                                    <a href={`/Kicks/${Kicks.id}`}><img src={`${Kicks.img}`}></img></a>
                                </div>
                                <div>
                                    <form action={`/Kicks/${Kicks.id}?_method=DELETE`}method='POST'><button type='submit'>Delete</button></form>
                                </div>
                                <div>
                                    <a href={`/Kicks/${Kicks.id}/edit`}>Edit</a>
                                </div>
                            </div>
                        )
                    })}                
                </div>
                <nav>
                    <a href="/Kicks/new">Create a new Sneaker</a>
                </nav>
            </body>
            </html>
        )
    }
}

module.exports = Index