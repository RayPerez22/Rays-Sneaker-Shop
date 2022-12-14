const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const Kicks = require('./models/Kicks.js')
const kicksData = require('./utilities/kicksData')
app.use(express.static('public'))

//DB connection
mongoose.connect(process.env.MONGO_URI)

mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

//middleware
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.use((req, res, next) => {
    console.log(`I run for all routes`)
    next();
 })

//setting up our views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//our routes
app.get('/',(req, res) =>{
    res.render('Home')
})

app.get('/Kicks/', (req, res) =>{
    Kicks.find({}, (error, allKicks)=>{          
           res.render('Index', { 
            Kicks: allKicks
        })
    })
})



app.post('/Kicks/', (req, res) => {
    Kicks.create(req.body, (error, createdKicks) => {
        res.redirect('/Kicks/')
    })
})

//new
app.get('/Kicks/new', (req, res) =>{
    res.render('New')
})

//show route
app.get('/Kicks/:id', (req, res) => {
    console.log(req.params.id)
    Kicks.findById(req.params.id, (err, foundKicks) => {
        res.render('Show', {
            kicks: foundKicks
        })
    })
})

app.put('/Kicks/:id/buy', (req, res) => {
    Kicks.findByIdAndUpdate(req.params.id, { $inc: { stock: -1 } },
         (error, kicks) => {
        res.redirect(`/Kicks/${req.params.id}`)
    })
})

//delete
app.delete('/Kicks/:id', (req, res) => {
    Kicks.findByIdAndRemove(req.params.id, (err,data) => {
        res.redirect('/Kicks')
    })
})

//edit
app.get('/Kicks/:id/edit', (req, res) => {
    Kicks.findById(req.params.id, (error, foundKicks) => {
        if(!error) {
            res.render('Edit', {
                Kicks: foundKicks
            })
        }else {
            res.send({
                message: error.message
            })
        }
    })
})

app.put('/Kicks/:id', (req, res) => {
    Kicks.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, kicks) => {
        res.redirect(`/Kicks/${req.params.id}`)
    })
})



app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
}) 