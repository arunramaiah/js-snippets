const first = [8,6,8,6,7,4,7];

// A simple reduce operation to calculate total

const count = first.reduce((total, item, index) =>
      total + (item === first[index + 2] && item !== first[index + 1]),
0)

console.log(count)
console.log(1 + (false))