///////////////////////////////////////////////
const tempFunc = async () => {
  try {
    let temp1 = await wolfgang.gitposition();
    const { latitude: lat, longitude: lng } = temp1.coords;

    const temp2 = await wolfgang.whereAmI2(lat, lng);
  } catch (error) {
    d(`${error}❗❗❗❗❗`);
  }
};

tempFunc();

export default 'test14';
