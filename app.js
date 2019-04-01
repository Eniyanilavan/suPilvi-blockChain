const BlockChain = require('./block_chain');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const SU_PILVI = new BlockChain();

app.use(bodyParser.json());

app.post('/new_transaction',(req,res)=>{
    var body = req.body;
    SU_PILVI.addBlock(body);
    res.send(200);
})

app.get('/chains',(req,res)=>{
    res.send(SU_PILVI.printAll())
})

app.post('/add_peers',(req,res)=>{

})

// SU_PILVI.addBlock({"sample":"sample"});

// SU_PILVI.addBlock({"sample":"11"});

// SU_PILVI.printAll()