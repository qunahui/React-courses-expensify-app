// console.log('destructuring');

// const person = {
//     name: 'Huii',
//     age: 20,
//     location: {
//         city: 'Vietnam',
//         temp: 24
//     }
// }

// const book = {
//     title: 'Ego is an enemy',
//     author: 'Ryan Holiday',
//     publisher: {

//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher

// console.log(publisherName);


const address = ['37 Ben Ca', 'Ho Chi Minh', 'Vietnam', '70000'];

const [street, city, country, zip] = address;

console.log(`You are in ${city}, ${country}.`);