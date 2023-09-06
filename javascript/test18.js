let wolfFunc = async array => {
  const temp1 = array.map(data =>
    kim.waitFunc(data).then(data => {
        l(data + ' loaded')
      return `${data} loaded`;
    })
  );
  

 
  
};



// wolfFunc([1999, 2000, 2001]);

export default 'test18';
