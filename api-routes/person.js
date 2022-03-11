const { Router } = require('express');

const personService = require('@/services/person');

const generateResponse = require('@/utils/generateResponse');

const router = Router();

router.get('/', async (req, res) => {
    const { designation, email, mobile_no, name } = req.query;

    const params = { designation, email, mobile_no, name };

    const result = await personService.getList(params);

    generateResponse(res, result);
});

module.exports = router;
