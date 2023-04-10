const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/db')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todo')
 
//Load config
dotenv.config({ path: './config/.env' })

// Passport config
require('./config/passport')(passport)

//connects to Database
connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl:process.env.MONGO_URI }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', homeRoutes)
app.use('/todo', todoRoutes)

app.listen(process.env.PORT || 8000, (req, res) => {
    console.log("Hello")
})