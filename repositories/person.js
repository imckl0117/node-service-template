const personModel = require('@/models/person');

const BaseRepository = require('./base');

class PersonRepository extends BaseRepository {
    constructor() {
        super(personModel);
    }
}

module.exports = new PersonRepository();
