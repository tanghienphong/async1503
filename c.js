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

function cong(a,b, fn){
    if(isNaN(a) || isNaN(b) )
        return fn(null,new Error('1 trong 2 tham số không phải là số!'))
    const uri = `${URL}cong/${a}/${b}`;
    request(uri,(error,res,body) => {
        if(error) return fn(null, error)
        let rs = JSON.parse(body)
        return fn(rs.result)
    })
}

function chia(a,b, fn){
    if(isNaN(a) || isNaN(b) )
        return fn(null,new Error('1 trong 2 tham số không phải là số!'))
    const uri = `${URL}chia/${a}/${b}`;
    request(uri,(error,res,body) => {
        if(error) return fn(null, error)
        let rs = JSON.parse(body)
        return fn(rs.result)
    })
}

//(3+5)*4/2
cong(3,5,(tong, error)=>{
    if(error)
        return console.log(error)
    nhan(tong,4,(tich,error) => {
        if(error)
        return console.log(error)
        chia(tich,2,(result,error)=>{
            if(error)
                return console.log(error)
                return console.log(result)
        })
    })
})



