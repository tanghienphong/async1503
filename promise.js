const request = require('request')
const URL = 'http://localhost:3000/'

function cong(a,b){
    return new Promise((resolve, reject)=>{
        if(isNaN(a) || isNaN(b) ){
            return reject(new Error('Invalid parameters!'))
        }
        const uri = `${URL}cong/${a}/${b}`
        request(uri, (err, res, body)=>{
            if(err) return reject(err)
            return resolve(JSON.parse(body).result)
        })
    })
}

function nhan(a,b){
    return new Promise((resolve, reject)=>{
        if(isNaN(a) || isNaN(b) ){
            return reject(new Error('Invalid parameters!'))
        }
        const uri = `${URL}nhan/${a}/${b}`
        request(uri, (err, res, body)=>{
            if(err) return reject(err)
            return resolve(JSON.parse(body).result)
        })
    })
}

function chia(a,b){
    return new Promise((resolve, reject)=>{
        if(isNaN(a) || isNaN(b) ){
            return reject(new Error('Invalid parameters!'))
        }
        if(b == 0){
            return reject(new Error('Can not divide with 0!'))
        }
        const uri = `${URL}chia/${a}/${b}`
        request(uri, (err, res, body)=>{
            if(err) return reject(err)
            return resolve(JSON.parse(body).result)
        })
    })
}


//(3+5)*4/2

// cong(3,5)
// .then((rs)=>{
//     console.log(rs)
// })
// .catch((err)=>{
//     console.log(err)
// })

/* Demo */
// cong(3,5)
// .then(tong=>nhan(tong,4))
// .then(tich => chia(tich,2))
// .then(result => console.log(result))
// .catch(err=>console.log(err))


function tinhDienTich(a,b,h){
    return cong(a,b)
    .then(tong=>nhan(tong,h))
    .then(tich => chia(tich,2))
}

/* Demo */
// tinhDienTich(3,4,5)
// .then(result => console.log(result))
// .catch(err=>console.log(err))

async function tinhDienTichDongBo(a,b,h){
    let tong = await cong(a,b)
    let tich = await nhan(tong,h)
    let thuong = await chia(tich,2)
    return thuong
}

/**
 * cong(a,b) là bất đồng bộ
 * nhưng await sẽ đổi thành đồng bộ
 * nhưng khi trả ra kết quả lại là bất đồng bộ vì có async
 */
const r = tinhDienTichDongBo(3,4,5)
 console.log(r);


 /*****
  * Chạy cùng 1 lúc 2 function tính toán 
  * (3+5)*4/2 => 8/2
  */

  Promise.all([cong(3,5), chia(4,2)])
  .then(r=>{
      return nhan(r[0], r[1])
  })
  .then(rs=>console.log(rs))
  .catch(e=>console.log(e))

