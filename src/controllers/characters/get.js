const {models}  = require('../../db');
const {character} = models;
async function getCharacters(req,res){
    
    const data = await character.findAll({attributes: ['name','image']});
    
    if(data.length === 0 ){
        return res.send({msg: "No hay personajes en la base de datos"})
    } else {
        return res.send(data);
    }
}

module.exports = getCharacters;