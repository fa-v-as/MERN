//Object constructor
function Student(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name:"+this.name +" Age:"+this.age + " Place:"+this.place)
    }
}
var std1=new Student("Shekeeb",22,"Malappuram")
var std2=new Student("Favas",30,"Palakkad")
console.log(std1)
console.log(std2)
std2.display()



//Date object constructor
var date=new Date("16 August 2001")
console.log(date.getDate())
console.log(date.getFullYear())


//Exception handling
num=-1
try{                               // Normal code in try block
    if(num>0){
        console.log("Number is positive")
    }
    else if(num==0)
    {
        console.log("Number is zero")   
    }
    else{
        throw "Number is negative"  // Create exception manually. err in catch block shows this throw error
    }
}
catch(err){                    // Executes only if there is an error
    console.log(err)
}
finally{                      // Used if we want to display something even if the code is correct or it shows error
    console.log("Successfull") 
}
