const sequelize = require('../config/connection');
const seedScenarios = require('./scenario-seeds');
const seedChoices = require('./choices-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');

    await seedScenarios();
        console.log("\n----- SCENARIOS SEEDED -----\n");

    await seedChoices();
        console.log("\n----- CHOICES SEEDED -----\n");

    process.exit(0);
};

seedAll();