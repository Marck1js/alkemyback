const {Router} = require('express');
const {login,register} = require('../controllers/LoginAndRegister');
const {verifyToken} = require('../helpers/verifyToken');
const encript = require('../helpers/encriptar');
const characters = require('../controllers/characters/index');
const movies = require('../controllers/movies/index');
const router = Router();

//CRUD
router.use('/characters', characters);
router.use('/movies', movies);


//LOGIN Y REGISTRO SE HARA A LO ULTIMO
router.post('/auth/login', login);
router.post('/auth/register', verifyToken ,register);
router.post('/auth/hash', encript, (req,res)=> {
    let hash = req.hash;
    res.send(hash);
})


module.exports = {
    router
}
