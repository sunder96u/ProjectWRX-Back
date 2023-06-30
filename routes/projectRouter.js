const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/projectController`)

Router.post(`/`, controller.createProject)
Router.get(`/`, controller.getProject)
Router.get(`/:id`, controller.getProjectsById)
Router.put(`/:id`, controller.updateProjectById)
Router.delete(`/:id`, controller.deleteProjectById)

module.exports = Router