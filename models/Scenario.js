const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Scenario extends Model {};

Scenario.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        // choice_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //         model: 'choice',
        //         key: 'id'
        //     }
        // }
        // adventure_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'adventure',
        //         key: 'id'
        //     }
        // }
    },
    
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: 'scenario'
    },
);

module.exports = Scenario;