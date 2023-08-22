let wolfFunc = function () {
  let temp = Math.random();
  l(temp);
  let wolfPromies = new Promise((res, rej) => {
    if (temp > 0.5) {
      res('u win');
    }

    if (temp < 0.49) {
      rej('u lost');
    }
  });
  return wolfPromies;
};



// console.dir(wolfFunc().then(
//     res => res,
//     rej => rej
//   ).then(
//     res => l(res),
//     rej => l(rej)
//   ))

export default 'test9';
