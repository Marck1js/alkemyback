const {Router} = require('express');
const {login,register} = require('../controllers/LoginAndRegister');
const {verifyToken} = require('../helpers/verifyToken');
const router = Router();

router.post('/auth/login', login);
router.post('/auth/register', verifyToken ,register);


module.exports = {
    router
}
