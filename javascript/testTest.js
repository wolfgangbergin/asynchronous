




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





export default 'testTest'