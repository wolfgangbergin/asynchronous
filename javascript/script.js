import test1 from './test1.js';
import test2 from './test2.js';
import test3 from './test3.js';
import test4 from './test4.js';
import test5 from './test5.js';
import test6 from './test6.js';
import test8 from './test8.js';
import cc1 from './CC/cc1.js';



let wolffunc = function (country) {
  wolfJson(
    country,
    undefined,
    renderCountry,
    `country Not Found`,
    `https://restcountries.com/v2/name`
  )
    .then(response => {
      if (!response.borders) {
        throw new Error(`${response.name} Has no Borders`);
      }
      return wolfJson(
        response?.borders[1],
        'neighbour',
        renderCountry,
        `country Not Found`,
        `https://restcountries.com/v2/alpha`
      );
    })
    .then(response => {
      if (!response.borders) {
        throw new Error(`${response.name} Has no Borders`);
      }
      return wolfJson(
        response.borders[1],
        'neighbour',
        renderCountry,
        `country Not Found`,
        `https://restcountries.com/v2/alpha`
      );
    })
    .catch(error => {
      renderError(`${error.message}🇦🇱🇦🇱🇦🇱`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

// wolffunc('cuba');

export {wolffunc}