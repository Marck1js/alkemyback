const {DataTypes} = require('sequelize');

module.exports = (db) => {
    db.define('movie',{
        image : {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING
        },
        creationDated: {
            type: DataTypes.STRING
        },
        qualification: {
            type: DataTypes.ENUM("1","2","3","4","5")
        }
    },{
        timestamps: false
    });
}