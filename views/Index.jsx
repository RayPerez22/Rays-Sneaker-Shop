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
                <div>
                    <h1>Ray's Sneakers</h1>
                </div>
                <ul>
                    {Kicks.map((Kicks) => {
                        return(
                            <li>
                                <h2>{Kicks.name}</h2>
                                <a href={`/Kicks/${Kicks.id}`}><img src={`${Kicks.img}`}></img></a>
                                
                                <form action={`/Kicks/${Kicks.id}?_method=DELETE`}method='POST'><button type='submit'>Delete</button></form>
                                <a href={`/Kicks/${Kicks.id}/edit`}>Edit</a>
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/Kicks/new">Create a new Sneaker</a>
                </nav>
            </body>
            </html>
        )
    }
}

module.exports = Index