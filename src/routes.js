const express = require('express');
const bettingRoutes = require('./modules/betting/betting.routes');
const nftRoutes = require('./modules/nft/nft.routes');
const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

// mount auth routes at /auth
router.use('/betting', bettingRoutes);
router.use('/nft', nftRoutes);

module.exports = router;
