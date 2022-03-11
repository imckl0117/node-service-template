const { API_KEY } = require('@/config/constant/server');

function checkApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];

    if (API_KEY && apiKey !== API_KEY) {
        const msg = {
            status: 403,
            message: 'A service key is not found or is invalid.',
        };

        res.json(msg);

        return;
    }

    next();
}

module.exports = checkApiKey;
