import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

let db = null;

module.exports = app => {
    const config = app.libs.config.connections

    if (!db) {
        db = {};

        const objSequlise = {};
        Object.keys(config).forEach(keyConfig => {
            objSequlise[keyConfig] = new Sequelize(
                config[keyConfig].database,
                config[keyConfig].username,
                config[keyConfig].password,
                config[keyConfig].params,    
            );

            db[keyConfig] = {
                sequelize: objSequlise[keyConfig],
                models: {},
            }

            var pathModel = config[keyConfig].business;

            const dir = path.join(__dirname, `../app/models/business/${pathModel}`);

            fs.readdirSync(dir).forEach(file => {
                const modelDir = path.join(dir, file);
                const model = db[keyConfig].sequelize.import(modelDir);

                db[keyConfig].models[model.name] = model;
            });

            Object.keys(db[keyConfig].models).forEach(key => {
                db[keyConfig].models[key].associate(db[keyConfig].models);
            });
        });
    }

    return db;
}
