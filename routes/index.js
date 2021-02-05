// const serverRoutes = require("../../../Riteway/operationsportal_backend/routes");
const apiAuth = require('../components/auth/router');
const apiUser = require('../components/user/router');


function serverRoutes(app){
    app.use('/user', apiUser);
    app.use('/auth', apiAuth);
    
    app.get('/', (req, res) =>{
        res.status(200).send("ok");
    });
    app.get('/time_zone', (req, res) =>{
        res.status(200).send(Intl.DateTimeFormat().resolvedOptions().timeZone);
    });
}

module.exports = serverRoutes;