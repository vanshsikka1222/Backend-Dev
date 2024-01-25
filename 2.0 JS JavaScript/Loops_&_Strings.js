//Loops 
let sum = 0;
for(let i = 0; i <= 5; i++) {
    console.log("Hello JS " + i);
    sum = sum = i;
}
//Hello JS 0
//Hello JS 1
//Hello JS 2
//Hello JS 3
//Hello JS 4
//Hello JS 5
console.log(sum);

let i = 0;
while(i < 5) {
    console.log("Hello JS");
    i++;
}

let j = 0;
do {
    console.log("Hello JS " + j);
    j++;
} while(j < 5);

//for-of and for-in loops in JS
//for-of: Helps to ITERATE on some special datatypes : Strings and Arrays
let str = "Vansh Sikka";
let size = 0;
for(let i of str) {
    //iterator -> characters
    console.log(i);
    size = size + 1;
}
console.log(size); //11

//for-in: Helps to iterate in Objects
let Student = {
    name : "Vansh",
    age : 20,
    cgpa : 9.8,
    isPAss : true
};
for(let i in Student) {
    console.log(i);
    console.log(Student[i]);
}
// name
// Vansh
// age
// 20
// cgpa
// 9.8
// isPAss
// true


//STRINGS in JS
//Strings are IMMUTABLE in JS
let str1 = "Vibhu";
console.log(str1.length); //5
console.log(str1[4]); //u

//TEMPLATE Literals : can also write variables with strings ;)
//can also use backticks: ``
let str2 = `Vansh`;

let obj = {
    item: "pen",
    price : 20,
};
console.log("The cost of " + obj.item + " is " + obj.price + " rupees");
// OR
//using TEMPLATE Literals
console.log(`The cost of ${obj.item} is ${obj.price} rupees`)
//this thing is termed as STRING Interpolation 
// `string ${expression} string ----`

//String Methods
str.toUpperCase();
str.toLowerCase;
str.trim() //Removes whitespaces
//str.slice(start, end);
str1.concat(str2);
//str.replace(searcVal, newVal);
str.charAt(i);




