let wolfFunc =  param => {
  for (let i = 0; i < param.length; i++) {
     kim.waitFunc(param[i]).then(data => l(data));
  }
   setTimeout(()=>wolfFunc(param),1000)
};

//  wolfFunc([1001, 1002, 1003, 1004, 1005])








export default 'test21';
