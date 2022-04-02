const personRepository = require('@/repositories/person');

const { like, logger } = require('@/utils');

const BaseService = require('./base');

class PersonService extends BaseService {
    constructor(personRepository) {
        super();
        this.personRepository = personRepository;
    }

    async create({ designation, email, mobile_no, name }) {
        try {
            const document = { designation, email, mobile_no, name };

            return await this.personRepository.create({ document });
        } catch (e) {
            logger.error(e);

            return e;
        }
    }

    async getList({ designation, email, mobile_no, name, limit, skip }) {
        try {
            const filter = {};

            if (designation) filter.designation = like(designation);
            if (email) filter.email = like(email);
            if (mobile_no) filter.mobile_no = like(mobile_no);
            if (name) filter.name = like(name);

            return await this.personRepository.find({
                filter,
                limit: Number(limit),
                skip: Number(skip),
            });
        } catch (e) {
            logger.error(e);

            return e;
        }
    }

    async getListCount({ designation, email, mobile_no, name }) {
        try {
            const filter = {};

            if (designation) filter.designation = like(designation);
            if (email) filter.email = like(email);
            if (mobile_no) filter.mobile_no = like(mobile_no);
            if (name) filter.name = like(name);

            return await this.personRepository.count({ filter });
        } catch (e) {
            logger.error(e);

            return e;
        }
    }
}

module.exports = new PersonService(personRepository);
