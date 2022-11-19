import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import usersRoute from './routes/users.js'
import newsRoute from './routes/news.js'

const app = express()
dotenv.config()

// Constants
const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME
const dataBaseMongoose = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.zdaldce.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static('uploads'))

// Routes
app.use('/api/users', usersRoute)
app.use('/api/posts', newsRoute)

async function start() {
    try {
        await mongoose.connect(dataBaseMongoose)

        app.listen(PORT, () =>
            console.log(`Server started on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()