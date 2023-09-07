



const tempFunc = () => {
   
    wolfgang.gitposition()
    .then(res => wolfgang.whereAmI(res.coords.latitude, res.coords.longitude ))
   .catch(error => l(error));
   l('2')
}

l('1')
tempFunc();
l('3')
// wolfgang.btn.addEventListener('click', tempFunc);

export default 'test12';
