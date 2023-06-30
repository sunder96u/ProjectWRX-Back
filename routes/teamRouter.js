const Router = require('express').Router()
const controller = require('../controllers/teamController')


Router

    //Find all Teams:
    //http://localhost:3001/api/teams
    .get('/', controller.getAllTeams)


    //Find Team By Name:
    //http://localhost:3001/teams/:name
    .get('/:name', controller.getTeamByName)


    //Create Team:
    //http://localhost:3001/teams/
    .post('/', controller.createTeam)
    

    //Update Team:
    //http://localhost:3001/team/:id
    .put('/:id', controller.updateTeam)


    //Delete Team:
    //http://localhost:3001/:id
    .delete('/:id', controller.deleteTeam)

module.exports = Router



