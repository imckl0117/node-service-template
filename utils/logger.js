const winston = require('winston');

const { NODE_ENV } = require('@/config/constant/app');

const opts = {
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({
            filename: 'log/error.log',
            level: 'error',
        }),
        new winston.transports.File({
            filename: 'log/combined.log',
        }),
    ],
};

if (NODE_ENV !== 'production') {
    opts.transports.push(
        new winston.transports.Console({
            format: winston.format.simple(),
        })
    );
}

const logger = winston.createLogger(opts);

module.exports = logger;
