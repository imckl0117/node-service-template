const mongoose = require('mongoose');

const { MONGO_TEST_CONNECTION_STRING } = require('@/config/constant/mongo');

const test = mongoose.createConnection(MONGO_TEST_CONNECTION_STRING);

module.exports = {
    test,
};
