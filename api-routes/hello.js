const { Router } = require('express');

const helloService = require('@/services/hello');

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;

    const params = { name };

    const result = await helloService.sayHello(params);

    const msg = {
        status: 200,
        message: result,
    };

    res.json(msg);
});

module.exports = router;
