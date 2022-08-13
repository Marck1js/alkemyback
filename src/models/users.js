const {DataTypes} = require('sequelize');

module.exports = (db) => {
    db.define('user',{
        user: {
            type: DataTypes.STRING
        },
        pass: {
            type: DataTypes.STRING
        }
    },{
        timestamps: false
    })
}