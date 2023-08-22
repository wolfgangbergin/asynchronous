
const wolfFunc = function (num, time) {
return new Promise((resolve, reject) => {
  l('lottery draw is happening');
  setTimeout(() => {
    Math.random() > 0.5 ? resolve('u win 🏁🏁🏁') : reject(new Error('u lost 💩💩💩'));
  }, 1000);
});

};

// wolfFunc(Math.random(), 1000)
//   .then(
//     res => {
//       l(res);
//     }

//   )
//   .catch(err => console.error(err));

export default 'test10';
