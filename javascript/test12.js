






const geoFunc = ()=>{
    const proimes = new Promise((res, rej)=>{

        navigator.geolocation.getCurrentPosition(
            function (position) {
                res(position);
            },
            function (err) {
                rej(err);
                
            }   
        );


    })

    return proimes
}








geoFunc().then((res)=>l(res.coords.longitude, res.coords.latitude)).catch((err)=>l(err.message))









export default 'test12'