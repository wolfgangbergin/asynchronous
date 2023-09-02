///////////////////////////////////////////////
const tempFunc = async () => {
  try {
    let temp1 = await wolfgang.gitposition();

    const { latitude: lat, longitude: lng } = temp1.coords;

    const temp2 = await kim.whereAmI(lat, lng);
  
    return `2:  ${lat}, ${lng} `;
  } catch (error) {
    
    throw new Error(`2:${error}❗❗❗❗❗`);
  }
};

l('1');
 tempFunc().then(res => l(`wolf: ${res}`)).catch(error => l(`2: ${error}💥💥💥💥💥💥💥`)).finally(()=>l(3));

// (async () => {
//   try {
//     const res = await tempFunc();
//     l(`${res}`);
//   } catch (error) {
//     l(` ${error}💥💥💥💥💥💥💥`);
//   }
//   l(`3`);
// })()











export default 'test14';
