//Prime
function Prime(num) {
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            break;
        }
    }
    if (i == num) {
        console.log(num + " is Prime");
    }
    else {
        console.log(num + " is not prime")
    }
}
Prime(10)
Prime(7)



//Palindrome
function Palindrome(string) {
    var string = string.toLowerCase()
    var str = ""
    for (i = string.length - 1; i >= 0; i--) {
        str = str + string[i]
    }
    if (string == str) {
        console.log(string + " is a Palindrome")
    }
    else {
        console.log(string + " is not a palidrome")
    }
}
Palindrome("Malayalam")
Palindrome("Shekeeb")


//Factorial
function Factorial(num) {
    var fact = 1
    for (i = num; i >= 1; i--) {
        fact = fact * i
    }
    console.log("Factorial is "+fact)
}
Factorial(5)


//Reverse words
function Reverse(string) {
    var string = string.split(' ')
    var str = ""
    for (i = string.length - 1; i >= 0; i--) {
        str = str + string[i]
        if (i > 0) {
            str = str + " "
        }
    }
    console.log(str)
}
Reverse("hi shekeeb")


//Sub string
function SubString(string,subString){
    console.log(string.includes(subString))
}
SubString("Favas chairman of MES","chairman")
