const { Team } = require('../models')

//GET all teams
const getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find().populate(`member`).populate('memberAdmin').populate('projects')
        return res.status(200).json ({ teams })
    } catch (error) {
        return res.status(500).json ({error:error.message})
    }
}

//GET teams by team name
const getTeamByName = async (req, res) => {
    try {
        const name = req.params.name
        const regex = new RegExp(name, 'i')
        const team = await Team.find({ name: regex}).populate('member').populate('memberAdmin').populate('projects')
        if (!team) throw Error('Team not found.')
        res.status(200).json(team)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

//Create team
const createTeam = async (req, res) => {
    try {
        
        const team = new Team(req.body) //may need an "await" before new
        await team.save()
        return res.status(201).json({
            team,
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

//Update team
const updateTeam = async (req, res) => {
    try {
        let { id } = req.params
        let team = await Team.findByIdAndUpdate(id, req.body, {new: true})
        if (team) {
            return res.status(200).json(team)
        }
        throw new Error('Team not found.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//Delete team
const deleteTeam = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Team.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Team deleted")
        }
        throw new Error("Team not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllTeams,
    getTeamByName,
    createTeam,
    updateTeam,
    deleteTeam
}