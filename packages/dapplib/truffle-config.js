require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind essay idea hen forget traffic'; 
let testAccounts = [
"0xc43c2591deff3ec59b09d3f576ef28405b0faffeb4126fa37d7c49ebb1638505",
"0x90db2a05b32522bdc0f96634abb0a214f67b7e6ecdaed7ebb38006db23b49a3d",
"0xccd9e8505183faa5740118e1aabf3d8d74d4185923c978d7b85093daf7d1ca14",
"0xae732e617ee95a70b91a9b765843a32618f9826ae7341495f2036fe5081c5320",
"0x45688c95afdbffb3d4d2ddc7a3bdbdbc157cbf965f1d38883a0470b7acd8c288",
"0x6396e1dde72ccd881ae684e810577a7ddba03217ac329cfa020bc431b376bf25",
"0x837e97192c1ca07df8805b11e93ed806272a79e9909804b5d7cef5d2d8232969",
"0xeccff4ae685e792b61651de1ee5fb8aa2c18415d17716f0179ca9d5e00824610",
"0x0ae89f793555d97c86a36c4876b480d31e3307b008754ace4abd2afe0d2f7825",
"0x4d0af60f8cc1d91b49257c7d0295d4016601f25c435ed1849f4f2c984f606a6f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

