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

//Get all tasks by user that are complete
const getCompleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const completedTasks = await Task.find({userId: id}, { completed: true})
        if(!completedTasks) throw Error('No Completed Tasks Found')
        console.log(completedTasks)
    }catch (e) {
        console.log(e)
        res.send('No Completed Tasks Found')
    }
}

//Get all tasks by user that are not complete

const getNotCompleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const notCompletedTasks = await Task.find({userId: id}, { completed: false})
        if(!notCompletedTasks) throw Error('No Completed Tasks Found')
        console.log(notCompletedTasks)
    }catch (e) {
        console.log(e)
        res.send('No Completed Tasks Found')
    }
}

module.exports = {
    createTask,
    getTask,
    getTaskById,
    updateTaskById,
    deleteTaskById,
    getCompleteTask,
    getNotCompleteTask
}