
let wolffunc = () => {
    fetch('https://restcountries.com/v2/name/USA')
      .then(function (response) {
        //    l(response)
  
        let temp2 = response.clone();
        let temp3 = temp2.json();
        setTimeout(() => {
          l(temp3);
        temp3.then((data) => {
          l(data);
        });
  
        }, 1000);
  
        return response.json();
      })
      .then(function (data) {
        l(data);
      })
      .catch(function (err) {
        l(err);
      });
  };
  
//   wolffunc();


  export default 'test7';
  