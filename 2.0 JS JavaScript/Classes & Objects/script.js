//Object Oriented Programming : Classes and Objects

//Creating Object : DIRECT Method
const Student = {
    //Properties or States
    firstName : "Vansh",
    lastName : "Sikka",
    marks : 98.4,

    //Function or Methods or Behaviour 
    printMarks : function() {
        console.log("marks = ", this.marks);
    }
}
//To access object properties Print
Student.printMarks(); //98.4
Student.firstName; //Vansh
Student.printMarks; //f () { console.log("marks ", this.marks) }
Student.abc; //undefined
Student.toString; //gives output (Not undefined) ??
//-------------------------------------------------------------------------

//Whenever we create an object in JS
//automatically an object named "Prototype" is created within our obj.
//Prototype obj consists of itw own prop & methods..!!
//Eg : toString is a Prototype method..!!

//Obj1
const Employee = {
    calcTax() {
        console.log("Tax is Calculated");
    }
}

//Obj2 
const Person = {
    salary : 2000
}
//Facts : Both Obj1 and Obj2 contains a prototype object within them

//Now we want to use prop "calcTax" of Obj1 in Obj2 (Inheritance)
//Task to call calcTax method from Obj2 that is Person
// Person.calcTax(); : SHOWS ERROR

//use "__proto__"
Person.__proto__ = Employee;
//This line means now Prototype obj within Obj2 that is "Person"
//Consists of all methods and prop of Obj1 that is "Employee"

Person.calcTax();
//Tax is Calculated

//Prototype : Basically a reference to an Object

//FACTS : If Object and Prototype havesame method, 
//Object's Method will be USED (Priority)..!!

//-------------------------------------------------------------------------
// Creating Objects using CLASSES..!!
//Class : a program-code template for creating objects..!!

class Car {
    start() {
        console.log("car start");
    }
    stop() {
        console.log("car stop");
    }
}

//Creating obj of class Car
let ertiga = new Car();
ertiga.start();
ertiga.stop();

let alto = new Car();
alto.start();

//CONSTRUCTOR In JAVASCRIPT Classes
class Human {
    //Automatically gets invoked
    constructor() {
        console.log("Object created using Constructor");
    }
    //Class may have only 1 Constructor in JS.
    
    // constructor(brand) {
    //     brand = this.brand;
    //     console.log(brand);
    // }

    run() {
        console.log("run");
    }
}

let h1 = new Human(); //Object created using Constructor
let h2 = new Human(); //Object created using Constructor

//INHERITANCE IN JavaScript
class person extends Human {

}

let p1 = new person();
p1.run();
//Object created using Constructor
//run

//Facts : If Child and Parent class contains same function 
//then Child class func will execute (priority)

// SUPER Keyword 
//used to call constructor of its parent class to access parent's prop & methods

class Parent {
    constructor() {
        console.log("HELLO from Parent Constructor");
    }
}

class Child extends Parent {
    constructor() {
        super(); //to invoke parent class constructor
        console.log("HELLO from Child Constructor");
    }
}

