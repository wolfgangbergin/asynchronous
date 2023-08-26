window.l = console.log;
window.d = console.dir;
globalThis.btn = document.querySelector('.btn-country');
globalThis.countriesContainer = document.querySelector('.countries');
globalThis.btn2 = document.querySelector('.btn-country2');
globalThis.countriesContainer2 = document.querySelector('.countries2');

globalThis.renderCountry = function (
  data,
  ele = countriesContainer,
  className = ''
) {
  const html = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flag}" /> 
      <div class="country__data">
          <h3 class="country__name">"${data.name}"</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 10000000
          ).toFixed(1)}m people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
      </article>`;
  if (ele === countriesContainer) {
    countriesContainer.insertAdjacentHTML('beforeend', html);
    //  countriesContainer.style.opacity = 1;
  }

  if (ele === countriesContainer2) {
    countriesContainer2.insertAdjacentHTML('beforeend', html);
    countriesContainer2.style.opacity = 1;
  }

  return data;
};

globalThis.renderError = message => {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity = 1
};

globalThis.wolfJson = (
  response = undefined,
  className = '',
  cbf,
  eMessage,
  url
) => {
  return fetch(`${url}/${response}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(eMessage);
      }

      return response.json();
    })
    .then(data => {
      if (Array.isArray(data)) {
        return cbf(...data, undefined, className);
      } else {
        return cbf(data, undefined, className);
      }
    });
};
///////////////////////////////////////////////
window.wolfgang = {
  proimeFy: function (cbf) {
    const proimes = new Promise(cbf);

    return proimes;
  },
  geoFunc: function (res, rej) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     res(position);
    //   },
    //    (err) =>{
    //     rej(err);
    //   }
    // );

    navigator.geolocation.getCurrentPosition(res, rej);
  },
};
wolfgang.gitposition = function () {
  return wolfgang.proimeFy(wolfgang.geoFunc);
};

///////////////////////////////////////////////

wolfgang.whereAmI = (lat, lng) => {
  const temp = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      return res.json();
    })
    .then(res => {
      if (res.altgeocode === `Throttled! See geocode.xyz/pricing`) {
        throw new Error(`Error Throttled!🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬`);
      }
      l(`You Are in ${res.city},${res.country}!!! `);
      wolfgang.wolffunc(res.country);
    })

    .catch(err => {
      l(`${err.message} AT=> lineNumber ${err.lineNumber}  `);
    });
};


wolfgang.wolffunc = function (country) {
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
  

Object.freeze(wolfgang);

export default 'init';
