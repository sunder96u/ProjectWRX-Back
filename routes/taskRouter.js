const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/taskController`)

Router.post(`/`, controller.createTask)
Router.get(`/`, controller.getTask)
Router.get(`/:id`, controller.getTaskById)
Router.put(`/`, controller.updateTaskById)
Router.delete(`/:id`, controller.deleteTaskById)
Router.get('/complete', controller.getCompleteTask)
Router.get('/notComplete', controller.getNotCompleteTask)

module.exports = Router