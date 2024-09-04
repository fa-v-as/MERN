//Promise all
var Promise = require('promise');
function getName(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Shekeeb")
        },3000)
    })
}
function getAddress(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Malappuram")
        },5000)
    })
}

Promise.all([getName(),getAddress()]).then((result)=>{
    console.log(result)  //It takes 5s to print both the result
})


//Async and Await
async function user(){                 // it will lead to pending promise, unless using await & async
    let name=await getName()
    console.log(name)                  //it takes 3s to print
    let address=await getAddress()
    console.log(address)               //it takes another 5s to print after printing name
}
user()
