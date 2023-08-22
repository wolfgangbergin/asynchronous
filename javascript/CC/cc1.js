import { wolffunc } from "../script.js"









let whereAmI = (lat, lng)=>{
    const temp = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res)=>{
        //  if(!res.ok){
        //     throw new Error(`Error Throttled!🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬`)
        // }
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




//whereAmI(52.508, 13.381)


export default 'cc1'
