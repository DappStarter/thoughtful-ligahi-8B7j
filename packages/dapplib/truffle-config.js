require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad hockey enroll success spatial'; 
let testAccounts = [
"0xb0ced1fe3e20d1aee36bb5bbccd3058e72aebf1e4e8d4fa2df2e6b9f3b804689",
"0x5bc58421a3880f128bbe8ac4aefd08d537320a871ffb492fb81528739ebf643c",
"0x7a935a71f47fe2be542c00744aa95d18a17bfbe54595051e70ddda110ceedd04",
"0xdd3d2cc9f189b36f599b05bf301ddc6ce99d7df0da330bac86b332366be34245",
"0xfe784f940e4b5162ef8278a4714d101f02b71ae35e7e89ed1a30f3da1d5a9cac",
"0x264b7ad2fc8ec5e87f0b17d182be1e5719d6cca40d6772e07e5e54f85a78e51c",
"0xced84bbc184b46a02bb9103363f0bbc0f76376ba060d08f11ef77fa576fb2e70",
"0xc2d2669db8754ab49e6a79d8267e7a6243230e5feb4a69e92e8bf0d74670eb0a",
"0xf9ea359208f0a89857940e1d7cb7a3298f093a95a841509c01196a1038285023",
"0xa9248305457f0a074a1f50ef0e49d544bd08a1d31dc72911e62aba9c79358c2b"
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

