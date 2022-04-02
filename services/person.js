const personRepository = require('@/repositories/person');

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
            this.util.logger.error(e);

            return e;
        }
    }

    async getList({ designation, email, mobile_no, name, limit, skip }) {
        try {
            const filter = {};

            if (designation) filter.designation = this.util.like(designation);
            if (email) filter.email = this.util.like(email);
            if (mobile_no) filter.mobile_no = this.util.like(mobile_no);
            if (name) filter.name = this.util.like(name);

            return await this.personRepository.find({
                filter,
                limit: Number(limit),
                skip: Number(skip),
            });
        } catch (e) {
            this.util.logger.error(e);

            return e;
        }
    }

    async getListCount({ designation, email, mobile_no, name }) {
        try {
            const filter = {};

            if (designation) filter.designation = this.util.like(designation);
            if (email) filter.email = this.util.like(email);
            if (mobile_no) filter.mobile_no = this.util.like(mobile_no);
            if (name) filter.name = this.util.like(name);

            return await this.personRepository.count({ filter });
        } catch (e) {
            this.util.logger.error(e);

            return e;
        }
    }
}

module.exports = new PersonService(personRepository);
