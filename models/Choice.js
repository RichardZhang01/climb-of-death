const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Choice extends Model {};

Choice.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        choice: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parent_scenario_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'scenario',
                key: 'id'
            }
        },
        // child_scenario_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'scenario',
        //         key: 'id'
        //     }
        // }
    },
    
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: 'choice'
    },
);

module.exports = Choice;