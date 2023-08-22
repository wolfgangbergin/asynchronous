const wolfTimer = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`it's been wating ${time} seconds`);
    }, time * 100);
  });
};

// wolfTimer(10)
//   .then(res => {
//     l(res);
//     return wolfTimer(2);
//   })
//   .then(res => {
//     l(res);
//     return wolfTimer(3);
//   })
//   .then(res => {
//     l(res);
//     return wolfTimer(4);
//   })
//   .then(res => {
//     l(res);
//     return wolfTimer(5);
//   })
//   .then(res => {
//     l(res);
//     return wolfTimer(6);
//   })
//   .then(res => {
//     l(res);
//     return wolfTimer(7);
//   })
//   .then(res => {
//     l(res);
//     return wolfTimer(8);
//   })
//   .then(res => {
//     l(res);
//     return wolfTimer(9);
//   })
//   .then(res => {
//     l(res);
//     return wolfTimer(10);
//   })
//   .then(res => {
//     l(res);
//     return wolfTimer(11);
//   });

// Promise.reject(new Error('wolfs error')).then((res)=>l(res)).catch((rej)=>console.error(rej))


export default 'test.5.5';
