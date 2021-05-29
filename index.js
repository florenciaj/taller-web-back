require('dotenv').config()
const express = require('express')

// initialization
const app = express()


// settings
app.set('port', process.env.PORT || 3000)


// middlewares
app.use(express.json())


// routes
const apiRoute = require('./routes/route')


// server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})