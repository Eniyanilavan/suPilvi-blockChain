const BlockChain = require('./block_chain');

var SU_PILVI = new BlockChain();

console.log("Mining 1st block");

SU_PILVI.addBlock({"sample":"sample"});

console.log("Mining 2nd block");

SU_PILVI.addBlock({"sample":"11"});