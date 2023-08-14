import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import dbConnect from './config/mongo.js'
import { postRouter } from './routes/posts.js'
import { creationRouter } from './routes/create.js'

const app = express()

app.use(cors())
app.use(express.json({limit: '50mb'}))

app.use('/community', postRouter)
app.use('/create', creationRouter)

dotenv.config()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})

dbConnect()