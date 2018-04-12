const middlewares = require('../.libs/middlewares');
const routes = require('../.libs/routes');
const authentication = require('../.libs/auth');
/**
 * Case you need add new authentication type, use setProviderAuthentication
 * Ex: 
 * const auth = new authentication.Authentication().setProviderAuthentication(MYPROVIDER);
 * or
 * const auth = new authentication.Authentication(MYPROVIDER);
 */

const auth = new authentication.Authentication();

/**
 * Add all dependens for project run
 */
module.exports = {
    injects: {
        auth
    },
    declarations: [
        routes,
        middlewares
    ]
}