const personModel = require('@/models/person');

const personRepository = {
    async find(filter = {}) {
        return await personModel.find(filter);
    },
};

module.exports = personRepository;
