const request = require('request');
const URL  = 'http://localhost:3000/';

function nhan(a,b, fn){
    if(isNaN(a) || isNaN(b) )
        return fn(null,new Error('1 trong 2 tham số không phải là số!'))
    const uri = `${URL}nhan/${a}/${b}`;
    request(uri,(error,res,body) => {
        if(error) return fn(null, error)
        let rs = JSON.parse(body)
        return fn(rs.result)
    })
}

nhan(2,3,(result, error)=>{
    if(!error)
        return console.log(result)
    return console.log(error)
})