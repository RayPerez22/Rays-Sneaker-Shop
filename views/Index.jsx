const React = require('react')

class Index extends React.Component {
    render() {
        const { Kicks } = this.props
        return (
            <html lang="en">
            <head>
                <title>Ray's Sneakers</title>
            </head>
            <body>
                <div>
                    <h1>Ray's Sneakers</h1>
                </div>
                <ul>
                    {Kicks.map((Kicks) => {
                        return(
                            <li>
                                <a href={`/Kicks/${Kicks.id}`}></a>
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