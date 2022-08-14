const jwt = require('jsonwebtoken');

async function login (req,res, next){
    let {name, email} = req.body; 

    const user = {
        nombre: name,
        email: email
    }
    if(!name || !email){
        return res.send({msg: 'Faltan datos para crear loguearse'})
    }else {

        jwt.sign({user}, 'secretKey', {expiresIn: '60s'},(err, token)=> {
            res.send({
                token
            })
        })
    }

};


async function register(req,res) {
    jwt.verify(req.token, 'secretKey', (err,authData)=> {
        if(err){
            res.sendStatus(403);
        }else {
            res.send({
                message: 'Post fue creado',
                authData
            })
        }
    })

};

module.exports = {
    login,
    register,
}