// encrypt-file.js
const openpgp = require("openpgp");
const fs = require("fs");

const publicKeyArmored ='<xjMEZFzsIRYJKwYBBAHaRw8BAQdA4vO4UwzYMPA4IiYyiHL32cZu2Y3kQGvN
xAkiDfYtgZLNPEpvbiBTbWl0aCAoVGhpcyBrZXkgaXMgZm9yIHB1YmxpYyBz
aGFyaW5nKSA8am9uQGV4YW1wbGUuY29tPsKMBBAWCgA+BYJkXOwhBAsJBwgJ
kCpHh9IQfQV9AxUICgQWAAIBAhkBApsDAh4BFiEEqaREPDXXTFjTxXlyKkeH
0hB9BX0AAHm4AP0aMEw/1pdRt/bNOz9NifdwGPk8OtAs6VX3grNAQHZgswEA
8nAfYuYJVm5Z386Ae/SeERK5inF4DLZZv+HxKu+/twTOOARkXOwhEgorBgEE
AZdVAQUBAQdAM5OghSPWgciu6/2gPdjj2TP0wFZGI9X4T/Tjlr8czRoDAQgH
wngEGBYIACoFgmRc7CEJkCpHh9IQfQV9ApsMFiEEqaREPDXXTFjTxXlyKkeH
0hB9BX0AAMjYAQCmueEHyOK2M+cCeOWx5Y1YrThXYVV99I57e/T6t8Rs4gD/
Yh6ox1ptcY9E9qGgpiZwioiYzMlfX5jmZsNCku4mHwc=
=kWKK>';


encrypt();
async function encrypt() {
  const plainData = fs.readFileSync("secrets.txt");
  const encrypted = await openpgp.encrypt({
    message: openpgp.message.fromText(plainData),
    publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys,
  });

  fs.writeFileSync("encrypted-secrets.txt", encrypted.data);
}