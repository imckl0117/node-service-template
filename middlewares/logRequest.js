const logger = require('@/utils/logger');

function logRequest(req, res, next) {
    const { method, originalUrl } = req;

    logger.info(`${method} ${originalUrl}`);

    next();
}

module.exports = logRequest;
