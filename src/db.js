const {Sequelize, DataTypes} = require('sequelize');

// MODELOS  
const characters = require('./models/characters');
const movies = require('./models/movies');
const genres = require('./models/genres');
const users = require('./models/users');

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/disney',{
    logging: false
});

characters(sequelize);
movies(sequelize);
genres(sequelize);
users(sequelize);

// RELACIONES
const {character, movie, genre} = sequelize.models;

character.belongsToMany(movie, {through: 'characterMovie'});
movie.belongsToMany(character, {through: 'characterMovie'});

movie.hasMany(genre);
genre.belongsTo(movie);


module.exports = {
    server: sequelize
}