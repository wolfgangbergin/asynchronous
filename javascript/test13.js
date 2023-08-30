wolfgang
  .creatImage(`img/img-1.jpg`)
  .then(data => {
    return wolfgang.waitFunc(data);
  })
  .then(data => {
   return  wolfgang.creatImage(`img/img-2.jpg`);
  })
  .then(data => {
    return wolfgang.waitFunc(data);
  })
  .then(data => {
    return  wolfgang.creatImage(`img/img-3.jpg`);
   })
  .catch(error => d(error.message));

export default 'test13';
