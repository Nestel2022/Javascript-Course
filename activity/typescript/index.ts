// Ejercicio 1

// Se crea interfaz de nombre Persona
interface Persona {
    name: string;
    age: number;
    profession: string;
}

// Arrow function que recibe un objeto Persona y devuelve un array con union type
const personProterties = (person: Persona): (string | number)[] => {
    return [person.name, person.age, person.profession];
};


const pruebaPersona: Persona = {
    name: "Nestor",
    age: 27,
    profession: "Full Stack Developer"
};

const properties = personProterties(pruebaPersona);
console.log(properties); 

// Ejercicio 2

function sumOrConcatenate(valor1: number | string, valor2: number | string): number | string {
    if (typeof valor1 === 'number' && typeof valor2 === 'number') {        
        return valor1 + valor2;
    } else if (typeof valor1 === 'string' && typeof valor2 === 'string') {       
        return `${valor1}-${valor2}`;
    } else {      
        return `${valor1}:${valor2}`;
    }
}
console.log(sumOrConcatenate(4, 3));  // 7
console.log(sumOrConcatenate("a", "b")); // "a-b" 
console.log(sumOrConcatenate(1, "b"));  // "1:b" 
console.log(sumOrConcatenate("a", 2)); // "a:2"

// Ejercicio 3

// Definición de las interfaces
interface Carro {
    tires: number;
    turnOnEngine: () => void;
    pressPedal: () => void;
}

interface Moto{
    tires: number;
    turnOnEngine: () => void;
    openThrottle: () => void;
}

// Función que maneja ambos tipos de vehículos
function operarVehiculo(vehicle: Carro | Moto): void {   
    vehicle.turnOnEngine();    
    
    if (confirmoCarro(vehicle)) {
        vehicle.pressPedal();
    } else if (confirmoMoto(vehicle)) {
        vehicle.openThrottle();
    }
}

// Type predicates para verificar el tipo
function confirmoCarro(vehicle: Carro | Moto): vehicle is Carro {
    return 'pressPedal' in vehicle;
}

function confirmoMoto(vehicle: Carro | Moto): vehicle is Moto {
    return 'openThrottle' in vehicle;
}

const miCarro: Carro = {
    tires: 4,
    turnOnEngine: () => console.log('Motor del coche encendido'),
    pressPedal: () => console.log('Pedal del coche presionado')
};

const miMoto: Moto = {
    tires: 2,
    turnOnEngine: () => console.log('Motor de la moto encendido'),
    openThrottle: () => console.log('Mano del acelerador abierta')
};

operarVehiculo(miCarro);
operarVehiculo(miMoto);


// Ejercicio 4

function removeFirstEntry<T extends string | number>(array: T[]): T[] {
    return array.slice(1);
}

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number | string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray)

console.log(newStrArray);
console.log(newNumArray); 
console.log(newMixedArray); 
// console.log(newUnsupportedArray);
