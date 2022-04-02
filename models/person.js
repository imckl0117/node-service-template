const { Schema } = require('mongoose');

const { MONGO_TEST_PERSON_COLLECTION } = require('@/config/constant/mongo');

const db = require('@/config/database/mongo').test;

const uuid = require('@/utils/uuid');

const personSchema = new Schema(
    {
        id: {
            type: String,
            default: uuid,
        },
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
    },
    { versionKey: false }
);

const personModel = db.model(
    'Person',
    personSchema,
    MONGO_TEST_PERSON_COLLECTION
);

module.exports = personModel;
