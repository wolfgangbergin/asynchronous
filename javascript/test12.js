
import { whereAmI } from "./CC/cc1.js";


const tempFunc = () => {
    wolfgang.gitposition()
    .then(res => whereAmI(res.coords.latitude, res.coords.longitude ))
    .catch(err => l(err));
  
}

btn.addEventListener('click', tempFunc);

export default 'test12';
