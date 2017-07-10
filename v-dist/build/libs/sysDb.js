import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

let sysDb = null;

module.exports = app => {
    const config = app.libs.config.connectionSystem

    if (!sysDb) {
        sysDb = {};

        const sequlise = new Sequelize(
            config.aplos.database,
            config.aplos.username,
            config.aplos.password,
            config.aplos.params,    
        );

        sysDb = {
            sequelize: sequlise,
            models: {},
        }


        const dir = path.join(__dirname, `../app/models/system`);

        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            const model = sysDb.sequelize.import(modelDir);

            sysDb.models[model.name] = model;
        });

        Object.keys(sysDb.models).forEach(key => {
            sysDb.models[key].associate(sysDb.models);
        });
    }
    
    return sysDb;
}
