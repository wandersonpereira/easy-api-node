const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const configSystem = require('../../config/database')();
const Promise = require('promise');
/**
 * Create database from business
 */
module.exports = class DatabaseBusiness {
    
    constructor () {
        this.db = null;
    }

    load() {
        const _self = this;
        const config = configSystem.connections || {};

        const objSequlise = {};
        
        const scanDatabase = (existDir, dir, keyConfig) => {
            if (existDir === false) return;
        
            objSequlise[keyConfig] = new Sequelize(
                config[keyConfig].database,
                config[keyConfig].username,
                config[keyConfig].password,
                config[keyConfig].params
            );
        
            _self.db[keyConfig] = {
                sequelize: objSequlise[keyConfig],
                models: {}
            }
        
            fs.readdirSync(dir).forEach(file => {
                const modelDir = path.join(dir, file);
                const model = _self.db[keyConfig].sequelize.import(modelDir);
        
                _self.db[keyConfig].models[model.name] = model;
            });
        
            Object.keys(db[keyConfig].models).forEach(key => {
                _self.db[keyConfig].models[key].associate(_self.db[keyConfig].models);
            });
        }
        
        if (!_self.db) {
            _self.db = {};
        
            Object.keys(config).forEach(keyConfig => {
                var pathModel = config[keyConfig].business;
        
                const dir = path.join(__dirname, `../app/models/business/${pathModel}`);
        
                fs.existsSync(dir, (rs) => { return scanDatabase(rs, dir, keyConfig) });
            });
        }
        
        return _self;
    }

    getModel(modelName) {
        //return this.bssDb.getModel([idBusiness].models[model + '_' + idBusiness]);
        const _self = this;
        if (_self.db.modules[modelName] === undefined) {
            throw new Error(`Module ${modelName} not found!`);
        }

        return _self.db.modules[modelName];
    }
}

