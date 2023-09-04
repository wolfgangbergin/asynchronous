async function loadAndPause() {
  try {
    const temp1 = await wolfgang.creatImage(`img/img-1.jpg`);
    await wolfgang.waitFunc(temp1);
    const temp2 = await wolfgang.creatImage(`img/img-2.jpg`);
    await wolfgang.waitFunc(temp2);
    const temp3 = await wolfgang.creatImage(`img/img-3.jpg`);
    await wolfgang.waitFunc(temp3);
    
  } catch (error) {
    d(error);
  }
}

loadAndPause();

export default 'test17';
