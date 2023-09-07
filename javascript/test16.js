// (async (country1, country2, country3) => {
//   try {
//     const temp1 = kim.kimJson(
//       country1,
//       undefined,
//       wolfgang.renderCountry,
//       `country Not Found`,
//       `https://restcountries.com/v2/name`
//     );
//     const temp3 = Promise.resolve('hello');
//     const wait = kim.waitFunc(1000);

//   await  Promise.all([temp1, temp3, wait])
//       .then(data => l(data))
//       .catch(error => {
//         throw new Error(error);
//       });
//   } catch (error) {
//     d(error);
//     wolfgang.renderError(`${error.message}🇦🇱🇦🇱🇦🇱`);
//   }
// })('canada', 'mexico', 'cuba');

// Promise.race([
//   kim.kimJson(
//     'usa',
//     undefined,
//     wolfgang.renderCountry,
//     `country Not Found`,
//     `https://restcountries.com/v2/name`
//   ),
//   kim.waitFunc(1000),

// ])
//   .then(data => l(data))
//   .catch(error => l(error));

// Promise.allSettled([
//   kim.kimJson(
//     'usa',
//     undefined,
//     wolfgang.renderCountry,
//     `country Not Found`,
//     `https://restcountries.com/v2/name`
//   ),
//   kim.waitFunc(1000),
//   Promise.resolve('hello'),
//   Promise.reject('reject'),
// ])
//   .then(data => l(data))
//   .catch(error => l(error));

// Promise.any([
//     Promise.reject('reject'),

//   kim.waitFunc(5000),
//   Promise.resolve('hello'),
//   Promise.resolve('resolve'),
// ])
//   .then(data => l(data))
//   .catch(error => l(error));

export default 'test16';
