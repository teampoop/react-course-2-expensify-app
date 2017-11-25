// console.log('destructured');

// const person = {
//   name: 'Mark',
//   age: 50,
//   location: {
//     city: 'Alb',
//     temp: 50
//   }
// };

// const {name, age} = person;

// console.log(`${name} is ${age}.`);

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
// const {name: publisherName = 'Self Published' } = book.publisher;
// console.log(publisherName);

// const address = [
//   '1299 S Juniper Street',
//   'Philadelphia',
//   'Pennsylvania',
//   '19147'
// ];
// const [street, city, state, zip] = address;
// console.log(`You are in ${city} ${state}.`);

const item = [
  'coffee (hot)',
  '$2.00',
  '$2.50',
  '$2.75'
];
const [name, , price = '$100'] = item;
console.log(`A medium ${name} costs ${price}`);
