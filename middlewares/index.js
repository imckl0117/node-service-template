const express = require('express');

const checkApiKey = require('./checkApiKey');
const { json, urlencoded } = express;
const logRequest = require('./logRequest');

const app = express();

app.use(checkApiKey);
app.use(json({ limit: '10mb' }));
app.use(urlencoded({ extended: true, limit: '10mb' }));
app.use(logRequest);

module.exports = app;
