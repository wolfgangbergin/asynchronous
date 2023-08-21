import wolfPromise from './wolfPromise.js';

let kimFunc = async function (country, className = '', name = 'name') {
  try {
    let data =  await fetch(`https://restcountries.com/v2/name/${country}`);
    data = await data.json();
   
    renderCountry(data[0], countriesContainer2);
    const neighbour = data[0].borders[0];
    if (!neighbour) return;
   
    let data2 = await fetch(`https://restcountries.com/v2/alpha/${neighbour}`);

    data2 = await data2.json();
 
    renderCountry(data2, countriesContainer2, 'neighbour');
    const neighbour2 = data2.borders[0];
    if (!neighbour2) return;
    let data3 = await fetch(`https://restcountries.com/v2/alpha/${neighbour2}`);
    data3 = await data3.json();
    renderCountry(data3, countriesContainer2, 'neighbour');
  } catch (err) {
    console.error(`${err} ��
    ��`);
  }
  l('finally');
};

// kimFunc('germany');


export default 'test4';
