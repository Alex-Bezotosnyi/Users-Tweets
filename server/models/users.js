import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            // unique: true,
        },
        username: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
)

export default mongoose.model("Users", UserSchema)