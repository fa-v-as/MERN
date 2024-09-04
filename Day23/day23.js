//Callback in synchronous way
function task1(time){
    date=new Date()
    while(new Date-date<=time){

    }
}


console.log("Task 1 Started")
task1(3000)
console.log("Task 1 Ended")

console.log("Task 2 Started")
task1(5000)
console.log("Task 2 Ended")

console.log("Task 3 Started")
task1(2000)
console.log("Task 3 Ended")


//Callback in asynchronous way
function task2(){
    console.log("Task Ended")
}

console.log("Task 1 Started")
setTimeout(task2,2000)

console.log("Task 2 Started")
setTimeout(task2,5000)

console.log("Task 3 Started")
setTimeout(task2,3000)


//Calback
function getData(data){
    console.log("Data:"+data)
}

function showData(callback){
    callback("Welcome")
}

showData(getData)
