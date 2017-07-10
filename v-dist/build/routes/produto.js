module.exports = app => {

    const utils = app.app.modules.utils;

    app.route('/produto/:empresa')
    .all(app.auth.authenticate())

    .get((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Produtos = utils.getModel(req.params.empresa, 'produto');

      Produtos.findAll({})
      .then(Produtos => res.json({Produtos : Produtos}))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}));
    })

    .post((req, res) => {
      const Produtos = utils.getModel(req.params.empresa, 'produto');

      Produtos.create(req.body)
      .then(value => res.json(value))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}));
    });

    app.route('/produto/:empresa/:id')
    .all(app.auth.authenticate())

    .get((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Produtos = utils.getModel(req.params.empresa, 'produto');

      Produtos.findOne({ where: { id: req.params.id } })
      .then(value => {
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
      const Produtos = utils.getModel(req.params.empresa, 'produto');

      Produtos.update(req.body, {where: {id: req.params.id}})
      //Retorna 204 Significa que foi executada com sucesso porém não retornou conteudo com resposta
      .then(value => res.sendStatus(204))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}))
    })

    .delete((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Produtos = utils.getModel(req.params.empresa, 'produto');

      Produtos.destroy({where: {id: req.params.id}})
      .then(value => res.sendStatus(204))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}))
    });
}
