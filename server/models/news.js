import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        imgURL: {
            type: String,
            default: true
        },
    },
    {timestamps: true},
)
export default mongoose.model('Post', PostSchema)