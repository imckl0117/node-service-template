const { Router } = require('express');

const personRoutes = require('./person');

const router = Router();

router.use('/person', personRoutes);

module.exports = router;
