// Ejercicio 1

const person ={
  name: "Nestor",
  age: 27,
  profession: "Developer"
}

const getProperties = (objeto) => Object.keys(objeto)

const pripiedades = getProperties(person)
console.log(pripiedades)

// Ejercicio 2
//1. this en el contexto global
//el valor sera true
console.log(this === window); 
this.mensaje = "Hola";
//el valor sera "Hola"
console.log(window.mensaje);

//2. this en una funcion modo no estricto
function saludar() {
  //saldra windows en un navegador
  console.log(this);
}
saludar();

//3. this en una funcion modo estricto
"use strict";
function saludar() {
  //saldra undefined en un navegador
  console.log(this);
}
saludar();

//4. this en un método de un objeto
const persona = {
  nombre: "Nestor",
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};
//saldra "Hola, soy Nestor"
persona.saludar();

//5. this en un arrow function
const objeto = {
  valor: 42,
  metodoNormal: function() {
    //42 (this = objeto)
    console.log(this.valor);
  },
  metodoArrow: () => {
    // undefined (this heredado, en navegador = window)
    console.log(this.valor); 
  }
};
objeto.metodoNormal(); // 42
objeto.metodoArrow();  // undefined

//7. this en un evento
const boton = document.createElement("button");
boton.innerText = "Click me";
document.body.appendChild(boton);
boton.addEventListener("click", function() {
  //saldra el elemento boton
  console.log(this); 
});

//8. this en metodos con bind, call y apply

//call
function saludar() {
  console.log(`Hola, ${this.nombre}`);
}
const usuarioCall = { nombre: "Nestor" };
// "Hola, Nestor" (this = usuario)
saludar.call(usuarioCall); 

//apply
function saludar() {
  console.log(`Hola, ${this.nombre}`);
}
const usuario = { nombre: "Nestor" };
// "Hola, Nestor" (this = usuario)
saludar.apply(usuario);

//bind
function saludar() {
  console.log(`Hola, ${this.nombre}`);
}
const usuarioPrueba = { nombre: "Nestor" };
// "Hola, Nestor" (this = usuario)
const saludarUsuario = saludar.bind(usuarioPrueba);
// "Hola, Nestor"
saludarUsuario(); 

// principales diferencias entre arrow functions y function expressions
// 1. Sintaxis: Las arrow functions tienen una sintaxis más concisa y no requieren la palabra clave "function", y el return es opcional si solo hay una expresión.

//arrow function
const suma = (a, b) => a + b;

//function expression|
const sumaExpression = function(a, b) { return a + b; };

// 2. Alcance de "this": En las arrow functions, el valor de "this" se hereda del contexto en el que se definen, mientras que en las function expressions,
// el valor de "this" se determina en el momento de la invocación de la función. Esto significa que las arrow functions no tienen su propio "this".

//arrow function
const objetoArrow = {
  valor: 42,
  metodo: () => {
    console.log(this.valor); // undefined (this heredado, en navegador = window)
  }
};
objetoArrow.metodo(); // undefined

//function expression
const objetoExpression = {
  valor: 42,
  metodo: function() {
    console.log(this.valor); // 42 (this = objetoExpression)
  }
};    
objetoExpression.metodo(); // 42


//3. objeto argumentos: Las arrow functions no tienen su propio objeto "arguments", mientras que las function expressions sí lo tienen. Esto significa que en una arrow function,
// no se puede acceder a los argumentos pasados a la función utilizando "arguments". En su lugar, se puede usar el operador rest para obtener los argumentos como un array.

//arrow function
const mostrarArgsA = (...args) => console.log(args);
mostrarArgsA(1, 2); // [1, 2]

//function expression
function mostrarArgs() {
  console.log(arguments); // Arguments(2) [1, 2]
}
mostrarArgs(1, 2);


// Ejercicio 3

class InvertirCadena {
  constructor() {
    this.cadenaInvertir = ''
  }
 
  invertir = () => {
    if (this.cadenaInvertir === '') {
      throw new Error('Cadena vacía');
    }
    console.log(this.cadenaInvertir.split('').reverse().join(''));
  }
}
const invertirCadena = new InvertirCadena();

// invertirCadena.invertir();

// try {
//   invertirCadena.invertir(); 
// } catch (error) {
//   console.error('Error:', error.message); 
// }

invertirCadena.cadenaInvertir = 'Hola mundo';
invertirCadena.invertir();


// invertirCadena.nuevoMetodo();

if (invertirCadena.nuevoMetodo) { 
  invertirCadena.nuevoMetodo();
} else {
  console.log('El método nuevoMetodo no existe');
}

// Ejercicio 4
class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === 'admin' && this.password === 'passwd') {
      alert('User logged in');
    } else {
      alert('User or passwd incorrect');
    }
  }
}


let login = new Login("admin", "passwd");
// Muestra alerta: "User logged in"
// login.login(); 

let logbad = new Login("pepe", "bad");
// Muestra alerta: "User or passwd incorrect"
// logbad.login(); 

// Ejercicio 5
// evento para el primer boton, de simulacion login correcto
document.getElementById("loginSuccess").addEventListener("click", () => {
  const loginCorrecto = new Login("admin", "passwd");
  // Muestra: "User logged in"
  loginCorrecto.login(); 
});

// Listener para el botón de Login Incorrecto (loginFailure)
document.getElementById("loginFailure").addEventListener("click", () => {
  const loginIncorrecto = new Login("pepe", "1234"); 
  // Muestra: "User or passwd incorrect"
  loginIncorrecto.login(); 
});

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};

// Event listener para login exitoso (loginSuccessAsync)
document.getElementById("loginSuccessAsync").addEventListener("click", async () => {
  try {
    const result = await loginWitUsername("admin", "passwd");
    // Muestra: "User logged in"
    alert(result); 
  } catch (error) {
    alert(error);
  }
});

// Event listener para login fallido (loginFailureAsync)
document.getElementById("loginFailureAsync").addEventListener("click", async () => {
  try {
    const result = await loginWitUsername("user", "wrongpass");
    alert(result); 
  } catch (error) {
    // Muestra: "Error: invalid username or password"
    alert(error); 
  }
});
