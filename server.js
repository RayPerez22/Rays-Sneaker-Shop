const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003
// const mongoose = require('mongoose')
const kicks = require('./models/Kicks.js')

//DB connection
// mongoose.connect(process.env.MONGO_URI);

// mongoose.connection.once('open', () => {
//     console.log('connected to mongo');
// });

//middleware
// app.use(express.urlencoded({extended: false}))

// app.use((req, res, next) => {
//     console.log(`I run for all routes`);
//     next();
//  });

//setting up our views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//our routes
app.get('/',(req, res) =>{
    res.send("Welcome to the Ray's Sneaker Shop!")
})

app.get('/kicks/', (req, res) =>{
    res.render('kicks')
    // Kicks.find({}, (error, allKicks)=>{
           
        //    res.render('Index', { 
        //     kicks: allKicks
        //})
    //})
})

//show routes
app.get('/kicks/')


app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
}) 