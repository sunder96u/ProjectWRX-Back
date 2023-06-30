const { User } = require('../models')

// Find All Users
const allUsers = async (req, res) => {
      try {
            const users = await User.find()
            if(!user) throw Error ('User not found')
            res.status(200).json(users)
      } catch (e) {
            console.log(e)
            res.status(500).send('User not found')
      }
}

// Find Users By ID
const findUserById = async (req, res) => {
      try {
            const { id } = req.params
            const user = await User.findById(id)
            if(!user) throw Error ('User not found')
      } catch {
            console.log(e)
            res.status(500).send('User not found')
      }
}

// Find User By Name 
const findUserByName = async (req, res) => {
      try {
            const name = req.params.name
            const regex = new RegExp(name, 'i') // 'i' flag makes the search case-insensitive
            const user = await User.find({ name: regex })
            if (!user) throw Error('User not found')
            res.status(200).json(user)
      } catch (e) {
            console.log(e)
            res.status(500).send('User not found')
      }
}

// Find User By Email 
const findUserByEmail = async (req, res) => {
      try {
            const email = req.params.email
            const regex = new RegExp(email, 'i') // 'i' flag makes the search case-insensitive
            const user = await User.find({ email: regex })
            if (!email) throw Error('Email not found')
            res.status(200).json(email)
      } catch (e) {
            console.log(e)
            res.status(500).send('Email not found')
      }
}

// Create a New User 
const createUser = async (req, res) => {
      try {
            const { firstName, lastName, email, picture, username, password, birthday } = req.body

            const existingUser = await User.findOne({ $or: [{ username }, { email }] })

            if(existingUser) {
                  return res.status(400).json({ message: "Username or email already exists" })
            }

            const newUser = new User({
                  firstName, 
                  lastName, 
                  email, 
                  picture, 
                  username, 
                  password, 
                  birthday,
            })

            const savedUser = await newUser.save()
            res.status(201).json(savedUser)
      } catch (e) {
            console.log(e)
            res.status(500).send('User creation unsuccessful') 
      }
}


// Update a User
const updateUser = async (req, res) => {
      try {
            const { firstName, lastName, email, picture, username, password, birthday, id } = req.body

            const user = await User.findById(id)
            if (!user) {
                  return res.status(404).json({ message: "User not found. "})
            }

            user.firstName = firstName || user.firstName
            user.lastName = lastName || user.lastName
            user.email = email || user.email
            user.picture = picture || user.picture
            user.username = username || user.username
            user.password = password || user.password
            user.birthday = birthday || user.birthday 
            
            const updatedUser = await user.save()
            res.status(200).json({ message: 'User updated successfully', user: updatedUser })

      } catch (e) {
            console.log(e)
            res.status(500).send('User updated unsuccessfully')
      }
}


// Delete a User 
const deleteUser = async (req, res) => {
      try {
            const { id } = req.params
            console.log('User ID:', id)

            const deletedUser = await User.findByIdAndRemove(id)
            console.log('Deleted User:', deletedUser)

            if (!deletedUser) {
                  return res.status(404).json({ message: 'User not found' })
            }
            res.status(200).json({ message: 'User deleted successfully' })
      } catch (e) {
            console.log('Error:', e)
            res.status(500).json({ message: 'Internal server error' })
      }
}


// Login 
// const loginController = async (req, res) => {
//       try {
//          const { email, password } = req.body
//          const user = await User.findOne({ email })
    
//          if (!user || user.password !== password) {
//             return res.status(401).json({ message: "Invalid email or password" })
//          }
         
//          res.status(200).json({ message: "Login successful" })
//       } catch (err) {
//          console.error(err)
//          res.status(500).json({ message: "Internal server error" })
//       }
// }





module.exports = {
      allUsers, 
      findUserById, 
      findUserByName,
      findUserByEmail,
      createUser, 
      deleteUser, 
      updateUser
}