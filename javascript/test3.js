import wolfPromise from './wolfPromise.js';

let kimFunc = async function (country, className = '', name = 'name') {
  try {
    const data = await wolfPromise(country, className, name);
    renderCountry(data[0], countriesContainer2);
    const neighbour = data[0].borders[0];
    if (!neighbour) return;
    const data2 = await wolfPromise(neighbour, null, 'alpha');
    renderCountry(data2, countriesContainer2, 'neighbour');
    const neighbour2 = data2.borders[0];
    if (!neighbour2) return;
    const data3 = await wolfPromise(neighbour2, null, 'alpha');
    renderCountry(data3, countriesContainer2, 'neighbour');
  } catch (err) {
    console.error(`${err} ��
    ��`);
  }
  l('finally');
};

// kimFunc('germany');

export default 'test3';
