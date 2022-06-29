const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const scenarioRoutes = require('./scenario-routes');
const choicesRoutes = require('./choices-routes');

router.use('/users', userRoutes);
router.use('/scenarios', scenarioRoutes);
router.use('/choices', choicesRoutes);

module.exports = router;