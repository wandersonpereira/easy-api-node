module.exports = app => {
    return {
        getModel(tipo, idBusiness) {
            switch(tipo) {
                case 'produto' :
                    return app.app.modules.business['categoria' + '_' + idBusiness];
                case 'conteudo' :
                case 'album':
                    return app.app.modules.business['categoria_geral' + '_' + idBusiness];
            }

            return null;
        }

    }
} 