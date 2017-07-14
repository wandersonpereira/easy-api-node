module.exports = app => {
    const node_env = process.env.NODE_ENV;

    if (Boolean(node_env)) {
        return require(`./config.${node_env}.js`);
    }

    return require('./config.development.js');
}