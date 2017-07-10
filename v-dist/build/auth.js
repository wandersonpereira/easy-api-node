import passport from 'passport';
import {Strategy, ExtractJwt} from 'passport-jwt';

module.exports = app => {
    const Users = app.libs.sysDb.models.usuarios_aplos;
    const config = app.libs.config;
    const jwtFromRequest = ExtractJwt.fromAuthHeader();
    
    const strategy = new Strategy({secretOrKey: config.jwtSecret, jwtFromRequest},
    (payload, done) => {
        Users.findById(payload.id)
        .then((user) => {
            if (user) {
                return done(null, {
                    id: user._id,
                    email: user.email,
                });
            }

            return done(null, false);
        }).catch(error => done(error, null));
    });

    passport.use(strategy);
    
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate('jwt', config.jwtSession);
        },
    } 

}