const mongoose = require('mongoose')
const userSchema = require('./user')
const teamSchema = require('./team')
const taskSchema = require('./task')
const projectSchema = require('./project')


const User = mongoose.model('User', userSchema)
const Team = mongoose.model('Team', teamSchema)
const Task = mongoose.model('Task', taskSchema)
const Project = mongoose.model('Project', projectSchema)

module.exports = {
      User, 
      Team, 
      Task, 
      Project
}