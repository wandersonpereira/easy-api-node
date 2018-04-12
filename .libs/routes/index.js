const fs = require('fs');
const path = require('path');

/**
 * Load all routes, that are insede app/routes/*.js
 */
module.exports = (app) => {
    const dir = path.join(__dirname, `../../app/routes`);
    fs.readdirSync(dir).forEach(file => {
        const routeDir = path.join(dir, file);
        if (routeDir.indexOf('.js') >= 0){
            require(routeDir)(app);
        }
    });
}