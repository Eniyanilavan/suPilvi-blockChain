var SHA256 = require('crypto-js/sha256');
var Block = require('./block');

class BlockChain{
    constructor(){
        this.difficulty = 4;
        this.chain = [this.generateGenesisBlock()];
    }

    calculateHash(newBlock){
        return SHA256(newBlock.index + newBlock.timestamp + newBlock.data + newBlock.previoushash + newBlock.noice).toString();
    }

    mineBlock(newBlock){
        while(newBlock.hash.substring(0, this.difficulty) !== Array(this.difficulty+1).join("0")){
            newBlock.noice = newBlock.noice+1;
            newBlock.hash = this.calculateHash(newBlock);
        }
        return this.calculateHash(newBlock);
    }

    generateGenesisBlock(){
        var newBLock = new Block(0, new Date(), "Genesis Block!", "null");
        newBLock.hash = this.mineBlock(newBLock);
        return newBLock;
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1]
    }

    addBlock(data){
        var newBlock = new Block(this.chain.length, new Date(), JSON.stringify(data), this.getLastBlock().hash);
        newBlock.hash = this.mineBlock(newBlock);
        this.chain.push(newBlock)
    }

}

module.exports = BlockChain;