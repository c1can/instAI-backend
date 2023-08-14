import { Router } from 'express'
import { createImage } from '../controllers/openaiControllers.js'

export const creationRouter = Router()

creationRouter.post('/', createImage)