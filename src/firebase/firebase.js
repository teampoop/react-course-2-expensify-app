import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB4vbMGo0Y0aApz_l_RW-YTXX35MP3Eqj0",
  authDomain: "expensify-f8918.firebaseapp.com",
  databaseURL: "https://expensify-f8918.firebaseio.com",
  projectId: "expensify-f8918",
  storageBucket: "expensify-f8918.appspot.com",
  messagingSenderId: "247088005201"
};
firebase.initializeApp(config);

const database = firebase.database();

database.ref()
  .on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  }, (e) => { console.log('error: ', e)});

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
