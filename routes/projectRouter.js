const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/projectController`)

Router.post(`/`, controller.createProject)
Router.get(`/`, controller.getProject)
Router.get(`/:id`, controller.getProjectById)
Router.get('/name/:name', controller.getProjectByName)
Router.put(`/:id`, controller.updateProjectById)
Router.delete(`/:id`, controller.deleteProjectById)

module.exports = Router