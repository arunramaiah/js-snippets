const alphabet = [..."abcdefghijklmnopqrstuvwxyz'-."];

expandSearchPrefixes = (searchPrefixes) =>
  searchPrefixes.reduce((acc, prefix) => [...acc, ...alphabet.map((letter) => `${prefix}${letter}`)], []);
console.log(expandSearchPrefixes(alphabet));

//const array1 = ['a', 'b', 'c', 'd', 'e'];

// 0 + 1 + 2 + 3 + 4
const initialValue = '';
const twoCharPrefix = array1.reduce(
  (acc, prefix) =>[...acc, ...alphabet.map((letter) => `${prefix}${letter}`)],
  initialValue
);

console.log(twoCharPrefix);
// expected output: 10