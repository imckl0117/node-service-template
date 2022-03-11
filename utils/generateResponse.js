const { ValidationError } = require('joi');

const { HTTP_STATUS } = require('@/config/constant/enum');

function generateResponse(res, result) {
    let status;
    let message;

    if (result instanceof ValidationError) {
        status = HTTP_STATUS.UNPROCESSABLE_ENTITY;
        message = result.details.map((d) => d.message);
    } else if (result instanceof Error) {
        status = HTTP_STATUS.INTERNAL_SERVER_ERROR;
        message = result.message;
    } else if (result === undefined) {
        status = HTTP_STATUS.OK;
        message = 'OK';
    } else if (result === null) {
        status = HTTP_STATUS.NOT_FOUND;
        message = 'Not found';
    } else {
        status = HTTP_STATUS.OK;
        message = result;
    }

    const msg = { status, message };

    res.status(status).json(msg);
}

module.exports = generateResponse;
