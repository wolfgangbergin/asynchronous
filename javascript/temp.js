
function getCountryData(country) {
 
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);

request.send();

request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);
//  l(data)
 // Render country 1
renderCountry(data, countriesContainer,);
// Get neighbour country (2)
const neighbour = data.borders?.[0];

if (!neighbour) return;
// AJAX call country 2
const request2 = new XMLHttpRequest();
request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
request2.send();
request2.addEventListener('load', function () {
    const data2 = JSON.parse(this.responseText);
    // l(data2);
    renderCountry(data2, countriesContainer, 'neighbour');

});
});
}

 getCountryData('usa');
