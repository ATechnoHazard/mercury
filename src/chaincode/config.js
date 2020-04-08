const Web3 = require('web3');


module.exports = {
    provider: new Web3.providers.HttpProvider("http://127.0.0.1:8545"),
    erc20: '0x4419475d0388B7BBba71c7904810c35a14b2dB2F',
    erc721: '0x1D92E9c7a067dD773aD367Aa5adeF6fe1B46Af3c',
    marketplace: '0xcd8FBf5e9F68a0F5E9800CcdDfd25D236bBf96d7',

    amount: 4,
    tokenid: 4,

    privateKey1: '0x754455c89240a819055ef7078433ab36e88c1afc91ca3561c2df1e7c1b538c6e',
    privateKey2: '0x577ef4b9667f20dcc9dcc7c835f6a38d562c7ada1df48f3f4feda62476fae4b6',
    orderId: '0x468fc9c005382579139846222b7b0aebc9182ba073b2455938a86d9753bfb078',
    expiration: 0
}