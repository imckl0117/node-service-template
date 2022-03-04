const { Router } = require('express');

const helloService = require('@/services/hello');
const generateResponse = require('@/utils/generateResponse');

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;

    const params = { name };

    const result = await helloService.sayHello(params);

    generateResponse(res, result);
});

module.exports = router;
