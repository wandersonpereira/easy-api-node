'use strict';

module.exports = function (app) {
    return {
        getModel: function getModel(idBusiness, model) {
            return app.libs.db[idBusiness].models[model + '_' + idBusiness];
        }
    };
};
//# sourceMappingURL=utils.js.map
