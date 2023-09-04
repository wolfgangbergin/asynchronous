window.l = console.log;
window.d = console.dir;

///////////////////////////////////////////////
window.wolfgang = {
  btn: document.querySelector('.btn-country'),
  countriesContainer: document.querySelector('.countries'),
  // btn2: document.querySelector('.btn-country2'),
  // countriesContainer2: document.querySelector('.countries2'),
  imageContaner: document.querySelector('.images'),
};

///////////////////////////////////////////////

wolfgang.renderCountry = function (
  data,
  ele = wolfgang.countriesContainer,
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
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
        </article>`;
  if (ele === wolfgang.countriesContainer) {
    wolfgang.countriesContainer.insertAdjacentHTML('beforeend', html);
    // wolfgang.countriesContainer.style.opacity = 1;
  }


  return data;
};

wolfgang.renderError = message => {

  wolfgang.countriesContainer.insertAdjacentText('beforeend', message);

  // wolfgang.countriesContainer.style.opacity = 1;
};

wolfgang.wolfJson = (
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

(wolfgang.proimeFy = function (cbf) {
  const proimes = new Promise(cbf);

  return proimes;
}),
  (wolfgang.geoFunc = function (res, rej) {
    navigator.geolocation.getCurrentPosition(res, rej);
  }),
  (wolfgang.gitposition = function () {
    return wolfgang.proimeFy(wolfgang.geoFunc);
  });

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

    .catch(error => {
      wolfgang.renderError(`${error.message}🇦🇱🇦🇱🇦🇱`);
      l(`${error.message} AT=> lineNumber ${error.lineNumber}  `);
    });
};

wolfgang.wolffunc = function (country) {
  wolfgang
    .wolfJson(
      country,
      undefined,
      wolfgang.renderCountry,
      `country Not Found`,
      `https://restcountries.com/v2/name`
    )
    .then(response => {
      if (!response.borders) {
        throw new Error(`${response.name} Has no Borders`);
      }
      return wolfgang.wolfJson(
        response?.borders[1],
        'neighbour',
        wolfgang.renderCountry,
        `country Not Found`,
        `https://restcountries.com/v2/alpha`
      );
    })
    .then(response => {
      if (!response.borders) {
        throw new Error(`${response.name} Has no Borders`);
      }
      return wolfgang.wolfJson(
        response.borders[1],
        'neighbour',
        wolfgang.renderCountry,
        `country Not Found`,
        `https://restcountries.com/v2/alpha`
      );
    })
    .catch(error => {
      d(error);
      wolfgang.renderError(`${error.message}🇦🇱🇦🇱🇦🇱`);
    })
    .finally(() => (wolfgang.countriesContainer.style.opacity = 1));
};

wolfgang.creatImage = path => {
  const promise = new Promise((res, rej) => {
    const imgEle = document.createElement('img');
    imgEle.src = path;

    imgEle.addEventListener('load', () => {
      l(`${path} loaded`);
      wolfgang.imageContaner.replaceChildren(imgEle);
      res(imgEle);
    });

    imgEle.addEventListener('error', e => {
      e.message = 'Wrong path error';

      rej(e);
    });
  });
  return promise;
};

wolfgang.waitFunc = imgEle => {
  return new Promise((res, rej) => {
    setTimeout(() => {
        // imgEle.style.display = 'none';

      res();
    }, 1000);
  });
};



Object.freeze(wolfgang);

export default 'wolfgang';
