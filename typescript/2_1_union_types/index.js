"use strict";
console.log("%cManipulación de tipos", 'color: #3913B8; font-size: 20px;');
console.log("%c1. Union Types", 'color: #229179; font-size: 16px;');
function printPhoneNumber(phoneNumber) {
    console.log("Your phone number is " + phoneNumber);
}
printPhoneNumber(612389238);
printPhoneNumber("637839489");
// printPhoneNumber({ phone: 613892348}); // Error
console.log("%c2. Type Alias", 'color: #229179; font-size: 16px;');
let myID = "23789s";
let myOtherId = 213432423;
function printMail(mail) {
    const date = new Date(mail.timestamp);
    console.log(`${mail.header} - ${date}`);
    console.log(`---------------------------------`);
    console.log(`${mail.body}`);
}
let mail = { header: "Hello Everyone", body: "This is a test email", timestamp: Date.now() };
printMail(mail);
console.log("%c3. Type Assertion", 'color: #229179; font-size: 16px;');
const myCanvas = document.getElementById("container");
