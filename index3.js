// npm-library
const Wallet = require('ethereumjs-wallet');

const fs = require('fs');

// keypair
const wallet = Wallet.generate();
const privKey = wallet.getPrivateKey();
let key = Buffer.from(privKey, 'hex');
let w = Wallet.fromPrivateKey(key);
let keyFile = w.toV3String('nccu');

fs.writeFile('keyStore.json', keyFile.toString(), function(err){
  if(err) throw err;
  console.log("Saved!");  

});
