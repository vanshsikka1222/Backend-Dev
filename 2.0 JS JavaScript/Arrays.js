//ARRAYS in JS (type: Objects)
let marks = [98,97,96,99,100];
//can be off different datatypes unlike in Java, C++ ...
let info = ["vibhu", 89, "Delhi"];

console.log(marks); //[ 98, 97, 96, 99, 100 ]
console.log(marks.length); //5
console.log(info[0]); //vibhu

//Strings are Immutable
//Arrays are Mutable

//Iterating over Array
for(let i = 0; i < info.length; i++) {
    console.log(info[i]);
}
// vibhu
// 89
// Delhi

//Using for of loop
for (let j of marks) {
    console.log(j);
}
// 98
// 97
// 96
// 99
// 100

//ARRAY Methods
marks.push(110,100,93); //add to end
marks.pop(); //delete from end and return

console.log(marks.toString()); //converts ARRAY to STRING
// 98,97,96,99,100,110,100

// Marks Remains ARRAY only
console.log(marks);
// [ 98, 97, 96, 99, 100 ]

//Concat() : joins multiple Arrays :: let arr = arr1.concat(arr2);
//unshift() : add to start
//shift() : delete from start and return

//slice() : returns a piece of array
//splice(startIdx, delCount, newElem) : change original Array (add, replace, remove)
let arr = [1,2,3,4,5,6,7,8,9];
arr.splice(2,2,101,102);
console.log(arr);
// [1, 2, 101, 102, 5, 6, 7,   8,   9]

