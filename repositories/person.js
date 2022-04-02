const personModel = require('@/models/person');

const BaseRepository = require('./base');

class PersonRepository extends BaseRepository {
    constructor(personModel) {
        super(personModel);
    }
}

module.exports = new PersonRepository(personModel);
