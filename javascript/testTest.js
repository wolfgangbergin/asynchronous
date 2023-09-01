





// wolfgang.wolffunc = function (country) {
//     wolfgang
//       .wolfJson(
//         country,
//         undefined,
//         wolfgang.renderCountry,
//         `country Not Found`,
//         `https://restcountries.com/v2/name`
//       )
//       .then(response => {
//         if (!response.borders) {
//           throw new Error(`${response.name} Has no Borders`);
//         }
//         return wolfgang.wolfJson(
//           response?.borders[1],
//           'neighbour',
//           wolfgang.renderCountry,
//           `country Not Found`,
//           `https://restcountries.com/v2/alpha`
//         );
//       })
//       .then(response => {
//         if (!response.borders) {
//           throw new Error(`${response.name} Has no Borders`);
//         }
//         return wolfgang.wolfJson(
//           response.borders[1],
//           'neighbour',
//           wolfgang.renderCountry,
//           `country Not Found`,
//           `https://restcountries.com/v2/alpha`
//         );
//       })
//       .catch(error => {
//         d(error);
//         wolfgang.renderError(`${error.message}🇦🇱🇦🇱🇦🇱`);
//       })
//       .finally(() => (wolfgang.countriesContainer.style.opacity = 1));
//   };



export default 'testTest'