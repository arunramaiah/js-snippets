const key = "ZGF2ZW1AdWNkYXZpcy5lZHU=";
const value = "eyJ0ZW5hbnQiOiJVQyIsImNhbXB1cyI6IjAzIiwic2VhcmNoVGV4dCI6ImtpbGdvcmUgdHJvdXQifQ==";

let keyBuffer = new Buffer.from(key, 'base64');
let keyDecoded = keyBuffer.toString('ascii');

let valueBuffer = new Buffer.from(value, 'base64');
let valueDecoded = valueBuffer.toString('ascii');
// console.log(keyDecoded);
// console.log(valueDecoded);

const searchParams = { tenant: 'UC', campusCode: 'X'};

const { tenant, campusCode = 'No value' } = searchParams;

console.log(tenant, campusCode);