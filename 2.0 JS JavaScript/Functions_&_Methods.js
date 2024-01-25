//Functions in JS: Block of Code that performs specific task
//Function Defination

//Fact : Functions in JS can act as parameters for other functions too....!!
function print() {
    console.log("Vansh");
}

//Function Call/Invoke
print(); //Vansh
print(); //Vansh

function write(msg) { //msg = parameter
    console.log(msg);
}

write("I am a good Boy"); //argument
write("Hello JS");
// I am a good Boy
// Hello JS

//NaN = Not a Number (ERROR)

function sum(x,y) {
    s = x + y;
    return s;
}
let val = sum(7,8);
console.log(val); //15
console.log(sum(1,2)); //3

// ARROW FUNCTIONS (Compact Way of writing a function) MODERN JS
// Syntax : (param1,param2...) => { // do some work }
(a,b) => {
    return a+b;
}

// To execute: Store value of Func in a variable 
const sum1 = (a,b) => {
    console.log(a + b);
}

sum1(3,4); //7

const printHello = () => console.log("Hello");

//Call
printHello(); //Hello

//To count number of vowels in a String
function countVowels(str) {
    let count = 0;
    for(let char of str) {
        if(char === 'a' || char === 'e' || char === 'i'|| char === 'o' || char === 'u') {
            count = count + 1;
        }
    }
    console.log(`Number of vowels in ${str} are ${count}`);
}

countVowels("abcdefghijklmnopqrstuvwxyz");
// Number of vowels in abcdefghijklmnopqrstuvwxyz are 5

// ArrowFunction to do same
const countVow = (str) => {
    for(let char of str) {
        if(char === 'a' || char === 'e' || char === 'i'|| char === 'o' || char === 'u') {
            count = count + 1;
        }
    }
    console.log(`Number of vowels in ${str} are ${count}`);
}

//Fact : Functions in JS can act as parameters for other functions too....!!
// xyz is a HOF (High Order Function)
function abc() {
    console.log("Hello");
}
//Function within a Function
function xyz(abc) {
    return abc;
} 

//forEach Loop in Arrays : it acts as METHOD : bcz its appliead on Array which is OBJECT
// arr.forEach( callBackFunction ) 
// CallBackFunction is a function passed as an argument to another function. 
// (that will execute on every val of array "arr")

let arr = [1,2,3,4,5,6,7,8,9,10];
arr.forEach(function printVal(val) {
    console.log(val);
})
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//Some inbuilt PARAMETERS in forEachLoop : val, idx, arr
let arr1 = ["Vibhu", "Vansh", "Devain"];

//Using Arrow Function
arr1.forEach( (val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr1);
})
// VIBHU 0 [ 'Vibhu', 'Vansh', 'Devain' ]
// VANSH 1 [ 'Vibhu', 'Vansh', 'Devain' ]
// DEVAIN 2 [ 'Vibhu', 'Vansh', 'Devain' ]

//Fact : forEach Function (Loop in Java) is HOF 
// Higher Order Function : Those that take parameter as other function or return function

let nums = [1,2,3,4,5,6];

let calSquare = (num) => {
    console.log(num*num);
};

nums.forEach(calSquare);
// 1
// 4
// 9
// 16
// 25
// 36

//Some Important Array Methods
//1.MAP : Creates a new array with the results of some operation. 
//The value its callback returns are used to form a new array
//SYNTAX : arr.map(callBackFunction(value, index, array))

let nums1 = [1,2,3,4,5,6,7,8,9,10];

//Prints values from 1 to 10
nums1.map( (val) => {
    console.log(val);
}) 

//Storing all array values as its Square in new array
let newArr1 = nums1.map( (val) => {
    return val*val;
})
console.log(newArr1);
// [ 1,  4,  9, 16,  25, 36, 49, 64, 81, 100 ]

//2.FILTER: Creates a new array of elements that give true for a condition/filter
//Enhanced version of Maps with conditions

let newArr2 = nums1.filter( (val) => {
    //Condition
    return val % 2 === 0;
})
console.log(newArr2); //Even numbers
// [ 2, 4, 6, 8, 10 ]

//3.REDUCE : Performs some operations and reduces the array to SINGLE Value. 
//It returns that SINGLE value

let sumOfnums = nums1.reduce( (sum, curr) => {
    return sum + curr;
})
console.log(sumOfnums); //55

//Finding MAX in Array
let maxVal = nums1.reduce( (max, curr) => {
    if(max < curr) {
        max = curr;
    }
    return max;
})
console.log(maxVal); //10

//MAP, FILTER, REDUCE...!!


