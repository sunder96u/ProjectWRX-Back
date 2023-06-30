const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/projectController`)

Router.create(`/`, controller.createProject)
Router.get(`/`, controller.getProject)
Router.get(`/:id`, controller.getProjectById)
Router.update(`/:id`, controller.updateProjectById)
Router.delete(`/:id`, controller.deleteProjectById)

module.exports = Router