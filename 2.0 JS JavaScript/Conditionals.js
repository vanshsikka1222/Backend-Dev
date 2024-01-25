let a = 5;
let b = 2;
//OPERATOR
console.log(a**b); //a power b = 5 power 2 = 25;

//CONDITIONALS
let color;
if(mode === "dark") {
    color = "black";
}
else if(mode === "rainbow") {
    color = "mix";
}
else {
    color = "white";
}

//TERNARY OPERATOR
//Syntax : condition ? true output : false output
age > 18 ? console.log("adult") : console.log("child");

//Switch Case DIY

//Taking input from user
let num;
num = prompt("Enter any number: ");
if(num % 5 === 0) {
    console.log("Multiple of 5");
}
else {
    console.log("Not a Multiple of 5");
}
