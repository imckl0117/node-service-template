const { Router } = require('express');

const helloRoutes = require('./hello');

const router = Router();

router.use('/hello', helloRoutes);

module.exports = router;
