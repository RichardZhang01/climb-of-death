const { User } = require('../models');

const userData = [
    {
        username: 'dev',
        email: 'developer@dev.com',
        password: 'developer'
    },
    {
        username: 'sach',
        email: 'sach@dev.com',
        password: 'devsachmilan'
    },
    {
        username: 'trent',
        email: 'trent@dev.com',
        password: 'devtrent'
    },
    {
        username: 'richard',
        email: 'richard@dev.com',
        password: 'devrichard'
    }   
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;