let usa = '';
let cuba = '';

const kimFunc = async (...param) => {
  const taskA = () => fetch('https://restcountries.com/v2/name/usa');
  const wolf = Promise.all([taskA()])
    .then(data => data[0].json())
    .then(data => (usa = data[0].name))
    .then(data => {
      cuba += kim.sleep(param[0], usa);
    })
    .then(data => {
      return kim.sleep(param[1], usa);
    })
    .then(data => {
      return kim.sleep(param[2], usa);
    })
    .then(data => {
      return kim.sleep(param[3], usa);
    })
    .then(data => {
      return kim.sleep(param[4], usa);
    })
    .then(data => l(data,cuba, usa))
    .catch(error => d(error));
};

// kimFunc(100, 500, 10, 1000, 1001);

export default 'test25';
