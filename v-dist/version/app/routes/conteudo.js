'use strict';

module.exports = function (app) {

  var utils = app.app.modules.utils;

  app.route('/conteudos/:empresa').all(app.auth.authenticate()).get(function (req, res) {
    /**Contem o objeto de Tasks, que está na pasta models */
    var Conteudos = utils.getModel(req.params.empresa, 'conteudo');

    Conteudos.findAll({}).then(function (conteudos) {
      return res.json({ conteudos: conteudos });
    })
    //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
    //assim impedindo o recurso de ser executado
    .catch(function (err) {
      return res.status(412).json({ msg: err.message });
    });
  }).post(function (req, res) {
    var Conteudos = utils.getModel(req.params.empresa, 'conteudo');

    Conteudos.create(req.body).then(function (value) {
      return res.json(value);
    })
    //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
    //assim impedindo o recurso de ser executado
    .catch(function (err) {
      return res.status(412).json({ msg: err.message });
    });
  });

  app.route('/conteudos/:empresa/:id').all(app.auth.authenticate()).get(function (req, res) {
    /**Contem o objeto de Tasks, que está na pasta models */
    var Conteudos = utils.getModel(req.params.empresa, 'conteudo');

    Conteudos.findOne({ where: { id: req.params.id } }).then(function (value) {
      if (value) return res.json(value);

      //Caso não encontre valor, retorna 404 -> Registro não encontrado
      return res.sendStatus(404);
    })
    //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
    //assim impedindo o recurso de ser executado
    .catch(function (err) {
      return res.status(412).json({ msg: err.message });
    });
  }).put(function (req, res) {
    /**Contem o objeto de Tasks, que está na pasta models */
    var Conteudos = utils.getModel(req.params.empresa, 'conteudo');

    Conteudos.update(req.body, { where: { id: req.params.id } })
    //Retorna 204 Significa que foi executada com sucesso porém não retornou conteudo com resposta
    .then(function (value) {
      return res.sendStatus(204);
    })
    //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
    //assim impedindo o recurso de ser executado
    .catch(function (err) {
      return res.status(412).json({ msg: err.message });
    });
  }).delete(function (req, res) {
    /**Contem o objeto de Tasks, que está na pasta models */
    var Conteudos = utils.getModel(req.params.empresa, 'conteudo');

    Conteudos.destroy({ where: { id: req.params.id } }).then(function (value) {
      return res.sendStatus(204);
    })
    //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
    //assim impedindo o recurso de ser executado
    .catch(function (err) {
      return res.status(412).json({ msg: err.message });
    });
  });
};
//# sourceMappingURL=conteudo.js.map
