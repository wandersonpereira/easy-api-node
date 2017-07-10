'use strict';

module.exports = function (app) {
    return {
        getModel: function getModel(tipo, idBusiness) {
            switch (tipo) {
                case 'produto':
                    return app.app.modules.business['categoria' + '_' + idBusiness];
                case 'conteudo':
                case 'album':
                    return app.app.modules.business['categoria_geral' + '_' + idBusiness];
            }

            return null;
        }
    };
};
//# sourceMappingURL=categoria_1493477486416.js.map
