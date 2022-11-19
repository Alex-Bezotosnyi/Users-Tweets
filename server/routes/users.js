import { Router } from 'express'
import { addUser, getAllUsers } from '../controllers/users.js'

const router = new Router()

// Add User
router.post('/', addUser)

// Get All Users
router.get("/", getAllUsers)

export default router