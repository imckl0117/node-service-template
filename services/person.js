const personRepository = require('@/repositories/person');

const like = require('@/utils/like');

const personService = {
    async getList({ designation, email, mobile_no, name, limit, skip }) {
        try {
            const filter = {};

            if (designation) filter.designation = like(designation);
            if (email) filter.email = like(email);
            if (mobile_no) filter.mobile_no = like(mobile_no);
            if (name) filter.name = like(name);

            return await personRepository.find({
                filter,
                limit: Number(limit),
                skip: Number(skip),
            });
        } catch (e) {
            console.error(e);

            return e;
        }
    },
};

module.exports = personService;
