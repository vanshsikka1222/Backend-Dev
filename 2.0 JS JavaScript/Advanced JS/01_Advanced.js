//Asynchronus Programming
//Conclusion : async await >> promise chains >> callback hell

/* Sync in JS
1. SYNCHRONOUS : Code runs in particular sequence of instructions.
Each instruction waits for prev to complete its execution.

2. ASYNCHRONOUS : Due to synchronous sometimes imp instructions gets 
blocked due to prev instructions, that cause delay in UI.
Asynchronous code allows to execute next instructions immediately
and doesn't block the flow..!!
*/

// Till now all JS programming we have done was SYNCHRONOUS

//Asynchronous Programming in JS
function hello() {
    console.log("Hello");
}
setTimeout(hello, 2000); //timeout 2sec = 2000ms
//means will execute hello function after 2 sec

console.log("one");
console.log("two");

setTimeout(() => {
    console.log("Hi, Vansh"); //Arrow Func
}, 2000);

console.log("three");
console.log("four");

//Output : acc to ASYNCHRONOUS Programming
/*
one
two
three
four
Hello
Hi, Vansh
*/




