const Joi = require('joi');

const personValidationSchema = Joi.object({
    designation: Joi.string().required().min(1).max(50),
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    mobile_no: Joi.string().required().min(10).max(11),
    name: Joi.string().required().min(1).max(50),
});

function validate(person) {
    const { error } = personValidationSchema.validate(person);

    return error;
}

module.exports = {
    validate,
};
