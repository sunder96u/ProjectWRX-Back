const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

      const user = [
            {
                  firstName: 'firstSample1', 
                  lastName: 'lastSample1', 
                  email: 'sample@mailinator.com',
                  picture: '', 
                  username: 'IamAUser', 
                  password: 'sample1', 
                  birthday: new Date('1987-03-20'),
                  googleId: 1
            },
            {
                  firstName: 'firstSample2', 
                  lastName: 'lastSample2', 
                  email: 'wowwhatanemail@email.com',
                  picture: '', 
                  username: 'IAmBetterUser', 
                  password: 'sample2', 
                  birthday: new Date('1987-03-20'),
                  googleId: 0
            }
            
      ]

      await User.insertMany(user)
      console.log('users created successfully')

}

const run = async () => {
      await main()
      db.close()
}

run()