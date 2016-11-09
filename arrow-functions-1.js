let words = process.argv.slice(2);
let characters = words.map(word => word[0]);
let combined = characters.reduce((string, char) => string + char);

console.log(`[${words}] becomes "${combined}"`);



// let string = process.argv.slice(2)
//     .map(word => word[0])
//     .reduce((string, char) => string + char);
//
// console.log(`[${process.argv.slice(2)}] becomes "${string}"`);
