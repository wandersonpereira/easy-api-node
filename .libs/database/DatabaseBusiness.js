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
        
            Object.keys(_self.db[keyConfig].models).forEach(key => {
                _self.db[keyConfig].models[key].associate(_self.db[keyConfig].models);
            });
        }
        
        if (!_self.db) {
            _self.db = {};
        
            Object.keys(config).forEach(keyConfig => {
                var pathModel = config[keyConfig].business;
        
                const dir = path.join(__dirname, `../../app/models/business/${pathModel}`);
                return scanDatabase(true, dir, keyConfig)
            });
        }
        
        return _self;
    }

    getModel(modelName, params) {
        params = params || {};
        const _self = this;
        if (params.idBusiness === undefined) {
            throw new Error(`Uninformed business!`);
        }

        if (_self.db[params.idBusiness] === undefined) {
            throw new Error(`Business ${params.idBusiness} not found!`);
        }

        if (_self.db[params.idBusiness].models[modelName] === undefined) {
            throw new Error(`Module ${modelName} not found!`);
        }

        return _self.db[params.idBusiness].models[modelName];
    }
}

