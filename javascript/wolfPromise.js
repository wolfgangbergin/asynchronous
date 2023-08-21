let wolfPromise = function (country, className = '', name = 'name') {
    const promise = new Promise(function (resolve, reject) {
      const request = new XMLHttpRequest();
      request.open('GET', `https://restcountries.com/v2/${name}/${country}`);
     
      request.send();
     
     
    //   request.addEventListener('load', function () {
    //     resolve(JSON.parse(request.responseText));
    //   });

     setTimeout(function () {
       
        resolve(JSON.parse(request.responseText));
      }, 1000);

    });
    return promise;
  };

  export default wolfPromise;