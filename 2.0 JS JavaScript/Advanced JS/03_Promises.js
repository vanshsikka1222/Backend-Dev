//PROMISES
// it is for "eventual" completion of task. It is an OBJECt in JS
//Basically Solution to CallBack hell.

// let promise = new Promise((resolve, reject) => {....})
//Function with 2 Handlers (resolve, reject) both are callbacks by JS

let promise = new Promise((resolve, reject) => {
    console.log("I am a Promise");
});
//Output : I am a Promise
//Promise has 3 States : Pending, Resolved/Fulfilled, Rejected
//In above example: 
//PromiseState : pending & PromiseResult : undefined

let promise1 = new Promise((resolve, reject) => {
    console.log("I am a Promise1");
    resolve("success");
});
//Output : I am a Promise1
//PromiseState : fulfilled & PromiseResult : success

let promise2 = new Promise((resolve, reject) => {
    console.log("I am a Promise2");
    // reject("error"); (will throw error)
});
//Output : I am a Promise2 + ERROR in code
//PromiseState : rejected & PromiseResult : error

//FACTS : In general other APIs or Systems send us promises 
//and we just handle those promises accordingly..!!

function getData(dataId) {
    return Promise3((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Got result : SUCCESS");
        }, 5000);
    })
}
/*
When this function is called, instead of providing result after 5sec
it immediately gives or return a promise which is in pending state, 
then after 5 sec if result comes out, promise state turns to fulfilled
and function result is given as output..!! 
*/

//When we get a Promise instead of actual result, how to use promise
//How to handle that PROMISE at our end..!!

//Handlers : .then() and .catch()
//If after sometime, promise given to us gets fulfilled, 
//to do some actions we use promise.then((res) => {....})

//If after sometime, promise given to us gets rejected, 
//to do some actions we use promise.catch((err) => {....})

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise4");
        resolve("success");
    });
}

let promise4 = getPromise();
promise4.then(() => {
    console.log("promise4 fulfilled");
});
promise.catch(() => {
    console.log("promise4 rejected");
})

//OUTPUT : 
// I am a Promise4
// promise4 fulfilled

//PROMISE CHAIN.
function async1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data1");
            resolve("success")
        }, 4000);
    });
}
console.log("fetching data1...");
let p1 = async1();
p1.then((res) => {
    console.log(res);
});

function async2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data2");
            resolve("success")
        }, 4000);
    });
}
console.log("fetching data2...");
let p2 = async2();
p2.then((res) => {
    console.log(res);
});

//Output: 
/* 
fetching data1...
fetching data2...
Some Data1
success
Some Data2
success
*/

//We don't want to fetch both data all together, we wanted 
//to get data1 and after 4sec gaet data2..!!
//How to do that...!! (CHAINING)

/*
console.log("fetching data1...");
let p1 = async1();
p1.then((res) => {
    console.log(res);
    console.log("fetching data2...");
    let p2 = async2();
    p2.then((res) => {
        console.log(res);
    });
});
*/

//Basically .then() inside .then() //PROMISE CHAINING
//Easier as compared to Callback Hell..!!
//But there is a more better way to avoid Promise Chaining
//ASYNC AWAIT..!!
