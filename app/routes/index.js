module.exports = app => {
    const Usuario = app.db.getSYSModel('churrasco');

    app.get("/", (req, res) => {
        Usuario.find({}).then(rs => {
            res.json({error : false, msg: 'WELCOME TO EASY API', result: rs});
        }).catch(err => {
            res.json({error: true, msg: err.message, result: {} });
        })
    })
};