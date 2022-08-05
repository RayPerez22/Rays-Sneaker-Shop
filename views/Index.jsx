const React = require('react')

class Index extends React.Component {
    render() {
        const { Kicks } = this.props
        return (
            <html lang="en">
            <head>
                <title>Ray's Kicks</title>
            </head>
            <body>
                <div>
                    <h1>Ray's Kicks</h1>
                </div>
            </body>
            </html>
        )
    }
}

module.exports = Index