const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const app = express()

// import routes
const todoRoutes = require('./routes/todoRoutes')

// setup port
const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`)
})

// middleware
app.set('views', path.join(__dirname, 'views'))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(cors())
app.use(logger('dev'))
app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// serve static page at root
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

// set up the rest of the routes
app.use('/api/todos', todoRoutes)

// catch 404
app.get('*', function (req, res) {
  res.status(404).send({ message: 'Oops! Not found.' })
})
