//Can inspect the page and see all HTML in CONSOLE panel
console.log("Hello JS");

// WINDOW Object (Browser's object not JS's) 
// automatically created by Browser
// global object with lots of properties and methods
window.console.log("Hello JS via window object")

//DOM (Document Object Model)
//accessing all HTML elements within our JS code file 

// window.document: Gives whole HTML code in Console
console.log(window.document);

// console.log : used to Print element
// console.dir : used to Print prop and methods of Document
console.dir(window.document); //each and every obj prop and method

//DOM
//window -> document -> html

//html -> head, body

//head -> meta, title, link

//body -> div, script
//div -> img, h1, p, div

//Accessing HTML in JS file
console.log(document.body); //displays complete HTML file BODY tag

//used to change HTML using JS from event listners and more...!!
document.body.style.background = "green"; //Dynamic manipulation

//DOM is used for Dynamic manipulation of WebPage

// DOM Manipulation : Accessing particular HTML Tag
//Selecting with id
let id_h1 = document.getElementById("myId1");
console.log(id_h1); 
//<h1 id="myId1">Document Object Model with id</h1>

let class_h1 = document.getElementsByClassName("myClass1");
console.log(class_h1);
//HTMLCollection [h1.myClass1] //Array of tags with same class

let h1 = document.getElementsByTagName("h1");
console.log(h1);
/* HTMLCollection(3) [h1, h1#myId1, h1.myClass1, myId1: h1#myId1]
0: h1
1: h1#myId1
2: h1.myClass1
myId1: h1#myId1
length: 3
[[Prototype]]: HTMLCollection */

//METHOD to Select using QUERY SELECTOR
document.querySelector("h1");
document.querySelectorAll("h1");

document.querySelector(".myClass1");
document.querySelector("#myId1");

//Getting And Setting values of HTML tags
// tagName : returns tag for element Nodes
// innerText : return text content of the element and all its children
// innerHTML : returns plain text or HTML contents in the element
// textContent : returns textual content even for hidden elements







