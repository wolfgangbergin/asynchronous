async function loop(param) {

    for (let i = 0; i < param.length; i++) {
        const data = await wolfgang.newFunc(param[i]);
        l(data[0])
       }
       loop(param) 

}

//  loop([`img/img-1.jpg`, `img/img-2.jpg`, `img/img-3.jpg`]);

export default 'test10';

