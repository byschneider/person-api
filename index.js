const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = require('./server/router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

app.use(router.BASE_PATH, router.router);

app.listen(PORT, HOST);

console.log(`[${new Date().toLocaleString()}] - Server at ${HOST}:${PORT}`);