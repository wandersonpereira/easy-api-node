const passport = require('passport');
const passportJwt = require('passport-jwt');
const eav = require('../../config/eav')();
const Strategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

module.exports = class Authentication {
    constructor (ProviderAuthentication) {
        this.ProviderAuthentication = ProviderAuthentication || null;
        this.auth = null;
    }

    load (app) {
        this.initAuth(app);
        return this.auth;
    }

    initAuth(app) {
        const _self = this;
        const jwtFromRequest = ExtractJwt.fromAuthHeader();
        const jwtSecret = eav.jwtSecret;

        const strategy = new Strategy({secretOrKey: jwtSecret, jwtFromRequest},
        (payload, done) => {
            if (!_self.ProviderAuthentication) return done(null, true);

            _self.ProviderAuthentication(app, payload, done);
        });
    
        passport.use(strategy);

        this.auth = {
            initialize: () => {
                return passport.initialize();;
            },
            authenticate: () => {
                return passport.authenticate('jwt', jwtSession);
            }
        };
    }
}