import { createImage } from '../controllers/openaiControllers.js'
import { addPost, getPosts } from '../controllers/communityControllers.js'

const routes = app => {

    app.get('/', (req, res) => res.send('<h1>InstAI API</h1>'))

    //OPENAI ROUTES
    app.post('/create', createImage)

    //DB
    app.get('/community', getPosts)
    app.post('/community-share', addPost)
}

export default routes