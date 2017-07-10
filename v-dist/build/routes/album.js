module.exports = app => {

    const utils = app.app.modules.utils;

    app.route('/album/:empresa')
    .all(app.auth.authenticate())

    .get((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Albuns = utils.getModel(req.params.empresa, 'album');

      Albuns.findAll({})
      .then(albuns => res.json({albuns}))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}));
    })

    .post((req, res) => {
      const Albuns = utils.getModel(req.params.empresa, 'album');

      Albuns.create(req.body)
      .then(value => res.json(value))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}));
    });

    app.route('/album/:empresa/:id')
    .all(app.auth.authenticate())

    .get((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Albuns = utils.getModel(req.params.empresa, 'album');

      Albuns.findOne({ where: { id: req.params.id } })
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
      const Albuns = utils.getModel(req.params.empresa, 'album');

      Albuns.update(req.body, {where: {id: req.params.id}})
      //Retorna 204 Significa que foi executada com sucesso porém não retornou conteudo com resposta
      .then(value => res.sendStatus(204))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}))
    })

    .delete((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Albuns = utils.getModel(req.params.empresa, 'album');

      Albuns.destroy({where: {id: req.params.id}})
      .then(value => res.sendStatus(204))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}))
    });
}
