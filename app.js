const express = require('express');

const { SERVER_PORT } = require('@/config/server');

const app = express();

app.use(require('./middlewares'));

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}.`);
});
