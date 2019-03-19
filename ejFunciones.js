//Ejercicio 1
// function numerosPares () {
//     for(var i = 0; i <= 100; i++)
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// };

// numerosPares();

//Ejercicio 2
// function datosPersonales (nombre, edad,telefono, calle, altura, codigoPostal) {
//     console.log("Nombre: " + nombre); 
//     console.log("Edad: " + edad);
//     console.log("Telefono: " + telefono);
//     console.log("Calle: " + calle);
//     console.log("Altura: " + altura);
//     console.log("Codigo Postal: " + codigoPostal)
// }

// datosPersonales("Marianela",30, "4551-6869", "Cespedes", "3551","1427");

//Ejercicio 3
// var mostrarNombre = function(nombre) {
//     console.log("======");
//     console.log("=" + nombre + "=");
//     console.log("======");
// };

// mostrarNombre("Mari");
// mostrarNombre("Mari");

//Ejercicio 4
// var numerosPares = function() {
//     for(var i = 0; i <= 100; i++)
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// };

// numerosPares();
// numerosPares();
// numerosPares();
// numerosPares();
// numerosPares();

//Ejercicio 5 - FIBONACCI - MAL
// var fibonacci = function (a, b) {
//     while(a < 10) {
//      var c = a + b;  
//     }
//     console.log(c)
// };

// console.log(fibonacci(0,1));

//Ejercico 6
// function obtenerNombre(){
//     return "Marianela";
// }

// console.log("Mi nombre es " + obtenerNombre());

//Ejercicio 7
// function numerosPares(){
//    return [0, 2, 4, 6, 8]
// }

// var primerosNumerosPares = numerosPares();

// console.log(primerosNumerosPares);
// deberia mostrar [0, 2, 4, 6, 8]

//Ejercicio 8
// function obtenerNombre() {
//     return "Marianela";
// }

// function obtenerSaludo(){
//     var nombre = obtenerNombre();
//     return "Hola, " + nombre + "!"
// }

// console.log(obtenerSaludo());

//Ejercicio 9
// function obtenerIDUsario(){
//     var number = 50;
//     return number
// }

// function usuarioValido() {
//     if (obtenerIDUsario > 30) {
//         false
//     } else {
//         true
//     }
// }

// var elUsuarioEsValido = usuarioValido();

// if (elUsuarioEsValido) {
//   console.log('El usuario es válido');
// } else {
//   console.log('El usuario no es válido');
// }

//Ejercicio 10
// var firstName = 'Ada';
// var lastName = 'Lovelace';

// function mostrarNombreCompleto(nombre, apellido) {
//   console.log(nombre + " "+ apellido);
// };

// mostrarNombreCompleto(firstName, lastName); 

// function obtenerNombreCompleto(nombre, apellido) {
//     return nombre +  " " + apellido;
// }

// console.log(obtenerNombreCompleto(firstName, lastName));

//Ejercicio 11
// function returnString(str) {
//     return str;
//   }

//   function sum(a, b) {
//     var suma = a + b;
//      return suma
//   }

//   function res(a, b) {
//     var resta = a - b;
//     return resta
//   }

//   function mul(a, b) {
//     var mult = a * b;
//      return mult
//   }

//   function div(a, b) {
//     var div = a / b;
//     return div
//   }


//   console.log( returnString('Ada') === 'Ada' );
//   console.log( sum(2, 2) === 4 );
//   console.log( sum(5, -9) === -4 );
//   console.log( res(4, 3) === 1 );
//   console.log( res(2, 9) === -7 );
//   console.log( mul(3, 4) === 12 );
//   console.log( mul(-2, -5) === 10 );
//   console.log( div(6, 3) === 2 );
//   console.log( div(15, 3) === 5 );

//Ejercicio 12
// function sonIguales(a, b) {
//     if (a === b) {
//         return true
//     } else {
//         return false
//     }
// };

// function tienenLaMismaLongitud(str1, str2) {
//     if (str1.length === str2.length) {
//         return true
//     } else {
//         return false
//     }
// };

// function esMenorQueNoventa(num) {
//     if (num < 90) {
//         return true
//     } else {
//         return false
//     }
// };

// function esMayorQueCincuenta(num) {
//     if (num > 50) {
//         return true
//     } else {
//         return false
//     }
// };

// function obtenerResto(a, b) {
//     var resto = a % b;
//     return resto
// };

// function esPar(num) {
//     if (num % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// };

// function esImpar(num) {
//     if (num % 2 != 0) {
//         return true
//     } else {
//         return false
//     }
// };


// console.log(sonIguales('Ada', 'ada') === false);
// console.log(sonIguales('Ada', 'Ada') === true);

// console.log(tienenLaMismaLongitud('ada', 'Ada') === true);
// console.log(tienenLaMismaLongitud('ada', 'Grace') === false);

// console.log(esMenorQueNoventa(45) === true);
// console.log(esMenorQueNoventa(115) === false);
// console.log(esMenorQueNoventa(90) === false);

// console.log(esMayorQueCincuenta(90) === true);
// console.log(esMayorQueCincuenta(45) === false);
// console.log(esMayorQueCincuenta(50) === false);

// console.log(esPar(5) === false);
// console.log(esPar(116) === true);
// console.log(esPar(0) === true);
// console.log(esPar(-4) === true);

// console.log(esImpar(50) === false);
// console.log(esImpar(3) === true);
// console.log(esImpar(-5) === true);
// console.log(esImpar(4) === false);

//Ejercicio 13
// function exclamar(str) {
//     return "¡" + str + "!";
// }

// function unirNombre(nombre, apellido) {
//     return nombre + " " + apellido
// }

// function saludar(nombre) {
//     return "¡Hola " + nombre + "!";
// }

// console.log(exclamar('hola') === '¡hola!');
// console.log(exclamar('hola, mundo') === '¡hola, mundo!');

// console.log(unirNombre('Ada', 'Lovelace') === 'Ada Lovelace');
// console.log(unirNombre('Grace', 'Hopper') === 'Grace Hopper');

// console.log(saludar('Ada') === '¡Hola Ada!');
// console.log(saludar('Grace') === '¡Hola Grace!');

//Ejercicio 14
// function obtenerPrimerElemento(array) {
//     return array[0];
// }

// var peliculasBatman = ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"];

// var numerosPares = [0, 2, 4, 6, 8, 10, 12];

// console.log( obtenerPrimerElemento(peliculasBatman) ); // "Batman Begins"
// console.log( obtenerPrimerElemento(numerosPares) ); // 0

//Ejercicio 15
// function obtenerUltimoElemento(array) {
//     return array[array.length - 1];
// }


// var peliculasBatman = ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"];

// var numerosPares = [0, 2, 4, 6, 8, 10, 12];

// console.log( obtenerUltimoElemento(peliculasBatman) ); // "The Dark Knight Rises"
// console.log( obtenerUltimoElemento(numerosPares) ); // 12

//Ejercicio 16
// function calcularSumatoria(array) {
//     var suma = 0;
//     for(var i = 0; i < array.length; i++) {
//         suma += array[i];
//     }
//     return suma
// }

// var numeros = [7, 4, 1, 8, 9, 4, 9];

// console.log(calcularSumatoria(numeros)); // 42

//Ejercicio 17
// function calcularSumatoria(array) {
//     var suma = 0;
//     for(var i = 0; i < array.length; i++) {
//         suma += array[i];
//     }
//     return suma
// }

// function calcularPromedio(array){
//     var promedio = calcularSumatoria(array) / array.length
//     return promedio
// }

// var numeros = [7, 4, 1, 8, 9, 4, 9];

// console.log(calcularPromedio(numeros)); // 6

//Ejercicio 18 
// var masNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];
// var numerosPares = [];
// var numerosImpares = [];

// function esPar(i) {
//     if (i % 2 === 0) {
//         numerosPares.push(i);
//     } else {
//         numerosImpares.push(i)
//     }
// };

// for(var i = 0; i < masNumeros.length ; i++) {
   
//     esPar(masNumeros[i]);
    
// }

// console.log("pares: ", numerosPares);
// console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

//Ejercicio 19
// function compararNumeros(numero1, numero2) {
//     if (numero1 < numero2) {
//         return -1
//     } else if
//         (numero2 < numero1) {
//         return 1
//     } else {
//         return 0
//     }
// }


// console.log(compararNumeros(1, 5) < 0); // true
// console.log(compararNumeros(5, 1) > 0); // true
// console.log(compararNumeros(1, 1) === 0); // true

//Ejercicio 20

// function compararNumeros(numero1, numero2) {
//     if (numero1 < numero2) {
//         return "El número " + numero1 + " es más grande que " + numero2
//         } else if
//         (numero2 < numero1) {
//             return "El número " + numero2 + " es más grande que " + numero1
//     } else {
//         return "Los dos numeros son iguales"
//     }
// }

// function mostrarElNumeroMasGrande (numero1, numero2){
//     return compararNumeros(numero1,numero2)
// }


// console.log( mostrarElNumeroMasGrande(1, 5) ); // El número 5 es más grande que 1
// console.log( mostrarElNumeroMasGrande(63, 27) ); // El número 63 es más grande que 27
// console.log( mostrarElNumeroMasGrande(1, 1) ); // Los dos números son iguales