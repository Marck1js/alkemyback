const {DataTypes} = require('sequelize');

module.exports = (db) => {
    db.define('character',{
        id: {
            type: DataTypes.UUID,
            unique: true,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        image : {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        weight: {
            type: DataTypes.STRING
        },
        story: {
            type: DataTypes.TEXT
        }
    },{
        timestamps: false
    });
}
