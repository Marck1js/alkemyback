const {models}  = require('../../db');
const {character} = models;
async function getCharacterId(req,res){
    let {id} = req.params; 
    const data = await character.findByPk(id)
    
    if(data === null){
        return res.send({msg: "No hay personajes en la base de datos"})
    } else {
        return res.send(data);
    }
}

module.exports = getCharacterId;