import express from "express";
import consign from "consign";

const app = express();

let config = 'config.development.js';

consign()
    .include("libs/config.js")
    .then("libs/sysDb.js")
    .then("libs/db.js")
    .then("auth.js")
    .then("libs/middlewares.js")
    .then("app/modules/")
    .then("app/routes")
    .then("libs/boots.js")
    .into(app);


module.exports = app;