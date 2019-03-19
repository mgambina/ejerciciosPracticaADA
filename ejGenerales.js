//Ejercicio 100

// var linea = "*****";

// for (var i = 0; i < 5; i++) {
//         console.log(linea);
// }

//Ejercicio 101

//Primer intento

// var linea = "*****";
// var lineaInc = "";

// console.log(linea);

// for (var i = 0; i < 5; i++) {

//         if (i === 0) {
//             lineaInc += "*";
//         } else if (i === 4) {
//             lineaInc += "*";
//         } else {
//             lineaInc += " ";
//         }
//    }

// for (j = 0; j < 2; j++) {
//     console.log(lineaInc);
// }

// console.log(lineaInc);
// console.log(linea);

//Segundo intento
// var linea = "*****";

// for (var i = 0; i < 5; i++) {

//     lineaInc = "";

//     if (i === 0 || i === 4) {
//         console.log(linea);
//     } else {
//         for (var j = 0; j < 5; j++) {

//             if (j === 0) {
//                 lineaInc += "*";
//             } else if (j === 4) {
//                 lineaInc += "*";
//             } else {
//                 lineaInc += " ";
//             }
//         }
//         console.log(lineaInc);
//     }

//     }

//Version Tomi
// var tamanoCuadrado = 5;
// var linea;

// for (var fila = 0; fila < tamanoCuadrado; fila++) {
//     linea = "";
//     for (var columna = 0; columna < tamanoCuadrado; columna++) {
//         if (fila === 0 || fila === tamanoCuadrado - 1) {
//             linea += "*";
//         } else {
//             //linea += columna === 0 || columna === tamanoCuadrado -1 ? "*" : " ";
//             // primero resuelve esto --> columna === 0 || columna === tamanoCuadrado -1 ? "*" : " "; y despues hace la parte de linea += con el resultado ant
//             if (columna === 0 || columna === 4) {
//                 linea += "*";
//             } else {
//                 linea += " ";
//             }
//         }
//     }

//     console.log(linea);
// }

//Ejercicio 102
// var largo = 8;
// var linea = "";

// for ( var i = 0; i < largo -1; i++ ) {
//      linea += " * ";
// }

// for ( var fila = 0; fila < largo; fila++) {
//       if ( fila % 2 === 0 ) {
//           console.log(linea + " * ");
//       } else {
//    console.log(" " + linea);
//   }
// }

//Ejercicio 104
// var n = 10;
// var m = 26;
// var resultado = 0;

// for (var i= 10; i <= m; i++) {
//     if ( i % 2 === 0) {
//     resultado += i;
//     }
// }

// console.log(resultado);
// deberia mostrar 162
// porque: 10 + 12 + 14 + 16 + 18 + 20 + 22 + 24 + 26