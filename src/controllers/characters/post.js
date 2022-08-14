const {models}  = require('../../db');
const {character} = models;
async function postCharacter(req,res){
    let {image, name, age, weight, story} = req.body;

    if(!image || !name || !age || !weight || !story){
        return res.send({msg: 'Lo siento, faltan datos para crear el personaje'});
    }else {
        await character.create({image, name, age, weight, story});
        return res.send({msg: 'Personaje creado exitosamente'});
    }

}

module.exports = postCharacter;