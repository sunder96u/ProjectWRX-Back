const db = require('../db')
const { Team } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const team = [
        {
            name: 'S.C.A.R.',
            description: 'Superior Code As Rendered',
            member: null,
            memberAdmin: null,
        }]

        await Team.insertMany(team)
      console.log('Teams created successfully!')

}

const run = async () => {
    await main()
    db.close()
}
run()