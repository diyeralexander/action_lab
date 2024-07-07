const express  = require('express');
const experienceRouter = require('./experience.router');    

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/experiences',experienceRouter);
}

module.exports = routerApi;