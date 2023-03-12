import openai from '../config/openai.js'

export const createImage = async(req, res) => {

    try {
        const { prompt } = req.body
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        })

        const { data } = response
        const img64 = data.data[0]
        const { b64_json: image_64 } = img64
        res.status(200).json({ image:  image_64})
        
    } catch (error) {
        res.status(400).json({error: error})
    }

}
