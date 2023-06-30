const { Team } = require('./models')

const getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find()
        return res.status(200).json ({ teams })
    } catch (error) {
        return res.status(500).json ({error:error.message})
    }
}


const getTeamByName = async (req, res) => {
    try {
        let {id} = req.params
        const selectedTeam = await Team.find({team: id})
        if (!selectedTeam) throw Error('Team not found.')
        res.status(200).json(selectedTeam)
    } catch (e) {
        res.status(400).send(e.message)
    }
}


const createTeam = async (req, res) => {
    try {
        const team = await new Team(req.body)
        await team.save()
        return res.status(201).json({
            team,
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


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