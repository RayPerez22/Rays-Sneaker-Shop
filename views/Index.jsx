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
                {/* <ul>
                    {Kicks.map((Kicks) => {
                        return(
                            <li class="site">
                                <h2>{Kicks.name}</h2>
                                <a href={`/Kicks/${Kicks.id}`}><img src={`${Kicks.img}`}></img></a>
                                
                                <form action={`/Kicks/${Kicks.id}?_method=DELETE`}method='POST'><button type='submit'>Delete</button></form>
                                <a href={`/Kicks/${Kicks.id}/edit`}>Edit</a>
                            </li>
                        )
                    })}
                </ul> */}
                <div>                   
                    {Kicks.map((Kicks) => {
                        return(
                            <div class="site">
                                <divname>
                                <h2>{Kicks.name}</h2> 
                                </divname>
                                <divimg>
                                    <a href={`/Kicks/${Kicks.id}`}><img src={`${Kicks.img}`}></img></a>
                                </divimg>
                                <divbtn1>
                                    <form action={`/Kicks/${Kicks.id}?_method=DELETE`}method='POST'><button type='submit'>Delete</button></form>
                                </divbtn1>
                                <divbtn2>
                                    <a href={`/Kicks/${Kicks.id}/edit`}>Edit</a>
                                </divbtn2>
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