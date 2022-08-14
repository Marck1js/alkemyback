const {Router} = require('express');
const getMovies = require('./get');
const router = Router();

router.get('/', getMovies);
// router.post()
// router.get()
// router.put()
// router.delete()



module.exports = router;