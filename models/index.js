const User = require('./User');
// const Character = require('./Character');
// const Adventure = require('./Adventure');
const Scenario = require('./Scenario');
const Choice = require('./Choice');

// User.hasOne(Character, {
//     foreignKey: 'user_id'
// });
// Character.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Character.hasOne(Adventure, {
//     foreignKey: 'character_id'
// });
// Adventure.belongsTo(Character, {
//     foreignKey: 'character_id',
//     onDelete: 'CASCADE'
// });

// Scenario.hasMany(Adventure, {
//     foreignKey: 'scenario_id'
// });
// Adventure.belongsTo(Scenario, {
//     foreignKey: 'scenario_id'
// });

Scenario.hasMany(Choice, {
    foreignKey: 'parent_scenario_id'
});
Choice.belongsTo(Scenario, {
    foreignKey: 'parent_scenario_id'
});

Choice.hasOne(Scenario, {
    foreignKey: 'choice_id'
});
Scenario.belongsTo(Choice, {
    foreignKey: 'choice_id'
});

module.exports = { User, Scenario, Choice };