const sequelize = require('../config/connection');
const seedScenarios = require('./scenario-seeds');
const seedChoices = require('./choice-seeds');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
        console.log("\n----- USERS SEEDED -----\n");

    await seedScenarios();
        console.log("\n----- SCENARIOS SEEDED -----\n");

    await seedChoices();
        console.log("\n----- CHOICES SEEDED -----\n");

    process.exit(0);
};

seedAll();