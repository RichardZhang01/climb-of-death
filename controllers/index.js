const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const gameRoutes = require('./game-routes');

router.use('/api', apiRoutes);
router.use(homeRoutes);
router.use('/gamepage', gameRoutes);

router.use((req, res) => {
  res.status(404).send('error');
});

module.exports = router;