wolfgang
  .creatImage(`img/img-1.jpg`)
  .then(res => {
     wolfgang.waitFunc(res);
   return res
  })
//   .then((res)=>{res.src = 'img/img-2.jpg'})
  .catch(error => d(error));



export default 'test13';
