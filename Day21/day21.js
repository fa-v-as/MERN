import readlineSync from 'readline-sync';
import { swapCase } from 'swap-case';

const num1 = parseInt(readlineSync.question('Enter first number: '));
const num2 = parseInt(readlineSync.question('Enter second number: '));
console.log('Sum= ' + (num1 + num2));

const string=readlineSync.question("Enter a string: ")
console.log(swapCase(string))


let sum=0
for(var i=2;i<=50;i=i+2){
    sum=sum+i
}
console.log(sum)
