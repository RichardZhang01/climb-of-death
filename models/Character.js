const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {};

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hitpoints: {
            type: DataTypes.INTEGER,
        },
        attack: {
            type: DataTypes.INTEGER,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'character'
    },
);

module.exports = Character;