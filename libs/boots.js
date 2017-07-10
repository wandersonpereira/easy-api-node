module.exports = app => {
    
    /**Incia a aplicação na porta informada no middlewares e faz sincronia com o banco*/
    const keysDb = Object.keys(app.libs.db);

    const sync = (ps) => {
        if (!keysDb[ps]) {
            return app.listen(app.get("port"), () => {
                console.log(`API - porta ${app.get("port")}`)
            });
        }

        app.libs.db[keysDb[ps]].sequelize.sync().done(() => {
            console.log('Iniciado ->', keysDb[ps]);
            ps++;
            sync(ps);
        });
    };

    /**Depois de inicar os modulos do sistema inicia os modulos dos clientes */
    app.libs.sysDb.sequelize.sync().then(() => {
        sync(0);
    }).catch(e => {
        console.log('Erro ao inicar a base de dados do sistema');

        return app.listen(app.get("port"), () => {
            console.log(`API - porta ${app.get("port")}`)
        });
    });
}