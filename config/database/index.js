module.exports = () => {
    const node_env = process.env.NODE_ENV;

    if (Boolean(node_env)) {
        return require(`./db.${node_env}.js`);
    }

    return require('./db.development.js');
}