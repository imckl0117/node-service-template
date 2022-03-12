const express = require('express');

const { SERVER_PORT } = require('@/config/constant/server');

const logger = require('@/utils/logger');

const app = express();

app.use(require('./middlewares'));
app.use('/api', require('./api-routes'));

app.listen(SERVER_PORT, () => {
    logger.info(`Server is listening on port ${SERVER_PORT}.`);
});
