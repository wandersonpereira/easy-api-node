const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const configSystem = require('../../config/database')();
const Promise = require('promise');

/**
 * Create database from system
 */
module.exports = class DatabaseSystem {

    constructor () {
        this.db = null;
    }

    load () {
        const _self = this;
        const config = configSystem.connectionSystem || {};

        if (!_self.db) {
            _self.db = {};
    
            const sequlise = new Sequelize(
                config.system_api.database,
                config.system_api.username,
                config.system_api.password,
                config.system_api.params
            );
    
            _self.db = {
                sequelize: sequlise,
                models: {}
            }
    
            const dir = path.join(__dirname, `../../app/models/system`);
    
            fs.readdirSync(dir).forEach(file => {
                const modelDir = path.join(dir, file);
                const model = _self.db.sequelize.import(modelDir);
    
                _self.db.models[model.name] = model;
            });
    
            Object.keys(_self.db.models).forEach(key => {
                _self.db.models[key].associate(_self.db.models);
            });
        }
        
        return _self;
    }

    getModel(modelName) {
        const _self = this;
        if (_self.db.models[modelName] === undefined) {
            throw new Error(`Module ${modelName} not found!`);
        }

        return _self.db.models[modelName];
    }
}