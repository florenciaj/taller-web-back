require('dotenv').config()
const express = require('express')
const cors = require('cors')

// initialization
const app = express()
require('./database')

// settings
app.set('port', process.env.PORT || 3000)


// middlewares
app.use(cors())
app.use(express.json())


// routes
const apiRoute = require('./routes/route')
app.use('/', apiRoute)

// server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})