const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const scenarioRoutes = require('./scenario-routes');

router.use('/users', userRoutes);
router.use('/scenarios', scenarioRoutes);

module.exports = router;