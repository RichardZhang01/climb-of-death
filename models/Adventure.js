const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Adventure extends Model {};

Adventure.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        character_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'character',
                key: 'id'
            }
        },
        scenario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'scenario',
                key: 'id'
            }
        }
    },
    
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'adventure'
    },
);

module.exports = Adventure;