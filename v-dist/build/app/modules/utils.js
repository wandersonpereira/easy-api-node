module.exports = app => {
    return {
        getModel: (idBusiness, model) => app.libs.db[idBusiness].models[model + '_' + idBusiness],
    }
}