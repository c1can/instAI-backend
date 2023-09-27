import { Router } from 'express'
import { getPosts, addPost, editPost } from '../controllers/communityControllers.js'

export const postRouter = Router()

postRouter.get('/', getPosts)
postRouter.post('/share', addPost)
postRouter.put('/edit', editPost)



