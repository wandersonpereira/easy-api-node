module.exports = app => {
    const Task = app.db.getBSSModel('task', {idBusiness: 'my_business'});

    app.get("/task", (req, res) => {
        Task.find({}).then(rs => {
            res.json({error : false, msg: 'YOU GET TASK', result: rs});
        }).catch(err => {
            res.json({error: true, msg: err.message, result: {} });
        })
    })
};