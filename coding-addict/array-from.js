const hello = "Hello";

const result = Array.from(hello);

console.log(result);

const result1 = Array.from({ length: hello.length }, (_, index) => {
    return index;
} );

console.log(result1);

