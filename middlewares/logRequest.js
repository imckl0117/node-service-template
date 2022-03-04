function logRequest(req, res, next) {
    const { method, originalUrl } = req;

    console.log(`${method} ${originalUrl}`);

    next();
}

module.exports = logRequest;
