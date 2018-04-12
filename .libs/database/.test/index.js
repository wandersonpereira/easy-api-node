const assert = require('assert');
const Database = require('../Database');
describe('DATABASE', function() {
    const database = new Database();
    database.load();
    
    describe('Check connection with system database', function() {
        it('Get Model User [SELECT]', function() {
        });
        it('Get Model User [INSERT]', function() {
        });
        it('Get Model User [UPDATE]', function() {
        });
        it('Get Model User [DELETE]', function() {
        });
    });

    describe('Check connection with business database', function() {
        it('Get Model User [SELECT]', function() {
        });
        it('Get Model User [INSERT]', function() {
        });
        it('Get Model User [UPDATE]', function() {
        });
        it('Get Model User [DELETE]', function() {
        });
    })
});