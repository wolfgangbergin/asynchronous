


let wolffunc =  () => {
    let temp = fetch('https://restcountries.com/v2/name/USA').then(function (response) {
      l(response)
      return [response];
    }).then(data => {
      l([data , 'gang']);
     
    })
  
  };
  
//  l(wolffunc());

  export default 'test6';