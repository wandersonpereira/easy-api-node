module.exports = app => {

    const utils = app.app.modules.utils;

    app.route('/categoria/multiplo/:empresa')
    .all(app.auth.authenticate())
    .post((req, res) => {

      if (req.body[0] != undefined) {
        const tamanho = req.body[0].length;
        return req.body[0].map(item, key => {
          let Categorias = utils.getModel(req.params.empresa, 'categoria', item.tipo || false);

          return Categorias.create(item)
          .then(value => {
            if (tamanho >= key) return res.json(value);
          })
          //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
          //assim impedindo o recurso de ser executado
          .catch(err => res.status(412).json({msg: err.message}));
        });
      }

      res.status(412).json({msg: 'Não há item a ser inserido.'});
    });

    app.route('/categoria/:empresa')
    .all(app.auth.authenticate())

    .get((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Categorias = utils.getModel(req.params.empresa, 'categoria');

      Categorias.findAll({})
      .then(categorias => res.json({categorias}))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}));
    })

    .post((req, res) => {

      if (req.body[0] != undefined) {
        req.body[0].map(item => {
          let Categorias = utils.getModel(req.params.empresa, 'categoria', item.tipo || false);

        });
      }

      const Categorias = utils.getModel(req.params.empresa, 'categoria');

      Categorias.create(req.body)
      .then(value => res.json(value))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}));
    });

    app.route('/categoria/:empresa/:id')
    .all(app.auth.authenticate())

    .get((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Categorias = utils.getModel(req.params.empresa, 'categoria');

      Categorias.findOne({ where: { id: req.params.id } })
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
      const Categorias = utils.getModel(req.params.empresa, 'categoria');

      Categorias.update(req.body, {where: {id: req.params.id}})
      //Retorna 204 Significa que foi executada com sucesso porém não retornou conteudo com resposta
      .then(value => res.sendStatus(204))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}))
    })

    .delete((req, res) => {
      /**Contem o objeto de Tasks, que está na pasta models */
      const Categorias = utils.getModel(req.params.empresa, 'categoria');

      Categorias.destroy({where: {id: req.params.id}})
      .then(value => res.sendStatus(204))
      //Error 412 usado para quando uma dos atributos passados no cabeçalho for considerado com falso
      //assim impedindo o recurso de ser executado
      .catch(err => res.status(412).json({msg: err.message}))
    });
}
