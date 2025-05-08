"use strict";
console.log("%cGenericos", "color: #3913B8; font-size: 20px;");
console.log("%c1. Genéricos", "color: #229179; font-size: 16px;");
console.log("-------- overview ----------");
let nums = [1, 3, 4];
const lastNumber = (arr) => {
    return arr[arr.length - 1];
};
const lNumber = lastNumber([2, 4, 5]);
console.log(lNumber);
const lastElement = (arr) => {
    return arr[arr.length - 1];
};
const lastElementNumber = lastElement([2, 4, 5]);
console.log(lastElementNumber);
const lastElementString = lastElement(["Hello", "World", "!"]); // Typescript infiere el tipo pero lo puedes indicar
console.log(lastElementString);
console.log("-------- multiple generics ----------");
const makeString = (x, y) => {
    return `${x} ${y}`;
};
const firstString = makeString(5, "hello");
console.log(firstString);
const secondString = makeString("Array ->", [1, 2, 3]);
console.log(secondString);
console.log("-------- default values ----------");
const makeStringDefault = (x, y) => {
    return `${x} ${y}`;
};
const fistStringValid = makeStringDefault(5, "hello");
console.log(fistStringValid);
const secondStringValid = makeStringDefault([1, 2, 3], 4);
console.log(secondStringValid);
// Will Fail -> const secondStringValid = makeStringDefault<number[]>([1, 2, 3], "hello");
console.log("-------- Constraints ----------");
const makeFullName = (obj) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName,
    };
};
const person1 = makeFullName({
    firstName: "Lucas",
    lastName: "Fernandez",
    age: 28,
});
console.log(person1);
const person2 = makeFullName({
    firstName: "Pedro",
    lastName: "Ramirez",
    profession: "Full Stack",
});
console.log(person2);
// Will Fail const personFail = makeFullName({otherName: "Lucas", lastName: "Fernandez", age: 28});
console.log("-------- Interfaces ----------");
let messageNumber = {
    id: "as8df90asdf",
    timestamp: 23429342349,
    data: 23482934092384092384029384293840238,
};
console.log(messageNumber);
let messageString = {
    id: "oiausdf989as",
    timestamp: 38495830989,
    data: "Hello World",
};
console.log(messageString);
console.log("%c2. Keyof", "color: #229179; font-size: 16px;");
let point = "x";
function getProperty(obj, key) {
    return obj[key];
}
const developer = {
    name: "Tobias",
    salary: 100,
};
const nameType = getProperty(developer, "name");
console.log(nameType);
// Compiler error -> const salaryType getProperty(developer, ‘pay’); //Cannot find name 'pay'.(2304)
console.log("%c3. Typeof", "color: #229179; font-size: 16px;");
let s = "hello";
let n = "world";
console.log(n);
function f() {
    return { x: 10, y: 3 };
}
const pointPredicate = { x: 10, y: 4 };
console.log(pointPredicate);
console.log("%c4. Conditionals", "color: #229179; font-size: 16px;");
function createLabel(idOrName) {
    if (typeof idOrName === "number") {
        return { id: 1, message: "Hello world", timestamp: 234234234 };
    }
    else {
        return { name: "foo", message: "Hello world", timestamp: 234234234 };
    }
}
let firstLabel = createLabel("typescript");
console.log(firstLabel);
let secondLabel = createLabel(23);
console.log(secondLabel);
