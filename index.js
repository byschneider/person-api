const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = require('./server/router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;

console.log("=> " + HOST);

app.use(router.BASE_PATH, router.router);

//app.listen(PORT, HOST);
app.listen(PORT);

console.log(`[${new Date().toLocaleString()}] - Server at ${HOST}:${PORT}`);