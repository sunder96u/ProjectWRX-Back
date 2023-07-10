const Router = require('express').Router()
const controller = require('../controllers/teamController')


    //Find all Teams:
    //http://localhost:3001/api/teams
 Router.get('/', controller.getAllTeams)


    //Find Team By Name:
    //http://localhost:3001/teams/:name
Router.get('/:name', controller.getTeamByName)


    //Create Team:
    //http://localhost:3001/teams/
Router.post('/', controller.createTeam)
    

    //Update Team:
    //http://localhost:3001/teams/:id
Router.put('/:id', controller.updateTeam)


    //Delete Team:
    //http://localhost:3001/:id
Router.delete('/:id', controller.deleteTeam)

    //Update Team Project
    //http://localhost:3001/update?id=""?whatToUpdate=projects&update=projectId
Router.put('/update/update', controller.updateTeamProject)

module.exports = Router



