const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is resolved.');
  }, 1500);
});

console.log('Before');
promise
  .then((data) => {
    console.log(data);

  })
  .catch((error) => {
    console.log('error: ', error);
  });
console.log('After');