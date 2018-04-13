const DatabaseSystem = require('./DatabaseSystem');
const DatabaseBusiness = require('./DatabaseBusiness');
const log = require('../log')

/**
 * Use all functions of databases
 */
module.exports = class Database {
    
    constructor() {
        this.bssDb = null;
        this.sysDb = null;
        this.log = new log.Log();

        this.load();
    }

    /** Get a model from system */
    getBSSModel(modelName, params) {        
        return this.bssDb.getModel(modelName, params);
    }

    getSYSModel(modelName, params) {
        return this.sysDb.getModel(modelName, params);
    }

    /** Set a model in system */
    setModel() {
        
    }

    /** Load all databases, from system and business */
    load() {
        this.bssDb = this.loadDatabaseBusiness();
        this.sysDb = this.loadDatabaseSystem();
    }

    /** Load database from business */
    loadDatabaseBusiness () {
        return new DatabaseBusiness().load();
    }

    /** Load database from system */
    loadDatabaseSystem() {
        return new DatabaseSystem().load();
    }

    /** Start sequelize */
    startSequelize() {
        const _self = this;
        const keysDb = Object.keys(_self.bssDb.db);

        const sync = (ps) => {
            if (!keysDb[ps]) {
                return true;
            }
    
            _self.bssDb.db[keysDb[ps]].sequelize.sync().done(() => {
                _self.log.info('Start >>> ' + keysDb[ps]);
                ps++;
                sync(ps);
            });
        };

        return this.sysDb.db.sequelize.sync().then(() => {
            _self.log.info('Start >>> system');
            return sync(0);
        });
    }
}