"use strict";
console.log("%cTypes", 'color: #3913B8; font-size: 20px;');
console.log("%c1. Type annotation", 'color: #229179; font-size: 16px;');
//let student: string = [1, 2, 4]; // TypeScript error
let helloWorld = "Hello world"; // Will compile
function talkFunc(phrase) {
    console.log(phrase);
}
let arrayNum = [1, 2, 3];
//talkFunc(arrayNum); // TypeScript error
talkFunc("Hello world");
console.log("%c2. Categories", 'color: #229179; font-size: 16px;');
// string
let message = "Hello World";
// number
let sum = 2;
// optional
let optional = true;
//any
let anyObject = { name: "Lucas" };
// anyObject.callEmptyMethod(); will fail
// anyObject.otherAttribute; will fail
anyObject = "String";
// array
let numbers = [1, 2, 4];
// function
let func = function (firstArg, secondArg) {
    return firstArg + secondArg;
};
// object
let newObj = { x: 10, y: 4 };
