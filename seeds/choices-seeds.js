const { Choice } = require('../models');
const sequelize = require('../config/connection');

const choiceData = [
    {
        choice: `Excited`, 
        // this is the scenario I came from
        parent_scenario_id: 1,
        // this is the scenario I am going to
        child_scenario_id: 2
    },
    {
        choice: `Fearful`, 
        parent_scenario_id: 1,
        child_scenario_id: 3
    },
]

const seedData = () => {
    Choice.bulkCreate(choiceData);
}

module.exports = seedData;