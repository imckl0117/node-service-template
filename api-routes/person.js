const { Router } = require('express');

const personService = require('@/services/person');

const generateResponse = require('@/utils/generateResponse');

const personValidator = require('@/validations/person');

const router = Router();

router.get('/', async (req, res) => {
    const {
        designation,
        email,
        mobile_no,
        name,
        limit = 0,
        skip = 0,
    } = req.query;

    const params = { designation, email, mobile_no, name, limit, skip };

    const result = await personService.getList(params);

    generateResponse(res, result);
});

router.get('/count', async (req, res) => {
    const { designation, email, mobile_no, name } = req.query;

    const params = { designation, email, mobile_no, name };

    const result = await personService.getListCount(params);

    generateResponse(res, result);
});

router.post('/', async (req, res) => {
    const { designation, email, mobile_no, name } = req.body;

    const person = { designation, email, mobile_no, name };

    const error = personValidator.validate(person);

    if (error) {
        generateResponse(res, error);
        return;
    }

    const result = await personService.create(person);

    generateResponse(res, result);
});

module.exports = router;
