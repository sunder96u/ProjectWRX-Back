const { Task } = require('../models')

//CREATE A TASK
const createTask = async (req,res) => {
    const newTask = await Task.create({
        projectId: req.body.projectId,
        taskName: req.body.taskName,
        userId: req.body.userId,
        description: req.body.description,
        completed: req.body.completed,
        reviewed: req.body.reviewed,
        dateCreated: req.body.dateCreated,
        dateDue: req.body.dateDue
    })
    res.json(newTask)
}

// FIND ALL TASKS
const getTask = async (req, res) => {
    const specificTask = await Task.find({})
    res.status(200).json(specificTask)
}

// FIND A TASK BY ID
const getTaskById = async (req, res) => {
    try {
        const { id } = req.params
        const findTaskId = await Task.findById(id)
        if(!findTaskId) throw Error(`Task not found`)
        res.json(findTaskId)
    }catch (e){
        console.log(e)
        res.send(`Task not found!`)
    }
}

//UPDATE A TASK BY ID
const updateTaskById = async (req, res) => {
    try {
        const updateTask = await Task.findByIdAndUpdate(req.query.taskId, {[req.query.whatToUpdate]: req.query.update})
        if(!updateTask) throw Error(`Task not updated`)
        res.json(updateTask)
    }catch (e){
        console.log(e)
        res.send(`Task not updated`)
    }
}


//DELETE A TASK BY ID
const deleteTaskById = async (req, res) => {
    try {
        const { id } = req.params
        const deleteTask = await Task.findByIdAndDelete(id)
        if(!deleteTask) throw Error(`Task not deleted`)
        res.json(deleteTask)
    }catch (e){
        console.log(e)
        res.send(`Task not deleted`)
    }
}





module.exports = {
    createTask,
    getTask,
    getTaskById,
    updateTaskById,
    deleteTaskById
}