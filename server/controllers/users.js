import User from '../models/users.js'

// Add User
export const addUser = async (req, res) => {
    try {
        const {name, username, avatar} = req.body

        const newUser = new User({
            name,
            username,
            avatar,
        })

        await newUser.save()

        res.json({
            newUser,
            message: "Success",
        })
    } catch (error) {
        res.json(
            {
                message: "Something Wrong in Controller"
            }
        )
    }
}

// Get All Users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()

        if (!users) {
            return res.json({message: 'No Users'})
        }

        res.json(users)
    } catch (error) {
        res.json(
            {
                message: "Something Wrong in Controller"
            }
        )
    }
}