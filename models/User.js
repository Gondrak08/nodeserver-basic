const { Model, DataTypes } = require('sequelize');

class user extends Model{
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            createdAt: {
                type: DataTypes.DATE,
                field: 'created_at'
            },

            updatedAt: {
                type: DataTypes.DATE,
                field: 'updated_at'
            }
        }, { sequelize, modelName: 'users', timestamps: true,})
    }
}

module.exports = user;