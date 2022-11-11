const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todo')

//Load config
dotenv.config({ path: './config/.env' })

//connects to Database
connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/todo', todoRoutes)

app.listen(process.env.PORT, (req, res) => {
    console.log("Hello")
})