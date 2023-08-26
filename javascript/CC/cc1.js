import { wolffunc } from "../script.js"









let whereAmI = (lat, lng)=>{
    const temp = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res)=>{
      
       return  res.json()})
    .then((res)=>{
     
        if(res.altgeocode === `Throttled! See geocode.xyz/pricing`){
            throw new Error(`Error Throttled!🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬`)
        }
       l(`You Are in ${res.city},${res.country}!!! `);
 wolffunc(res.country);
    })
   
    .catch((err)=>{l(`${err.message } AT=> lineNumber ${err.lineNumber}  `)})

}




// whereAmI(42.3834, -83.2966)

export {whereAmI}
export default 'cc1'
