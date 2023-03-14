import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes/routes.js'
import dbConnect from './config/mongo.js'

const app = express()

app.use(cors())
app.use(express.json({limit: '50mb'}))

dotenv.config()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})

routes(app)
dbConnect()