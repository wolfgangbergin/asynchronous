wolfgang
  .creatImage(`img/img-1.jpg`)
  .then(data => {
    return  wolfgang.waitFunc(data);
    
  })
  .then((data)=>{l(data)})
  .catch(error => d(error.message));







export default 'test13';
