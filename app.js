import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})

routes(app)