
import { whereAmI } from "./CC/cc1.js";




wolfgang.gitposition()
  .then(res => whereAmI(res.coords.latitude, res.coords.longitude ))
  .catch(err => l(err));

export default 'test12';
