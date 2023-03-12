import { createImage } from '../controllers/openaiControllers.js'

const routes = app => {

    app.get('/', (req, res) => res.send('<h1>InstAI API</h1>'))

    //OPENAI ROUTES
    app.post('/create', createImage)
    //DB
    //ENVIARE EN BASE64 LA FOTO AL HOST DE CLOUDINARY Y LUEGO ENVIARE A MI DB LA URL QUE ME GENERE CLOUDINARAY

    //POST
    //GET

}

export default routes