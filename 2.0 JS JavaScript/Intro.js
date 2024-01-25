//Print Command
console.log("Hello World in JS..!!");
console.log('Hello');

//VARIABLES in JS
//SYNTAX : varname = value
age = 21;
fullName = "Vansh Sikka";
console.log(age);
console.log(fullName);

X = null; //pta toh hai iske ander kya hai, but khaali value hai
Y = undefined; //pta nhi iske ander kya hai
console.log(X);
console.log(Y);

isFollow = true;
flag = false;
console.log(isFollow * flag); //1 means true, 0 means false
//JS is DYNAMILCALLY Types Language (mentioning DataType is not imp)
fullName = 24; //Will not throw error..! (Dynamic change)
//But it's a wrong Practice

//RULES
/*
1. Case Sensitive "age", "Age" are different
2. No Space between Variable Name
3. First Character of variable should not be a DIGIT (numeric)
4. Reserved word can't be Variable Names (eg = "name" is reserved)
*/ 

// let, const & var
//Proper way of initialising Variables
/*
var : Variable can be Re-declared and updated (GLOBAL Scope)
let : variable cannot be Re-declared but can be updated (BLOCK Scope)
const : Variable cannot be Re-declared or updated. (BLOCK Scope) 
*/
var age1 = 54;
var age1 = 45;
//Can be Re-Declared and updated too
age1 = 34;
console.log(age1);

//Cannot be Re-Declared, throws error but can be updated
let myName = "Vansh";
let myAge = 21;
myName = "Vibhu";
console.log(myName);

//Cannot br Re-Declared or updated
//Must be DECLARed when initialized, else throw error
// const age2; Throws ERROR
const age2 = 22;
// age2 = 78; Throws ERROR
console.log(age2);

//DATATYPES in JS
//PRIMITIVE : Number, String, Boolean, Undefined, Null, BigInt, Symbol
//Non PRIMITIVE : Objects (Arrays, Functions)

let price;
price = 100.75;
console.log(typeof(price)); //number

let x;
console.log(typeof(x)); //undefined   

let y = null;
console.log(typeof(y)); //object (Non Primitive) 
//Vaise object hai but iss time null hai

//Rarely Used
let a = BigInt("123");
let b = Symbol("Hello!");

//NON PRIMITIVE DataType : OBJECTS
const student = {
    //key : value
    fName : "Vansh",
    lName : "Sikka",
    cgpa : 8.9,
    isPass : true
}
console.log(student);
//{ fName: 'Vansh', lName: 'Sikka', cgpa: 8.9, isPass: true }
console.log(student["fName"]); //Vansh
console.log(student.fName);
console.log(student["isPass"]); //true
console.log(student.isPass);
//Fact : We can change values of const student variables
//But it is "const", HOW ??
//We are not changing student, but attributes of object student

// Keep in mind we can change const object's (keys values)


