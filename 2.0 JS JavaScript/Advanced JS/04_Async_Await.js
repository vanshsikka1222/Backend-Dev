//ASYNC-AWAIT are two keywords
//async function always returns a Promise
//await pauses execution of its surrounding async func 
//until promise is settled..!!

// async function myFunc() {...}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    })
}

// await api(); ERROR
//Bcz await only comes with async functions
async function getWeatherData() {
    await api(); //1st Call
    await api(); //2nd Call
}
//Now after 1st call there will be timeout of 2sec and then 2nd call
//EASIEST way to achieve..!! 
 
//Drawback : we have to put all our code inside an async function
//To execute the code, we have to execute func first
//To Avoid this : IIFE (Immediately Invoked Function Expression)
//IIFE: functions that are called immediately as soon as it is defined

// Syntax: (func)();

(function () {
    //.......
})();

//Arrow IIFE Function
(() => {
    //........
})();

//async IIFE Function
(async () => {
    //.........
})();

//IIFE function..!!
(async function getWeatherData() {
    await api(); //1st Call
    await api(); //2nd Call
})();

