const { Project, User } = require(`../models`)

// CREATE PROJECT
const createProject = async (req, res) => {
    const newProject = await Project.create({
        name: req.body.name,
        description: req.body.description,
        taskId: req.body.taskId,
        dateCreated: req.body.dateCreated,
        dateDue: req.body.dateDue,
        projectLeader: req.body.projectLeader
    })
    res.json(newProject)
}

// FIND PROJECT
const getProject = async (req, res) => {
    const findProject = await Project.find({}).populate('projectMembers', 'taskId', 'teamLeader')
    res.json(findProject) //sends results in a json format
}

// FIND PROJECT BY ID
const getProjectById = async (req, res) => {
    try {
        const { id } = req.params
        const findProjectId = await Project.findById(id)
        if(!findProjectId) throw Error(`Project not found`)
        res.json(findProjectId)
    }catch (e){
        console.log(e)
        res.send(`Project not found`)
    }
}

// UPDATE PROJECT BY ID
const updateProjectById = async (req, res) => {
    try {
        const updateProject = await Project.findByIdAndUpdate(req.query.projectId, {[req.query.whatToUpdate]: req.query.update})
        if(!updateProject) throw Error(`Project not updated`)
        res.json(updateProject)
    }catch (e){
        console.log(e)
        res.send(`Project not updated`)
    }
}

// DELETE PROJECT BY ID
const deleteProjectById = async (req, res) => {
    try {
        const { id } = req.params
        const deleteProject = await Project.findByIdAndDelete(id)
        if(!deleteProject) throw Error(`Project not deleted`)
        res.json(deleteProject)
    }catch (e){
        console.log(e)
        res.send(`Project not deleted`)
    }
}

// GET PROJECT LEADER BY ID
const getProjectLeaderById = async (req, res) => {
    try {
        const { id } = req.params
        const findProjectLeaderId = await Project.findById(id)
        if(!findProjectLeaderId) throw Error(`Project leader not found`)
        res.json(findProjectLeaderId)
    } catch (e){
        console.log(e)
        res.send(`Project leader not found`)
    }
}

// UPDATE PROJECT LEADER BY ID
const updateProjectLeaderById = async (req, res) => {
    try {
        const updateProjectLeader = await User.findByIdAndUpdate(req.query.projectId, {[req.query.whatToUpdate]: req.query.update})
        if(!updateProjectLeader) throw Error(`Project leader not updated`)
        res.json(updateProjectLeader)
    }catch (e){
        console.log(e)
        res.send(`Project leader not updated`)
    }
}

// DELETE PROJECT LEADER BY ID
const deleteProjectLeaderById = async (req, res) => {
    try {
        const { id } = req.params
        const deleteProjectLeader = await Project.findByIdAndDelete(id)
        if(!deleteProjectLeader) throw Error(`Project leader not deleted`)
        res.json(deleteProjectLeader)
    }catch (e){
        console.log(e)
        res.send(`Project leader not deleted`)
    }
}

// EXPORT
module.exports = {
    createProject,
    getProject,
    getProjectById,
    updateProjectById,
    deleteProjectById,
    getProjectLeaderById,
    updateProjectLeaderById,
    deleteProjectLeaderById
}