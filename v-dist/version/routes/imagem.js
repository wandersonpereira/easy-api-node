'use strict';

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {

  var utils = app.app.modules.utils;

  var storage = _multer2.default.diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, '/srv/uploads');
    },
    filename: function filename(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });

  var upload = (0, _multer2.default)({ storage: storage }).single('file');

  app.route('/imagem/:empresa').all(app.auth.authenticate()).get(function (req, res) {
    /**Contem o objeto de Tasks, que está na pasta models */
    var Imagens = utils.getModel(req.params.empresa, 'imagem');

    Imagens.findAll({}).then(function (imagens) {
      return res.json({ imagens: imagens });
    })
    //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
    //assim impedindo o recurso de ser executado
    .catch(function (err) {
      return res.status(412).json({ msg: err.message });
    });
  }).post(function (req, res) {
    var Imagens = utils.getModel(req.params.empresa, 'imagem');

    Imagens.create(req.body).then(function (value) {
      return res.json(value);
    })
    //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
    //assim impedindo o recurso de ser executado
    .catch(function (err) {
      return res.status(412).json({ msg: err.message });
    });
  });

  app.route('/imagem/:empresa/:id').all(app.auth.authenticate()).get(function (req, res) {
    /**Contem o objeto de Tasks, que está na pasta models */
    var Imagens = utils.getModel(req.params.empresa, 'imagem');

    Imagens.findOne({ where: { id: req.params.id } }).then(function (value) {
      value = value === null ? {} : value;

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
    var Imagens = utils.getModel(req.params.empresa, 'imagem');

    Imagens.update(req.body, { where: { id: req.params.id } })
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
    var Imagens = utils.getModel(req.params.empresa, 'imagem');

    Imagens.destroy({ where: { id: req.params.id } }).then(function (value) {
      return res.sendStatus(204);
    })
    //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
    //assim impedindo o recurso de ser executado
    .catch(function (err) {
      return res.status(412).json({ msg: err.message });
    });
  });

  /**Roda especifica para upload de imagem */
  app.route('/imagem/:empresa/upload/').all(app.auth.authenticate()).post(function (req, res) {
    upload(req, res, function (err) {
      if (err) {
        // An error occurred when uploading
        return res.status(412).json({ msg: err.message });
      }

      return res.sendStatus(204);
    });
  });
};
//# sourceMappingURL=imagem.js.map
