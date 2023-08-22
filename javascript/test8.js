
l('test start')
setTimeout(()=>{l('0 sec timer')},0)
Promise.resolve('Resolved promise 1').then(res=>l(res))
Promise.resolve('Resolved promise 2').then(res=>{for(let i=0;i<3000000000;i++){};l(res)})

Promise.resolve('Resolved promise 1').then(res=>l(res))
l('test end')



























export default 'test8'