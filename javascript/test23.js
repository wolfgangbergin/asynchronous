const taskA = () => fetch('https://restcountries.com/v2/name/usa');
const taskB = () => fetch('https://restcountries.com/v2/name/cuba');
const taskC = () => fetch('https://restcountries.com/v2/name/mexico');

// const kimFunc = async (...param) => {
//   try {
//     const wolf = Promise.all([taskA(), taskB(), taskC()]);

//     const [{ name: temp2 }] = await wolf
//       .then(data => data[0].json())
//       .then(data => data);

//     const temp3 = await kim.sleep(temp2, param[0]).then(data => data);
//     const temp4 = await kim.sleep(temp3, param[1]).then(data => data);
//     const temp5 = await kim.sleep(temp4, param[2]).then(data => data);
//     const temp6 = await kim.sleep(temp5, param[3]).then(data => data);

//     l(temp6);
//   } catch (error) {
//     d(error);
//   }
// };

const kimFunc = async (...param) => {
    try {
      const wolf = Promise.all([taskA(), taskB(), taskC()]);
  
      const [{ name: temp2 }] = await wolf
        .then(data => data[0].json())
        .then(data => data);
  
  for (let i = 0; i<param.length; i++){
     let temp3 = await kim.sleep(temp2, param[i])

    l(temp3)
  }
      
    } catch (error) {
      d(error);
    }
  };
  

// kimFunc(100, 500, 10, 1000, 5000);

export default 'test23';
