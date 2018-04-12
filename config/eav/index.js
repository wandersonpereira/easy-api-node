module.exports = () => {
    const node_env = process.env.NODE_ENV;

    if (Boolean(node_env)) {
        return require(`./eav.${node_env}.js`);
    }

    return require('./eav.development.js');
}