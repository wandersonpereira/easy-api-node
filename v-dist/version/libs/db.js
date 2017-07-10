"use strict";

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = null;

module.exports = function (app) {
    var config = app.libs.config.connections;

    if (!db) {
        db = {};

        var objSequlise = {};
        Object.keys(config).forEach(function (keyConfig) {
            objSequlise[keyConfig] = new _sequelize2.default(config[keyConfig].database, config[keyConfig].username, config[keyConfig].password, config[keyConfig].params);

            db[keyConfig] = {
                sequelize: objSequlise[keyConfig],
                models: {}
            };

            var pathModel = config[keyConfig].business;

            var dir = _path2.default.join(__dirname, "../app/models/business/" + pathModel);

            _fs2.default.readdirSync(dir).forEach(function (file) {
                var modelDir = _path2.default.join(dir, file);
                var model = db[keyConfig].sequelize.import(modelDir);

                db[keyConfig].models[model.name] = model;
            });

            Object.keys(db[keyConfig].models).forEach(function (key) {
                db[keyConfig].models[key].associate(db[keyConfig].models);
            });
        });
    }

    return db;
};
//# sourceMappingURL=db.js.map
