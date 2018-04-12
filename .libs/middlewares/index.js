const bodyParse = require('body-parser');
const env = require('../../config/eav')();

module.exports = (app) => {
    /**Middleare de configuração do json a ser exibido como resposta tela */
    app.set('json spaces', 4);

    /**Middleare de configuração da porta que o node será iniciado*/
    app.set('port', env.port || '3117');

    /**Converte os atributos do boyd para json*/
    app.use(bodyParse.json());

    /**Inicia a auteneticação */
    if (app.auth) {
        app.use(app.auth.initialize());
    }
    
    /**Função genérica do app.all() que executa a delete do body.id*/
    app.use((req, res, next) => {
       res.set({ 'content-type': 'application/json; charset=utf-8' });
      // delete req.body.id;
      next();
    });
}
