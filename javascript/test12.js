



const tempFunc = () => {
    wolfgang.gitposition()
    .then(res => wolfgang.whereAmI(res.coords.latitude, res.coords.longitude ))
   .catch(error => l(error));
  
}

wolfgang.btn.addEventListener('click', tempFunc);

export default 'test12';