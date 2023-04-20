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
        // Get all NFTs
        const nfts = await alchemy.nft.getNftsForOwner(req.query.address);
        // Print NFTs
        var len = nfts.ownedNfts.length;
        console.log(nfts.ownedNfts[0]);
        var IDs = [];
        for (let i = 0; i < len; i++) {
            IDs.push({id : nfts.ownedNfts[i].tokenId, address : nfts.ownedNfts[i].contract.address, baseURI : nfts.ownedNfts[i].tokenUri});
        }
        console.log(IDs)
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

async function stakeNFT(req, res, next) {
    const {collection, id} = req.query;
    try {
        
    } catch (error) {
      return next(error);
    }
  }

module.exports = {
    findIds,
    findUrls,
    stakeNFT
};
