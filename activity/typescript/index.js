// Ejercicio 1
// Arrow function que recibe un objeto Persona y devuelve un array con union type
var personProterties = function (person) {
    return [person.name, person.age, person.profession];
};
var pruebaPersona = {
    name: "Nestor",
    age: 27,
    profession: "Full Stack Developer"
};
var properties = personProterties(pruebaPersona);
console.log(properties);
// Ejercicio 2
function sumOrConcatenate(valor1, valor2) {
    if (typeof valor1 === 'number' && typeof valor2 === 'number') {
        return valor1 + valor2;
    }
    else if (typeof valor1 === 'string' && typeof valor2 === 'string') {
        return "".concat(valor1, "-").concat(valor2);
    }
    else {
        return "".concat(valor1, ":").concat(valor2);
    }
}
console.log(sumOrConcatenate(4, 3)); // 7
console.log(sumOrConcatenate("a", "b")); // "a-b" 
console.log(sumOrConcatenate(1, "b")); // "1:b" 
console.log(sumOrConcatenate("a", 2)); // "a:2"
// Función que maneja ambos tipos de vehículos
function operarVehiculo(vehicle) {
    vehicle.turnOnEngine();
    if (confirmoCarro(vehicle)) {
        vehicle.pressPedal();
    }
    else if (confirmoMoto(vehicle)) {
        vehicle.openThrottle();
    }
}
// Type predicates para verificar el tipo
function confirmoCarro(vehicle) {
    return 'pressPedal' in vehicle;
}
function confirmoMoto(vehicle) {
    return 'openThrottle' in vehicle;
}
var miCarro = {
    tires: 4,
    turnOnEngine: function () { return console.log('Motor del coche encendido'); },
    pressPedal: function () { return console.log('Pedal del coche presionado'); }
};
var miMoto = {
    tires: 2,
    turnOnEngine: function () { return console.log('Motor de la moto encendido'); },
    openThrottle: function () { return console.log('Mano del acelerador abierta'); }
};
operarVehiculo(miCarro);
operarVehiculo(miMoto);
// Ejercicio 4
function removeFirstEntry(array) {
    return array.slice(1);
}
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray)
console.log(newStrArray);
console.log(newNumArray);
console.log(newMixedArray);
// console.log(newUnsupportedArray);
