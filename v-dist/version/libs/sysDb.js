"use strict";

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sysDb = null;

module.exports = function (app) {
    var config = app.libs.config.connectionSystem;

    if (!sysDb) {
        sysDb = {};

        var sequlise = new _sequelize2.default(config.aplos.database, config.aplos.username, config.aplos.password, config.aplos.params);

        sysDb = {
            sequelize: sequlise,
            models: {}
        };

        var dir = _path2.default.join(__dirname, "../app/models/system");

        _fs2.default.readdirSync(dir).forEach(function (file) {
            var modelDir = _path2.default.join(dir, file);
            var model = sysDb.sequelize.import(modelDir);

            sysDb.models[model.name] = model;
        });

        Object.keys(sysDb.models).forEach(function (key) {
            sysDb.models[key].associate(sysDb.models);
        });
    }

    return sysDb;
};
//# sourceMappingURL=sysDb.js.map
