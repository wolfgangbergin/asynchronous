const lotteryPromise = new Promise((resolve, reject) => {
  l('lottery draw is happening');
  setTimeout(() => {
    Math.random() > 0.5 ? resolve('u win 🏁🏁🏁') : reject(new Error('u lost 💩💩💩'));
  }, 1000);
});

lotteryPromise
  .then(
    res => {
      l(res);
    }
    //rej=>l(`${rej} 🤬🤬🤬`)
  )
  .catch(err => console.error(err));

export default 'test10';
