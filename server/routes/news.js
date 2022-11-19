import {Router} from 'express'
import {createPost, getAll, getById, updatePost,} from '../controllers/news.js'

const router = new Router()

// Create Post
router.post('/', createPost)

// Get All News
router.get('/', getAll)

// Get Post By ID
router.get('/:id', getById)

// Update Post
router.put('/:id', updatePost)

export default router