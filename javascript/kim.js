window.kim = {};

kim.kimfunc = async function (country) {
  try {
    var temp1 = await kim.kimJson(
      country,
      undefined,
      wolfgang.renderCountry,
      `country Not Found`,
      `https://restcountries.com/v2/name`
    );

    const temp2 = await (temp1 => {
      if (!temp1.borders) {
        throw new Error(`${temp1.name} Has no Borders`);
      }
      return kim.kimJson(
        temp1?.borders[1],
        'neighbour',
        wolfgang.renderCountry,
        `country Not Found`,
        `https://restcountries.com/v2/alpha`
      );
    })(temp1);

    const temp3 = await (temp2 => {
      if (!temp2.borders) {
        throw new Error(`${temp2.name} Has no Borders`);
      }
      return kim.kimJson(
        temp2.borders[1],
        'neighbour',
        wolfgang.renderCountry,
        `country Not Found`,
        `https://restcountries.com/v2/alpha`
      );
    })(temp2);
  } catch (error) {
    d(error);
    wolfgang.renderError(`${error.message}🇦🇱🇦🇱🇦🇱`);
  }

  wolfgang.countriesContainer.style.opacity = 1;
};

kim.whereAmI = async (lat, lng) => {
  try {
    const temp1 = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const temp2 = await temp1.json();
    if (temp2.altgeocode === `Throttled! See geocode.xyz/pricing`) {
      throw new Error(`Error Throttled!🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬`);
    }

    kim.kimfunc(temp2.country);
  } catch (error) {
    d(`${error}❗❗❗❗❗`);
  }
};

kim.kimJson = async function (
  response = undefined,
  className = '',
  cbf,
  eMessage,
  url
) {
  try {
    const temp1 = await fetch(`${url}/${response}`);

    if (!temp1.ok) {
      throw new Error(eMessage);
    }
    const temp2 = await temp1.json();

    const temp4 = await wolfgang.renderCountry(
      Array.isArray(temp2) ? temp2[0] : temp2,
      undefined,
      className
    );
    return temp4;
  } catch (error) {
    d(error);
  }
};



Object.freeze(kim);
export default 'kim';
