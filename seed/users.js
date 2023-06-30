const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

      const user = [
            {
                  firstName: 'firstSample1', 
                  lastName: 'lastSample1', 
                  email: 'emailSample1@gmail.com',
                  picture: '', 
                  username: 'sample1', 
                  password: 'sample1', 
                  birthday: new Date('1987-03-20')
            },
            {
                  firstName: 'firstSample2', 
                  lastName: 'lastSample2', 
                  email: 'emailSample2@gmail.com',
                  picture: '', 
                  username: 'sample2', 
                  password: 'sample2', 
                  birthday: new Date('1987-03-20')
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