let Web3 = require("web3");

let provider = new Web3.providers.HttpProvider('https://eth-mainnet.g.alchemy.com/v2/upqnG4KpoMpYxAvl94FotRNIaP_0eO9w');
let web3 = new Web3(provider);

async function getBalance() {
     const balance = await web3.eth.getBalance('0xf4783E9620fA022b874900D0C833112A30Df5b3f');

     getBalance();
     let balanceInEth = web3.utils.fromWei(balance, 'ether');
     console.log(`Balance: ${balanceInEth} ETH`);
     return balanceInEth;
     let balanceInWei = web3.utils.toWei(balance, 'ether');
     console.log(`Balance: ${balanceInWei} Wei`);
     return balanceInWei;
}