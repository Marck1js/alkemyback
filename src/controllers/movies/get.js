const {models} = require('../../db');
const {movie} = models;
async function getMovies (req,res){

    const data = await movie.findAll({attributes: ['image','title','creationDated']});
    
    if(data.length === 0 ){
        return res.send({msg: "No hay peliculas o series en la base de datos"})
    } else {
        return res.send(data);
    }

}

module.exports = getMovies;