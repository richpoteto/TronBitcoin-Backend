const express = require('express');
const { Joi } = require('express-validation');
const nftCtrl = require('./nft.controller');
const { validate } = require('../../helpers');

const router = express.Router();

router.route('/ids')
    .get(nftCtrl.findIds);

router.route('/stake')
    .post(nftCtrl.stakeNFT);

module.exports = router;