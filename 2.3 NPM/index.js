// Node Package Manager : by Github

//npm init
// json file generated which is a config file for our project
// Javascript Object Notation : json

//npm install <something>
// npm i sillyname
// (new section added in json package (dependencies))
// also got a new folder named node_modules

var generateName = require("sillyname");
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// CJS : Common JS Module System (Old)
// ESM : ECMAScript Modules (Latest)
// To activate ECMAScript Module System go to package.json
// add "type": "module" 

// CJS: var generateName = require("sillyname");
// ESM: import generateName from "sillyname";

import superheroes from "superheroes";
const name = superheroes.random();
console.log(`I am ${name}.`);

