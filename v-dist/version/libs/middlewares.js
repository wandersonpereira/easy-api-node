'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    /**Middleare de configuração do json a ser exibido como resposta tela */
    app.set('json spaces', 4);

    /**Middleare de configuração da porta que o node será iniciado*/
    app.set('port', 3117);

    /**Converte os atributos do boyd para json*/
    app.use(_bodyParser2.default.json());

    /**Inicia a auteneticação */
    app.use(app.auth.initialize());

    /**Função genérica do app.all() que executa a delete do body.id*/
    app.use(function (req, res, next) {
        res.set({ 'content-type': 'application/json; charset=utf-8' });
        // delete req.body.id;
        next();
    });
};
//# sourceMappingURL=middlewares.js.map
