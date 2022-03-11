const { Schema } = require('mongoose');

const { MONGO_TEST_PERSON_COLLECTION } = require('@/config/constant/mongo');

const db = require('@/config/database/mongo').test;

const personSchema = new Schema({
    designation: {
        type: String,
    },
    email: {
        type: String,
    },
    mobile_no: {
        type: String,
    },
    name: {
        type: String,
    },
});

const personModel = db.model(
    'Person',
    personSchema,
    MONGO_TEST_PERSON_COLLECTION
);

module.exports = personModel;
