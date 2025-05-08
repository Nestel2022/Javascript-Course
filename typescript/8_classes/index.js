"use strict";
console.log("%cClases", "color: #3913B8; font-size: 20px;");
console.log("%c1. Overview", "color: #229179; font-size: 16px;");
class Person {
    constructor(name) {
        this.name = name;
    }
    speak(phrase = "Hello World") {
        console.log(phrase);
    }
}
let person = new Person("Pablo");
console.log(person);
console.log("%c2. Palabras reservadas", "color: #229179; font-size: 16px;");
console.log("-------------- readonly ----------------");
class Greeter {
    constructor(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
}
const greeter = new Greeter();
console.log(greeter.name);
// This will fail -> g.name = "also not ok";
console.log("-------------- implements ----------------");
class Sonar {
    ping() {
        console.log("ping!");
    }
}
// class Ball implements Pingable { //Class 'Ball' incorrectly implements interface 'Pingable'. Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//   pong() {
//     console.log("pong!");
//   }
// }
console.log("-------------- extends ----------------");
class StudentExtend extends Person {
    constructor(name) {
        super(name);
    }
    speak(phrase = "And I want to learn") {
        console.log("I'm a student...");
        super.speak(phrase);
    }
}
class Teacher extends Person {
    constructor(name) {
        super(name);
    }
    speak(phrase = "And I want to teach") {
        console.log("I'm a teacher...");
        super.speak(phrase);
    }
}
let pepe = new StudentExtend("I'm learning TypeScript");
let juan = new Teacher("I'm teaching new feature");
pepe.speak();
juan.speak("And i love it");
