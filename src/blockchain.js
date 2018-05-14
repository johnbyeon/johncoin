const CryptoJS = require("crypto-js");

class Block{
    constructor(index, hash, previousHash, timestamp, data){
        this.index =index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
    }
}

const genesisBlock = new Block(
    0,
    "D53D9E0C22CB5B0EB3A18207BE801B7DE0B0B271E8BB442C431A76DF404D3B3F",
    null,
    1524728528882,
    "This is the genesis!!"
);

let blockchain = [genesisBlock];

const getLastBlock = () => blockchain[blockchain.length -1];

const getTimestamp = () => new Date.getTime() / 1000;

const getBlockChain = () => blockchain;

const createHash = (intex, previousHash, timestamp, data) => {
    CryptoJS.SHA256(index + previousHash + timestamp + JSON.stringify(data)
    ).toString();
}

const createNewBlock = data => {
    const previousBlock = getLastBlock();
    const newBlockIndex = previousBlock.index + 1;
    const newTimestamp = getTimestamp();
    const newHash = createHash(newBlockindex,
        pricaousBlock,
        hash,
        newTimestamp,
        data
    );
    const newBlock = new Block(
        newBlockIndex,
        newHash,
        previousBlock.hash,
        newTimestamp,
        data
    );
    return newBlock;
};

const getBlocksHash = (block) => createHash(block.index, block.previousHash, block.timestamp, block.data);

const isNewBlockValid = (candidateBlock, latestBlock) => {
    if(!isNewBlockValid(candidateBlock))
    {
        console.log("The candidate block structure is not valid");
        return false;
    }else if(latestBlock,index + 1 !== candidateBlock.intex){
        console.log('The candidate block doesnt have a valid index');
        return false;
    }else if(latestBlock.hash !== candidateBlock.previousHash){
        console.log(
        "The previousHash of the candidate block is not the hash of the latest block"
        );
        return false;
    } else if(getBlocksHash(candidateBlock) !== candidateBlock.hash){
        console.log("The hash of this block is invalid");
        return false;
    }
    return true;
}

const isNewStructureValid = (block) => {
    return (
        typeof block.index === "number" && 
        typeof block.hash === "string" && 
        typeof block.previousHash === "string" &&
        typeof block.timestamp === "number" &&
        typeof block.data === "string"
    );
}

const isChainValid = (candidateChain) => {
    const isGenesisValid = block =>
    {
        return JSON.stringify(block) === JSON.stringify(genesisBlock);
    };
    if(!isGenesisVaild(candidateChain[0])){
        conssole.log(
            "The candidateChains's genesisBlock is not the same as our genesisblock"
        );
        return false;
    }
    for(let i =1; i < candidateChain.length; i++){
        if(!isNewBlockValid(candidateChain[i],candidateChain[i-1]))
        {
            return false;
        }
    }
    return true;
}

const replaceChain = newChain =>{
    if(isChainValid(newChain) && candidateChain.length > getBlockChain().length){
        blockchain = newChain;
        return true;
    } else {
        return false;
    }
};

const addBlockToChain = newBlock => {
    if(isNewBlockValid(candidateBlock,getLastBlaock()))
    {
        getBlockChain().push(candidateBlock)
        return true;
    } else {
        return false;
    }
};
