import jwt from 'jwt-simple';

module.exports = app => {
    const config = app.libs.config;
    const User = app.libs.sysDb.models.usuarios_aplos;
    
    app.post('/token', (req, res) => {
        if (req.body.email && req.body.senha) {
            const email = req.body.email;
            const senha = req.body.senha;

            User.findOne({where : {email}})
            .then(user => {
                if (User.isPassword(user.senha, senha)) {
                    const payload = {id: user.id};

                    return res.json({
                        token: jwt.encode(payload, config.jwtSecret),
                        mn1: user.id,
                        mn2: user._idEmpresa,
                        image: user.imagem,
                        tipo: '1'
                    });
                }

                return res.sendStatus(401);
            })
            .catch(error => res.sendStatus(401));
        } else {
            return res.sendStatus(401);
        }
    });
}