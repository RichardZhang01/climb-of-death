const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use(homeRoutes);

router.use((req, res) => {
  res.status(404).send('error');
});

module.exports = router;