// Callbacks
//A callback is a function passed as an argument to another function

//Synchronous CALLBACK
function sum(a, b) {
    console.log(a + b);
}
function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}
calculator(5, 6, sum); //11
//Fact : calculator(5, 6, sum()); //ERROR

//Asynchronous CALLBACK
const hello = () => {
    console.log("Hello");
}
setTimeout(hello, 3000); //hello is a CallBack

//Problem with CallBack in Practical 
//CALLBACK HELL : Nested callbacks stacked below one another 
//forming a pyramid structure (Pyramid of Doom)

//This style of programming becomes diff to understand and manage

//Example:
function getData (dataId) {
    setTimeout(() => {
        console.log("data", dataId);
    }, 2000);
} 
getData(1);
getData(2);
getData(3);
//Execution : Asynchronous (setTimeout)
//All 3 will run & print at same time, WHY ??
//Sequence comes to getData(1), will hold timeout 2sec and
//come to getData(2) bcz asynchronous in nature, similarly
//will goto getData(3) and timeout of 2sec begin

//As result all 3 will be executed at same time

//But we want to execute them each after proper time gap
//After getdata(1) with 2sec gap, getData(2), then 2sec gap, getData(3)
//CallBack hell
function get (dataId, getNext) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNext) {
            getNext();
        }
    }, 2000);
}
//CallBack Hell
get(1, () => {
    get(2, () => {
        get(3);
    })
});
//will print 1,2,3 at interval of 2sec each
//COMPLEX to understand even for good programmers..!! (Syntax)
//Not a good way of programming... (CALLBACK Hell)

//Will understand PROMISES to resolve CallBack Hell






