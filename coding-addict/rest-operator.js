 //arrays
 const fruits = ['apple','orange','lemon','banana'];
 const [first,second,...restOftheFruits] = fruits
 console.log(first, restOftheFruits);
 const specificFruit = restOftheFruits.find((item) => item === 'banana');
 console.log(specificFruit);

 //objects
 const person = { name: 'john', lastName: 'smith', job: 'developer'};
 const { job,...rest } = person;
 console.log(job,rest);

 //functions
const getAverage = (name,...scores) => {
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total, item) => { return total += item}, 0)/scores.length;
    console.log(average);
}

const testScores= [2,2,2,2];
 getAverage(person.name,...testScores);