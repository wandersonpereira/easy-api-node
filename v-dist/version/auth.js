'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = require('passport-jwt');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    var Users = app.libs.sysDb.models.usuarios_aplos;
    var config = app.libs.config;
    var jwtFromRequest = _passportJwt.ExtractJwt.fromAuthHeader();

    var strategy = new _passportJwt.Strategy({ secretOrKey: config.jwtSecret, jwtFromRequest: jwtFromRequest }, function (payload, done) {
        Users.findById(payload.id).then(function (user) {
            if (user) {
                return done(null, {
                    id: user._id,
                    email: user.email
                });
            }

            return done(null, false);
        }).catch(function (error) {
            return done(error, null);
        });
    });

    _passport2.default.use(strategy);

    return {
        initialize: function initialize() {
            return _passport2.default.initialize();
        },
        authenticate: function authenticate() {
            return _passport2.default.authenticate('jwt', config.jwtSession);
        }
    };
};
//# sourceMappingURL=auth.js.map
