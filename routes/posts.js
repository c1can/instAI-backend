import { Router } from 'express'
import { getPosts, addPost } from '../controllers/communityControllers.js'

export const postRouter = Router()

postRouter.get('/', getPosts)
postRouter.post('/share', addPost)



