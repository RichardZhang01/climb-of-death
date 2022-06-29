const sequelize = require('../config/connection');
const seedScenarios = require('./scenario-seeds');
const seedChoices = require('./choices-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\nDatabase Sync!\n");
    await seedScenarios();
    console.log("\nScenarios seeded!\n");
    await seedChoices();
    console.log("\nChoices seeded!\n");
    process.exit(0);
};

seedAll();