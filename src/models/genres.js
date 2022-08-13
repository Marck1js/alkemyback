const {DataTypes} = require('sequelize');

module.exports = (db) => {
    db.define('genre',{
        name:{
            type: DataTypes.STRING
        },
        image:{
            type: DataTypes.STRING
        }
    },{
        timestamps: false
    })
};