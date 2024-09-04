array=["favas","Midhlaj",45,10]
console.log(array[0])


var object={
    Name:"Shekeeb",
    Age:22,
    Place:"Malappuram"
}

console.log(object.Name)
console.log(object['Age'])

console.log("-------------------------------")

var obj={
    Name:"Shammas",
    Age:27,
    Place:"Calicut",
    display:function(){
        var Name="Vidhun"
        console.log(Name)
        console.log(this.Name)
    }
}
console.log(obj)
obj.Name="Neymar"
console.log(obj)

console.log(obj.display())

obj.dob="16-08-2001"
console.log(obj)

obj.show=function(){
    console.log("Welcome Home")
}

console.log(obj.show())
console.log(obj)