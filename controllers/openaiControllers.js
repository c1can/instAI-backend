import { openai } from '../config/openai'

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
        const img64 = data[0]
        
        res.status(200).json({ success: img64 })
        
    } catch (error) {
        res.json({error: error  })
    }

}