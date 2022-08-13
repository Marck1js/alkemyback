const {server} = require('./src/db');
const {app} = require('./src/app');

app.listen(3001, async()=>{
    await server.sync({force: true});
    console.log('Escuchando en puerto 3001')
});