// const openpgp = require("openpgp")
// const publicKey = require('publickeyfile');
const keys = require('./publickeyfile');

console.log(keys);
// const generateKeyPair = async () => {
//     const { publicKey, privateKey } = await openpgp.generateKey({
//         curve: 'ed25519',
//         userIDs: [
//             {
//                 name: 'Jon Smith', email: 'jon@example.com',
//                 comment: 'This key is for public sharing'
//             }
//         ],
//         passphrase: 'super long and hard to guess secret',
//     });

//     console.log(publicKey);
//     console.log(privateKey);
// }

// generateKeyPair()