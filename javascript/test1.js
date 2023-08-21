let count = 0;


function getCountryData(country, className = '', name = 'name') {
 
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/${name}/${country}`);
    
    request.send();
    
    request.addEventListener('load', function () {
      let data;
      // l(this.responseText)
      const temp = JSON.parse(this.responseText);
      if (Array.isArray(temp)){
         data = temp[0];
      } else {
        data = temp;
      }
      

     if(count < 1){
      renderCountry(data, countriesContainer2, className);

      const neighbour = data.borders?.[0];
l(data.borders)
      if (!neighbour) return;

      getCountryData(neighbour, 'neighbour', 'alpha');
     count++;
   
     }
     
    });


    // if(!cbf) return;
    // cbf();
    }
    
  // getCountryData('usa', ()=>getCountryData('cuba', ()=>getCountryData('germany')));
 


  //  getCountryData('germany');


export default 'test1'