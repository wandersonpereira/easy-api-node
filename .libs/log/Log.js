module.exports = class Log {
    constructor () {

    }

    info (arg) {
        console.log(`SUCCESS >> ${arg}`);
    }
 
    error (arg) {
        console.error(`ERROR >> ${arg}`)
    }

    warn (arg) {
        console.warn(`WARN >> ${arg}`)
    }
}