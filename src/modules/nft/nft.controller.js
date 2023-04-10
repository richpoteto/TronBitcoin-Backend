const express = require('express')
const { Alchemy } = require('alchemy-sdk');
const { Network } = require('alchemy-sdk');

const app = express();

const config = {
    apiKey: "Fxmfls6frj5CKArdLMDMMESogb0Y0JO0",
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(config);

async function findIds(req, res, next) {
    try {
        const nfts = await alchemy.nft.getNftsForOwner(req.query.address);
        var len = nfts.ownedNfts.length;
        var IDs = [];
        for (let i = 0; i < len; i++) {
            console.log(nfts.ownedNfts[i].tokenId, 111);
            IDs.push([nfts.ownedNfts[i].tokenId, nfts.ownedNfts[i].contract.address]);
        }
        return res.json(IDs);
    } catch (error) {
        next(error);
    }
}

async function findUrls(req, res, next) {
    try {
        const nfts = await alchemy.nft.getNftsForOwner(req.query.address);
        var len = nfts.ownedNfts.length;
        var urls = [];
        for (let i = 0; i < len; i++) {
            urls.push(nfts.ownedNfts[i].media[0].gateway);
        }
        return res.json(urls);
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    findIds,
    findUrls,
};
