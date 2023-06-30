const Router = require('express').Router()
const controller = require('../controllers/userController')

Router.get('/', controller.allUsers)

Router.get('/:id', controller.findUserById)

Router.get('/name/:name', controller.findUserByName)

Router.get('/email/:email', controller.findUserByEmail)

Router.post('/create', controller.createUser)

Router.put('/:id', controller.updateUser)

Router.delete('/:id', controller.deleteUser)