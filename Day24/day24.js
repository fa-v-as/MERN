// Callback   it leads to callback hell
function add(num1, num2, callback) {
    let err = false
    if (num1 == 0) {
        console.log("Error")
    }
    else {
        callback(num1 + num2, err)
    }
}
function multiplication(num1, num2, callback) {
    callback(num1 * num2)
}
function division(num1, num2, callback) {
    callback(num1 / num2)
}

add(10, 20, (sum, err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(sum)
    }
    multiplication(sum, 10, (product) => {
        console.log(product)
        division(product, 30, (division) => {
            console.log(division)
        })
    })
})



//Promise
var Promise=require('promise')
function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("Num1 is zero")
        }
        resolve(num1+num2)
    })
}
function multiplication(num1,num2){
    return new Promise((resolve,reject)=>{
        if (num1==0) {
            reject("Num1 is zero")
        }
        resolve(num1*num2)
    })
}
function division(num1,num2){
    return new Promise((resolve,reject)=>{
        if (num1==0) {
            reject("Num1 is zero")  //Error state-reject
        }
        resolve(num1/num2)          //Success state-resolve
    })
}

add(10,20).then((sum)=>{
    console.log(sum)
    return multiplication(sum,10)
}).then((product)=>{
    console.log(product)
    return division(product,10)
}).then((division)=>{
    console.log(division)
})

.catch((err)=>{
    console.log(err)
})
