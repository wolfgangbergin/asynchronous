
// import { whereAmI } from "./CC/cc1.js";


const tempFunc = () => {
    wolfgang.gitposition()
    .then(res => wolfgang.whereAmI(res.coords.latitude, res.coords.longitude ))
    .catch(err => l(err));
  
}

wolfgang.btn.addEventListener('click', tempFunc);

export default 'test12';
