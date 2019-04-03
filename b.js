const express = require('express')
const app = express()

const URL = 'https://chain.so/api/v2/get_address_balance/BTC/';
/**
 * 18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX
 * 1NTxf1H9PoWCUWnKcdfLtFtgGWxRmWWq83
 * 19Li3BpAigvtv2Z9ce4B5WwjXixfwqkgVy
 * 1CK6KHY6MHgYvmRQ4PAafKYDrg1ejbH1cE
 * 1H4o9Mh7HyjPa46z4vtv7J8yzaK5RY4bXR
 */

 const request = require('request')
//  request(URL + '18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX',(error, res, body)=>{
//      if(error) return console.log(e)
//      let result = JSON.parse(body);
//      console.log(result.data.confirmed_balance)
//  })

function getBalance(address, fn){
   request(URL + address,(error, res, body)=>{
        if(error) return fn(error.message, null)
        let result = JSON.parse(body);
        return fn(null,result.data.confirmed_balance)
    })
} 

const balance = getBalance('18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX',(error,result)=>{
    if(!error)
        return console.log(result)
    return console.log(error)
})

 // chuyển post từ heroku xuống.
// const port = process.env.port || 3000

// app.listen(port,()=>{
//     return console.log('Server started on port 3000')
// })