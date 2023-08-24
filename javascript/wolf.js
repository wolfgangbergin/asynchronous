globalThis.l = console.log;

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

const wolfgang = {
  proimeFy: cbf => {
    const proimes = new Promise(cbf);
    return proimes;
  },
  geoFunc: (res, rej) => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        res(position);
      },
      function (err) {
        rej(err);
      }
    );
  },
};

Object.freeze(wolfgang);
