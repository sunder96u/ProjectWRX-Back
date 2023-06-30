const { useRevalidator } = require("react-router-dom")
const db = require(`../db`)
const { Task } = require(`../models`)
const { useRouteId } = require("react-router/dist/lib/hooks")

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {
    const task = [
        {
            projectId: null,
            taskName: 'Create full layout for SEPT23 issue of Dream magazine',
            description: `Collaborate with team to dream and design the September 2023 issue of Dream magazine. Loving y2k themes with bright contrasting colors.`,
            userId: null,
            completed: false,
            reviewed: false,
            dateCreated: new Date(`05-02-2023`),
            dateDue: new Date(`07-02-2023`)
        },
        {
            projectId: null,
            taskName: 'Pick up final edits from Yuma Gucci shoot from photographer',
            userId: null,
            description: `Photographers studio address: 139 W Broadway, Ste 29, NYC, NY 10012`,
            completed: false,
            reviewed: false,
            dateCreated: new Date(`05-02-2023`),
            dateDue: new Date(`07-03-2023`)
        },
        {
            projectId: null,
            taskName: 'Pick up Fendi FA23 samples from Veronica at Fendi LES',
            userId: null,
            description: `Veronica has big red glasses. Fendi LES address: 150 Spring St, Level 3, NYC, NY 10012`,
            completed: false,
            reviewed: false,
            dateCreated: new Date(`05-02-2023`),
            dateDue: new Date(`06-29-2023`)
        },
    ]
    await Task.insertMany(user)
    console.log(`Tasks created successfully`)
}

const run = async () => {
    await main()
    db.close()
}

run()