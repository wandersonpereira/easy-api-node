'use strict';

var _jwtSimple = require('jwt-simple');

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    var config = app.libs.config;
    var User = app.libs.sysDb.models.usuarios_aplos;

    app.post('/token', function (req, res) {
        if (req.body.email && req.body.senha) {
            var email = req.body.email;
            var senha = req.body.senha;

            User.findOne({ where: { email: email } }).then(function (user) {
                if (User.isPassword(user.senha, senha)) {
                    var payload = { id: user.id };

                    return res.json({
                        token: _jwtSimple2.default.encode(payload, config.jwtSecret),
                        mn1: user.id,
                        mn2: user._idEmpresa,
                        image: user.imagem,
                        tipo: '1'
                    });
                }

                return res.sendStatus(401);
            }).catch(function (error) {
                return res.sendStatus(401);
            });
        } else {
            return res.sendStatus(401);
        }
    });
};
//# sourceMappingURL=token.js.map
