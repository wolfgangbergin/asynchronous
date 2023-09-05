wolfgang
  .creatImage(`img/img-1.jpg`)
  .then(data => {
    jobob.tempEle = data;
    l(`${jobob.tempEle.src} loaded`);
    return wolfgang.waitFunc();
  })
  .then(() => {
    jobob.tempEle.style.display = 'none';
    return wolfgang.creatImage(`img/img-2.jpg`);
  })
  .then(data => {
    jobob.tempEle = data;
    l(`${jobob.tempEle.src} loaded`);
    return wolfgang.waitFunc();
  })
  .then(() => {
    jobob.tempEle.style.display = 'none';
    return wolfgang.creatImage(`img/img-3.jpg`);
  })
  .then(data => {
    jobob.tempEle = data;
    l(`${jobob.tempEle.src} loaded`);
    return wolfgang.waitFunc();
  })
  .then(() => {
    jobob.tempEle.style.display = 'none';
  })
  .catch(error => d(error.message));

export default 'test13';
