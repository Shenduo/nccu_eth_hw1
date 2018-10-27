// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
const privKey = wallet.getPrivateKey();
let key = Buffer.from(privKey, 'hex');
let w = Wallet.fromPrivateKey(key);
let keyFile = w.toV3String('nccu');

console.log(keyFile)
