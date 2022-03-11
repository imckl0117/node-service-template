const personModel = require('@/models/person');

const personRepository = {
    async count({ filter = {} } = {}) {
        return await personModel.countDocuments(filter);
    },

    async create({ document }) {
        return await personModel.create(document);
    },

    async find({ filter = {}, limit = 0, skip = 0 } = {}) {
        return await personModel.find(filter).skip(skip).limit(limit);
    },
};

module.exports = personRepository;
