import mongoose from 'mongoose'

const dbConnect = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Connected to MongoDB!'))
        .catch(() => console.log('Error!'))
}

export default dbConnect