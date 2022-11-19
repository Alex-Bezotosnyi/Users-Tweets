import Post from '../models/news.js'
import User from '../models/users.js'

// Create News
export const createPost = async (req, res) => {
    try {
        const {title, content, imgURL} = req.body

        const newPost = new Post({
            title,
            content,
            imgURL,
        })
        await newPost.save()
        await User.findByIdAndUpdate(req.userId, {
            $push: {posts: newPost},
        })
        res.json({
            newPost,
            message: "Success"
        })
    } catch (error) {
        res.json(
            {
                message: "Error in Controller: Create News"
            }
        )
    }
}

// Get All News
export const getAll = async (req, res) => {
    try {
        const posts = await Post.find()
            .sort('-createdAt')

        if (!posts) {
            return res.json(
                {
                    message: "No News"
                }
            )
        }

        res.json({posts})
    } catch (error) {
        res.json(
            {
                message: "Error in Controller: Get All News"
            }
        )
    }
}

// Get News By ID
export const getById = async (req, res) => {
    try {
        const posts = await Post.findByIdAndUpdate(req.params.id,
        )
        res.json(posts)
    } catch (error) {
        res.json(
            {
                message: "Error in Controller: Get News By ID"
            }
        )
    }
}

// Update News
export const updatePost = async (req, res) => {
    try {
        const {title, content, imgURL, id} = req.body;
        const posts = await Post.findById(id);

        posts.title = title
        posts.content = content
        posts.imgURL = imgURL

        await posts.save();
        res.json({
            posts,
            message: "Success"
        });
    } catch (error) {
        res.json(
            {
                message: "Error in Controller: Update News",
            }
        )
    }
}