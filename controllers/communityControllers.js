import cloudinary from '../config/cloudinary.js'
import Post from '../models/postModel.js'

export const getPosts = async(req, res) => {
    try {
        const result = await Post.find({})

        return !result 
            ? res.status(400).end()
            : res.status(200).json(result)

    } catch (error) {
        console.log(error)
    }
}

export const addPost = async(req, res) => {
    const {prompt, user, image} = req.body

    if(prompt == '' && user == '' && image == '') {
        return res.status(400).json({ error: 'something went wrong' })
    }

    try {
        const result = await cloudinary.uploader.upload(image)

        const newPost = new Post({
            user,
            prompt,
            image: result.url
        })

        await newPost.save()
        res.status(200).json({ success: 'success' })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'error' })
    }
}