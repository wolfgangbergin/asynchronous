async function loadAndPause() {
  try {
    const temp1 = await wolfgang.creatImage(`img/img-1.jpg`);
    await wolfgang.waitFunc(temp1);
    temp1.style.display = 'none';
    const temp2 = await wolfgang.creatImage(`img/img-2.jpg`);
    await  wolfgang.waitFunc(temp2);
    temp2.style.display = 'none';
    const temp3 = await wolfgang.creatImage(`img/img-3.jpg`);
    await wolfgang.waitFunc(temp3);
    temp3.style.display = 'none';
    // loadAndPause();
  } catch (error) {
    d(error);
  }
}

loadAndPause();

export default 'test17';
