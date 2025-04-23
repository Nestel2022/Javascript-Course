// Ejercicio 1
import "./aboutme.js";
console.log("Ej 1");

// Ejercicio 2

/** Se ejecuta primero el archivo importado, ya que en ES6 primero se resuelven todas las dependencias.
 *  Hace una ejecucion sincronica de los modulos, por lo que el archivo importado se ejecuta antes de que se ejecute el resto del codigo.
 * En conclusión, el orden de ejecución es el siguiente:
 * 1. Se ejecuta el archivo importado (aboutme.js).
 * 2. Se ejecuta el resto del código en el archivo actual (index.js).
 */

// Ejercicio 3

for (let i = 0; i < 100; i++) {
   if (i % 7 === 0) {
      console.log(i);
   }
    
}

// Ejercicio 4

for(var i = 0; i < 101; i++) {
    // Solución
}
console.log(i);

/**
 * Al final i sera 101, ya que la variable i fue declarada con var, lo que hace que su alcance sea global.
 * Por lo tanto, al finalizar el bucle, la variable i tendrá el valor 101, que es el último valor que se le asignó antes de que el bucle terminara.
 * La forma de que la variable i no se declare de forma global es declararla con let o const, ya que estas tienen un alcance de bloque.
 * Por ejemplo:
 * for(let i = 0; i < 101; i++) {
 *     // Solución                          
 * }
 * console.log(i); // ReferenceError: i is not defined
 */


// Ejercicio 5
/**
 * Las diferencias al usar <script> y <script type="module"> son las siguientes:
 * 1. El tipo de script: <script> es el script tradicional, mientras que <script type="module"> indica que se trata de un módulo ES6.
 * 2. Carga de scripts: Los scripts tradicionales se cargan de forma sincrónica, lo que significa que el navegador detiene la carga de 
 * la página hasta que se carga y ejecuta el script. En cambio, los módulos se cargan de forma asíncrona, lo que permite que la página 
 * continúe cargándose mientras se cargan los módulos.
 * 3. Alcance: Los scripts tradicionales tienen un alcance global, lo que significa que las variables y funciones definidas en un script
 * se pueden acceder desde cualquier otro script en la misma página. En cambio, los módulos tienen un alcance de bloque, lo que significa que
 * las variables y funciones definidas en un módulo no se pueden acceder desde otros módulos o scripts a menos que se exporten explícitamente.
 * 4. Importación y exportación: Los módulos permiten importar y exportar funciones, variables y objetos entre diferentes módulos, lo que facilita 
 * la organización y reutilización del código. En cambio, los scripts tradicionales no tienen esta capacidad.
 * 5. Carga diferida: Los módulos se cargan de forma diferida por defecto, lo que significa que se ejecutan después de que se haya cargado el DOM.
 * Esto permite que los módulos se ejecuten en el orden correcto sin necesidad de usar el atributo "defer".
 * 6. Compatibilidad: Los módulos son una característica más reciente de JavaScript y no son compatibles con versiones anteriores de navegadores.
 * Por lo tanto, si se necesita compatibilidad con navegadores más antiguos, es posible que se deba usar un transpilador como Babel para convertir 
 * el código de módulo en código tradicional.
 * 7. Módulos en línea: Los módulos pueden ser importados desde un archivo externo o definidos en línea dentro de una etiqueta <script> con el atributo type="module".
 * 8. Módulos en el servidor: Los módulos pueden ser utilizados en el lado del servidor con Node.js, lo que permite la creación de aplicaciones web más complejas y escalables.
 * 9. Módulos en el navegador: Los módulos pueden ser utilizados en el lado del cliente con navegadores modernos, lo que permite la creación de aplicaciones web más
 * complejas y escalables.
 * 
 * En conclusion, se puede usar <script type="module"> cuando:
 *  1. Se necesita modularidad import/export
 *  2. Se necesita carga asíncrona
 *  3. Evitar contaminancion del ambito global
 * 
 * y usar <script> cuando:
 * 1. compatibilidad con navegadores antiguos
 * 2. Se necesita carga sincrona
 * 3. no se necesita modularidad 
 */ 

// Ejercicio 6

const formatter = {
    prefix: "Hello",
    append: function (str) {
        console.log(this.prefix + str);
        
    },
}

Object.getPrototypeOf(formatter).toLowerString = function(str) {
    console.log(str.toLowerCase());
  };

formatter.append(" World")
formatter.toLowerString("Yo soy Nestor Castellanos")