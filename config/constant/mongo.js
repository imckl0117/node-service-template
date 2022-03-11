const {
    MONGO_TEST_CONNECTION_STRING,
    MONGO_TEST_PERSON_COLLECTION = 'person',
} = process.env;

module.exports = {
    // connection strings
    MONGO_TEST_CONNECTION_STRING,

    // collection names
    MONGO_TEST_PERSON_COLLECTION,
};
