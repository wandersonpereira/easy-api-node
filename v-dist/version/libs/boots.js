"use strict";

module.exports = function (app) {

    /**Incia a aplicação na porta informada no middlewares e faz sincronia com o banco*/
    var keysDb = Object.keys(app.libs.db);
    var qtdDb = keysDb.length;

    var sync = function sync(ps) {
        if (!keysDb[ps]) {
            return app.listen(app.get("port"), function () {
                console.log("APL\xD3S API - porta " + app.get("port") + " - 3117 ");
            });
        }

        app.libs.db[keysDb[ps]].sequelize.sync().done(function () {
            console.log('Iniciado ->', keysDb[ps]);
            ps++;
            sync(ps);
        });
    };

    /**Depois de inicar os modulos do sistema inicia os modulos dos clientes */
    app.libs.sysDb.sequelize.sync().done(function () {
        sync(0);
    });
};
//# sourceMappingURL=boots.js.map
