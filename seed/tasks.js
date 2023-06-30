const { useRevalidator } = require("react-router-dom")
const db = require(`../db`)
const { Task } = require(`../models`)
const { useRouteId } = require("react-router/dist/lib/hooks")

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
    const task = [
        {
            taskName: 'Create layout for AUG23 mag launch'
            userId: ,
            description: ,
            completed: ,
            reviewed: ,
            dateCreated: ,
            dateDue: 
        },
        {
            taskName: ''
            userId: ,
            description: ,
            completed: ,
            reviewed: ,
            dateCreated: ,
            dateDue: 
        },
    ]
}