/** 
 * Import all models 
 */
const express = require('express');
const app = express();
const www = require('./.libs/www');

/**
 * Load all functions from system
 */
function loadSystem() {
    www(app);
}

loadSystem();
module.exports = app;