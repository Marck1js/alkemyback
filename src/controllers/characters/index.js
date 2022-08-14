const {Router} = require('express');
const getCharacters = require('./get');
const postCharacter = require('./post');
const getCharacterId = require('./getId');
const router = Router();

router.get('/', getCharacters);
router.post('/', postCharacter);
router.get('/:id', getCharacterId);
// router.put('/:id')
// router.delete('/:id')

module.exports = router;