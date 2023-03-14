import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    user: String,
    prompt: String,
    image: String
})


const Post = mongoose.model('Post', postSchema)

export default Post