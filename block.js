var SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previoushash){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previoushash = previoushash;
        this.noice = 0;
        this.hash = "";
    }

    calculateHash(){
        return SHA256(this.index + this.timestamp + this.data + this.previoushash).toString();
    }

}

module.exports = Block;