
import { whereAmI } from "./CC/cc1.js";



wolfgang
  .proimeFy(wolfgang.geoFunc)
  .then(res => whereAmI(res.coords.latitude, res.coords.longitude ))
  .catch(err => l(err.message));

export default 'test12';
