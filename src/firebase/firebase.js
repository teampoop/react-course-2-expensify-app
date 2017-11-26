import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STOREAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (s) => {
//   console.log(s.key, s.val());
// });

// database.ref('expenses').on('child_added', (s) => {
//   console.log(s.key, s.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   }, (e) => { console.log('aaaaaaa', e)});

// database.ref('expenses').push({
//   description: 'Credit Card: Best By',
//   note: '',
//   amount: 4500,
//   createdAt: 50000
// });

// database.ref('notes').push({
//   title: 'fexhssk',
//   body: 'monkey dick'
// });

// database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   }, (e) => { console.log('error: ', e)});

// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error', e);
//   });

// setTimeout(() => {
//   database.ref('age').set(46);
// }, 3500);
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
// setTimeout(() => {
//   database.ref('age').set(50);
// }, 10500);


// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error!', e);
//   })
// database.ref().set({
//   name: 'Mark Casias',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     state: 'New Mexico',
//     city: 'Albuquerque'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('Error!', error);
// });

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('removed');
//   })
//   .catch((e) => {
//     console.log('fail', e);
//   })

// database.ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   })
//   .then(() => {
//     console.log('yay');
//   })
//   .catch(() => {
//     console.log('boo');
//   })
