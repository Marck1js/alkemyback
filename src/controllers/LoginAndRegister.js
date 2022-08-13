const jwt = require('jsonwebtoken');

async function login (req,res, next){
    
    const user = {
        nombre: 'marco',
        email: 'marco@gmail.com'
    }
    jwt.sign({user}, 'secretKey', {expiresIn: '32s'},(err, token)=> {
        res.send({
            token
        })
    })

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