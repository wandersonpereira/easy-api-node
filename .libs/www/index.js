const db = require('../database');
const lg = require('../log');
const moduleApp = require('../../app/app.module') || {};

module.exports = (app) => {
   
    const database = new db.Database();
    const log = new lg.Log(); 

    database.startSequelize().then(init).catch(init);
    
    // Inserted for default the database inside app
    app.db = database;

    function init(result) {
        if (result != undefined && result != true) log.warn(result.message || '');

        /** 
         * Add injects in var app
         * Ex:
         * app.auth
         */
        Object.keys(moduleApp.injects || {}).forEach(key => {
            app[key] = moduleApp.injects[key].load(app);
        });

        /** 
         * Start other system functions
         * Ex:
         * routes(app)
         * middlewares(app)
         */
        (moduleApp.declarations || []).forEach(dependence => {
            dependence(app);
        });

        return app.listen(app.get('port'), () => {
            log.info(`API - porta ${app.get('port')}`);
        });
    }

}