module.exports = app => {
    return {
        getModel: (idBusiness, model, tipo) => {
            if (app.app.modules.business[model + '_' + idBusiness] != undefined && tipo != undefined) {
                return app.app.modules.business[model + '_' + idBusiness].getModel(tipo, idBusiness);
            }
            
            return app.libs.db[idBusiness].models[model + '_' + idBusiness];
        },
    }
} 