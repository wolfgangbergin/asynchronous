const taskA = () => fetch('https://restcountries.com/v2/name/usa');


const kimFunc = async (...param) => {
  try {
    const wolf = Promise.all([taskA(), ]);

    const [{ name: temp2 }] = await wolf
      .then(data => data[0].json())
      .then(data => data);
    let temp3 = temp2;
    for (let i = 0; i < param.length; i++) {
      temp3 = await kim.sleep(param[i], temp3);

    }
    l(temp3);
  } catch (error) {
    d(error);
  }
};

 kimFunc(100, 500, 10, 1000, 1001);

 export default 'test26';