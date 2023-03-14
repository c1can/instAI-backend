import cloudinary from 'cloudinary'

const cloudinaryConfig = {
    cloud_name: process.env.CLOUDINARY_CLOUD,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
}


cloudinary.config(cloudinaryConfig)

export default cloudinary