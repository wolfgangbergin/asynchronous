// async function loadAndPause(path) {
//   try {
//     const temp1 = await wolfgang.creatImage(`img/img-1.jpg`);
//     l(`${temp1.src} loaded`);
//     await wolfgang.waitFunc();
//     temp1.style.display = 'none';
//     const temp2 = await wolfgang.creatImage(`img/img-2.jpg`);
//     l(`${temp2.src} loaded`);
//     await wolfgang.waitFunc();
//     temp2.style.display = 'none';
//     const temp3 = await wolfgang.creatImage(`img/img-3.jpg`);
//     l(`${temp3.src} loaded`);
//     await wolfgang.waitFunc();
//     temp3.style.display = 'none';
//    //   loadAndPause();
//   } catch (error) {
//     d(error);
//   }
// }

//   loadAndPause();

const loadAll =  async function (array) {
try{
   const banana =  array.map(async data => await wolfgang.creatImage(data))
  l(banana)
   const data = await Promise.all(banana)

   data.forEach(data => (data.className = 'parallel'))
  
 //    data.forEach(data => (loadAndPause(data.src)))
   
   
 //   .then(
 //     data => data.forEach(data => (data.className = 'parallel'))
 //   );
 }catch(error){
   l(error)
 }

}



   loadAll([`img/img-1.jpg`, `img/img-2.jpg`, `img/img-3.jpg`]);

export default 'test18';

//paralell
