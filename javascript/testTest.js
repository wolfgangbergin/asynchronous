let wolfFunc = async array => {
  const temp1 = array.map(async data => {
    const temp1 = await wolfgang.waitFunc(data)
    l(temp1)
     return `${temp1} loaded`
  });
  l(temp1);
  const temp2 = await Promise.all(temp1);
  l(temp2);
};

// wolfFunc([100, 500, 1000]);

export default 'testTest';
