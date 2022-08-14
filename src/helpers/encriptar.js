const bcryptjs = require('bcryptjs');

async function encript(req,res,next){
    let {email, pass} = req.body;
   let passwordHash =  await bcryptjs.hash(pass, 8);
    req.hash = {email, password: passwordHash};
    next()
}
module.exports = encript;