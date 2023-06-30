const { Project } = require(`../models`)

// CREATE PROJECT
const createProject = async (req, res) => {
    const newProject = await Project.create({
        name: req.body.name,
        description: req.body.description,
        taskId: req.body.taskId,
        dateCreated: req.body.dateCreated,
        dateDue: req.body.dateDue,
        teamLeader: req.body.teamLeader
    })
    res.json(newProject)
}

// FIND PROJECT
const getProject = async (req, res) => {
    const findProject = await Project.find({})
    res.json(findProject) //sends results in a json format
}

// FIND PROJECT BY ID
const getProjectsById = async (req, res) => {
    try {
        const { id } = req.params
        const findProjectId = await Project.findById(id)
        if(!findProjectId) throw Error(`Project not found`)
        res.json(findProjectId)
    } catch (e){
        console.log(e)
        res.send(`Project not found`)
    }
}

// UPDATE PROJECT BY ID
const updateProjectById = async (req, res) => {
    try {
        const { id } = req.params
        const updateProject = await Project.findByIdAndUpdate(id)
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



// EXPORT
module.exports = {
    createProject,
    getProject,
    getProjectsById,
    updateProjectById,
    deleteProjectById
}