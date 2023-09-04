const jobob = async function (country1, country2, country3) {
  try {
    const temp1 = kim.kimJson(
      country1,
      undefined,
      wolfgang.renderCountry,
      `country Not Found`,
      `https://restcountries.com/v2/name`
    );
    const temp2 = kim.kimJson(
      country2,
      undefined,
      wolfgang.renderCountry,
      `country Not Found`,
      `https://restcountries.com/v2/name`
    );
    const temp3 = kim.kimJson(
      country3,
      undefined,
      wolfgang.renderCountry,
      `country Not Found`,
      `https://restcountries.com/v2/name`
    );

    const temp4 = await Promise.all([temp1, temp2, temp3]).then(data=>l(data.map(data=>data.capital)))
   
  } catch (error) {
    d(error);
    wolfgang.renderError(`${error.message}🇦🇱🇦🇱🇦🇱`);
  }
};
// jobob('usa', 'canada', 'mexico');

export default 'test15';
