import multer from 'multer';

module.exports = app => {

    const utils = app.app.modules.utils;
    
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, '/srv/uploads');
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
      }
    });

    const upload = multer({storage}).single('file');

    app.route('/imagem/:empresa')
    .all(app.auth.authenticate())

    .get((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Imagens = utils.getModel(req.params.empresa, 'imagem');

      Imagens.findAll({})
      .then(imagens => res.json({imagens}))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}));
    })

    .post((req, res) => {
      const Imagens = utils.getModel(req.params.empresa, 'imagem');

      Imagens.create(req.body)
      .then(value => res.json(value))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}));
    });

    app.route('/imagem/:empresa/:id')
    .all(app.auth.authenticate())

    .get((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Imagens = utils.getModel(req.params.empresa, 'imagem');

      Imagens.findOne({ where: { id: req.params.id } })
      .then(value => {
        value = value === null ? {} : value;

        if (value) return res.json(value);

        //Caso não encontre valor, retorna 404 -> Registro não encontrado
        return res.sendStatus(404);
      })
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}))
    })

    .put((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Imagens = utils.getModel(req.params.empresa, 'imagem');

      Imagens.update(req.body, {where: {id: req.params.id}})
      //Retorna 204 Significa que foi executada com sucesso porém não retornou conteudo com resposta
      .then(value => res.sendStatus(204))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}))
    })

    .delete((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Imagens = utils.getModel(req.params.empresa, 'imagem');

      Imagens.destroy({where: {id: req.params.id}})
      .then(value => res.sendStatus(204))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}))
    });

    /**Roda especifica para upload de imagem */
    app.route('/imagem/:empresa/upload/')
    .all(app.auth.authenticate())
    .post((req, res) => {
      upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          return res.status(412).json({msg: err.message});
        }

        return res.sendStatus(204);
      })
      
    }); 
}
