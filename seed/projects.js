const db = require('../db')
const { Project } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
      const project = [
            {
                  name: 'Aug 23 cover', 
                  description: 'do it', 
                  taskId: '',
                  dateCreated: '', 
                  dateDue: '', 
                  teamLeader: '', 
            },
            {
                name: 'Sept 23 Cover', 
                description: 'lfsdf', 
                taskId: '',
                dateCreated: '', 
                dateDue: '', 
                teamLeader: '', 
            }
        ]
      await Project.insertMany(project)
      console.log('Projects created successfully')
}

const run = async () => {
      await main()
      db.close()
}

run()