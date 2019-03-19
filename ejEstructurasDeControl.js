//Ejercicios estructuras de control

//Ejercicio 49
// var numero1 = 10;
// var numero2 = 5;

// if(numero1 > numero2) {
//     console.log("La variable numero1 es más grande que la variable numero2")
// };

//Ejercicio 50
// var numero = 10;
// if (numero % 2 == 0) {
//     console.log("El numero es par")
// };

//Ejercicio 51 hecho en clase

//Ejercicio 52
// var numero1 = 10;
// var numero2 = 5;

// if(numero1 > numero2) {
//     console.log("La variable numero1 es más grande que la variable numero2")
// } else {
//     console.log("La variable numero1 no es más grande que la variable numero2");
// };

//Ejercicio 53
// var numero = 10;
// if (numero % 2 == 0) {
//     console.log("El numero es par")
// } else {
//     console.log("El numero no es par");
// };

//Ejercicio 54 hecho en clase

//Ejercicio 55
// var numero1 = 10;
// var numero2 = 5;

// var resultado = (numero1 > numero2)? "La variable numero1 es más grande que la variable numero2" : "La variable numero1 no es más grande que la variable numero2";

// console.log(resultado);

//Ejercicio 56
// var numero = 11;
// var resultado = (numero % 2 === 0)? "El numero es par" : "El numero no es par";

// console.log(resultado);

//Ejercicio 57
// var user = "ada2019";
// var password = "12345";


// var usuarioOk = (user === "ada2019" && password === "12345") ? "El usuario esta autenticado y puede ver el contenido del sitio" : "Error, no se pudo autenticar al usuario, puede intentarlo más tarde"; 
// console.log(usuarioOk);

//Ejercicio 58
// var hora = 19;

// if( hora < 12 && hora > 5) {
//     console.log("Buen dia");
// } else if (hora >= 12 && hora < 20) {
//     console.log("Buenas Tardes");
// } else {
//     console.log("Buenas noches");
// }

//Ejercicio 59
// var numero1 = 3;
// var numero2 = 6;

// if (numero1 === numero2) {
//     console.log("los dos numeros son iguales");
// } else if (numero1 > numero2) {
//     console.log("La variable1",numero1, "es más grande que la variable2", numero2)
// } else {
//     console.log("La variable2", numero2, "es más grande que la variable1", numero1);
// }

//Ejercicio 60
// var nota = 9;

// if(nota >= 9) {
//     console.log("La alumna aprobo y es muy buena");
// } else if (nota < 9 && nota >= 6) {
//     console.log("La alumna aprobo");
// } else {
//     console.log("La alumna no aprobó y debe hacer los ejercicios de nuevo.")
// }

//Ejercicio 61
// var dia = 6;
// var nombreDelDia = null;

//Version SWTICH

// if (dia >= 1 && dia <= 7) {
//     console.log(nombreDelDia);
// } else {
//     console.log("No ingresaste un numero valido");
// }

// switch (dia) {
//     case 1:
//     nombreDelDia = "Lunes";
//     break;
//     case 2:
//     nombreDelDia = "Martes";
//     break;
//     case 3:
//     nombreDelDia = "Miercoles";
//     break;
//     case 4:
//     nombreDelDia = "Jueves";
//     break;
//     case 5:
//     nombreDelDia = "Viernes";
//     break;
//     case 6:
//     nombreDelDia = "Sabado";
//     break;
//     case 7:
//     nombreDelDia = "Domingo";
//     break;
//     default:
//     nombreDelDia = null;
// }

// console.log("El dia seleccionado es", nombreDelDia);

//Version IF/ELSE/IF

// var dia = 0;
// var nombreDelDia = null;

// if (dia >= 1 && dia <= 7) {
//         if (dia === 1) {
//             console.log("El dia seleccionado es lunes");
//         } else if (dia === 2) {
//             console.log("El dia seleccionado es martes");
//         } else if (dia === 3) {
//             console.log("El dia seleccionado es miercoles");
//         } else if (dia === 4) {
//             console.log("El dia seleccionado es jueves");
//         } else if (dia === 5) {
//             console.log("El dia seleccionado es viernes");
//         } else if (dia === 6) {
//             console.log("El dia seleccionado es sabado");
//         } else {
//             console.log("El dia seleccionado es domingo");
//         }

//     } else {
//         console.log("No ingresaste un numero valido");
// }

//Ejercicio 62
// var numeroDeMes = 7;
// var nombreDelMes = null;
// var cantidadDeDias = null;

// switch(numeroDeMes){
//     case 1:
//     nombreDelMes = "Enero";
//     cantidadDeDias = 31;
//     break;
//     case 2:
//     nombreDelMes = "Febrero";
//     cantidadDeDias = 28;
//     break;
//     case 3:
//     nombreDelMes = "Marzo";
//     cantidadDeDias = 31;
//     break;
//     case 4:
//     nombreDelMes = "Abril";
//     cantidadDeDias = 30;
//     break;
//     case 5:
//     nombreDelMes = "Mayo";
//     cantidadDeDias = 31;
//     break;
//     case 6:
//     nombreDelMes = "Junio";
//     cantidadDeDias = 30;
//     break;
//     case 7:
//     nombreDelMes = "Julio";
//     cantidadDeDias = 31;
//     break;
//     case 8:
//     nombreDelMes = "Agosto";
//     cantidadDeDias = 31;
//     break;
//     case 9:
//     nombreDelMes = "Septiembre";
//     cantidadDeDias = 30;
//     break;
//     case 10:
//     nombreDelMes = "Octubre";
//     cantidadDeDias = 31;
//     break;
//     case 11:
//     nombreDelMes = "Noviembre";
//     cantidadDeDias = 30;
//     break;
//     case 10:
//     nombreDelMes = "Diciembre";
//     cantidadDeDias = 31;
//     break;
//     default:
//     nombreDelMes = null;
//     cantidadDeDias = null;

// }

// if(nombreDelMes === null && cantidadDeDias === null) {
//     console.log("Ingrese un número entre 1 y 12")
// } else {
//     console.log("El mes seleccionado es " + nombreDelMes + " y tiene " + cantidadDeDias + " de días")
// };

//Ejercicio 63 no existe (vacio)

//Ejercicio 64
// var nombre = null;

// if (nombre != null) {
//     console.log("El nombre de usuario es ", nombre);
// } else {
//     console.log("Por favor ingrese un nombre");
// };

//Ejercicio 65
// var saldo = 70;

// if(saldo === 0) {
//     console.log("el usuario no tiene saldo a favor")
// } else {
//     console.log("el usuario tiene", saldo, "pesos a favor");
// }

//Ejercicio 66
// i = 0;

// while (i >= 0 && i<= 10) {
//     console.log(i);
//     i++;
// }

//Ejercicio 67
// i = 100;

// while (i <= 100 && i>= 00) {
//     console.log(i);
//     i--;
// }

//Ejercicio 68

// var i = 0;

// while (i <= 1000) {
//     console.log(i);
//     i += 2;
// }

//Ejercicio 69
// var numero = 0;
// var sumaParcial = 0;

// while (numero <= 1000) {
//     sumaParcial += numero;
//     console.log(sumaParcial);
//     numero++;
// }

//Ejercicio 70
// var numero = 1;
// var sumaParcial = 0;

// while (numero <= 1000) {
//     sumaParcial += numero;
//     console.log(sumaParcial);
//     numero += 2;
// }

//Ejercicio 71
// var numero = 1;
// var resultado = null;

// while (numero <= 10) {
//     resultado =+ numero * 9;
//     console.log("9 x", numero, "da como resultado", resultado);
//     numero++;
// }

//Ejercicio 72
// var numero = 1;
// var linea = "";

// while (numero <= 13) {
//     linea += "*";
//     console.log(linea);
//     numero++;
// }

//Ejercicio 73 

// var numero = 0;
// var linea = "*************";

// while (numero < linea.length) {
//   var substring = linea.substring(numero);
//   console.log(substring, substring.length)
//   numero++;
// }

//Ejercicio 73 - Version Male con otro metodo
// var estrellita = "*************";
// var contador = 5;
// var acumulado = "";

// while(contador > 0) {
//     acumulado = estrellita.slice(0, contador);
//     console.log(acumulado);
//     contador--;
// }

//Ejercicio 73 - Version Male con un nested while
// var a = "";
// var base = 5;
// var resta = 5;

// while (base > 0) {

//     while (resta > 0) {
//         a = a + "*";
//         resta--;
//     }

//     console.log(a, a.length);
//     resta = base - 1;
//     a = "";
//     base--;
// }

// //Ejercicio 74 

// var numero = 1;
// var items = "**";
// var linea = "*";

// while (numero <= 7) {
//     console.log(linea, linea.length);
//     linea += items;
//     numero++;
// };

//Ejercicio 75 - Fibonacci
//  0,1,1,2,3,5,8,13,21,34,55, 

// La sucesión comienza con los números 0 y 1,2​ y a partir de estos, «cada término es la suma de los dos anteriores 

// var contador = 3;
// var a = 0;
// var b = 1;
// var final = 0;

// console.log("numero 1",a);
// console.log("numero 2",b);

// while (contador <= 10) {
// final = a + b;
// a = b;
// b = final;
// console.log("numero " + contador,final);
// contador++;
// }


//Fibonacci version Male
// var a = 0;
// var b = 1;
// var c = 1;

// while (a < 10) {
//     console.log(a);
//     a = b;
//     b = c;
//     c = a + b;

// }

//Ejercicio 76

// var i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i >= 0 && i<= 10);

//Ejercicio 77

// var i = 100;

// do {console.log(i);
//     i--;
// } while (i <= 100 && i>= 00);


//Ejercicio 78

// var i = 0;

// do {
//     console.log(i);
//     i += 2;
// } while (i <= 1000);


//Ejercicio 79
// var numero = 0;
// var sumaParcial = 0;

// do {
//     sumaParcial += numero;
//     console.log(sumaParcial);
//     numero++;

// } while (numero <= 1000);

//Ejercicio 80
// var numero = 1;
// var sumaParcial = 0;

// do {
//     sumaParcial += numero;
//     console.log(sumaParcial);
//     numero += 2;
// } while (numero <= 1000);

//Ejercicio 81
// var numero = 1;
// var resultado = null;

// do { resultado =+ numero * 9;
//     console.log("9 x", numero, "da como resultado", resultado);
//     numero++;
// } while (numero <= 10);

//Ejercicio 82
// var numero = 1;
// var linea = "";

// do {
//     linea += "*";
//     console.log(linea);
//     numero++;

// } while (numero <= 13);

//Ejercicio 83
// var estrellita = "*************";
// var contador = 5;
// var acumulado = "";

// do {
//     acumulado = estrellita.slice(0, contador);
//     console.log(acumulado);
//     contador--;
// } while(contador > 0);

//Ejercicio 84
// var numero = 1;
// var items = "**";
// var linea = "*";

// do {
//     console.log(linea, linea.length);
//     linea += items;
//     numero++;

// } while (numero <= 7);

//Ejercicio 85
//  0,1,1,2,3,5,8,13,21,34,55, 

//La sucesión comienza con los números 0 y 1,2​ y a partir de estos, «cada término es la suma de los dos anteriores 

// var contador = 3;
// var a = 0;
// var b = 1;
// var final = 0;

// console.log("numero 1", a);
// console.log("numero 2", b);

// do {
//     final = a + b;
//     a = b;
//     b = final;
//     console.log("numero " + contador, final);
//     contador++;

// } while (contador <= 10);

//Ejercicio 86

// for (var i=0; i >= 0 && i<= 10; i++ ) {
//     console.log(i);
// }

//Ejercicio 87

// for (var i=100; i <= 100 && i>= 00; i--) {
//     console.log(i);
//     i--;
// }

//Ejercicio 88
// console.log("version con for");

// for (var i=0; i <= 1000; i += 2) {
//     console.log(i);
// }

//Ejercicio 89
// console.log("version con for");

// var sumaParcial = 0;

// for (var numero = 0; numero <= 1000; numero++) {
//     sumaParcial += numero;
//     console.log(sumaParcial);
// }

//Ejercicio 90
// console.log("version con for");

// var sumaParcial = 0;

// for (var numero = 1; numero <= 1000; numero +=2 ) {
//     sumaParcial += numero;
//     console.log(sumaParcial);
// }

//Ejercicio 91
//  console.log("version con for");
// var resultado = null;

// for (var numero = 1; numero <= 10; numero++) {
//     resultado =+ numero * 9;
//     console.log("9 x", numero, "da como resultado", resultado);
// }

//Ejercicio 92
// console.log("version con for");
// var linea = "";

// for (var numero = 1; numero <= 13; numero++) {
//     linea += "*";
//     console.log(linea);
// }

//Ejercicio 93
// console.log("version con for");

// var linea = "*************";

// for (var numero = 0; numero < linea.length; numero++ ) {
//     var substring = linea.substring(numero);
//     console.log(substring, substring.length)
// }

//Ejercicio 94
// console.log("version con for");

// var items = "**";
// var linea = "*";

// for (var numero = 1; numero <= 7; numero++) {
//     console.log(linea, linea.length);
//     linea += items;
// }

//Ejercicio 95
//  0,1,1,2,3,5,8,13,21,34,55, 

//La sucesión comienza con los números 0 y 1,2​ y a partir de estos, «cada término es la suma de los dos anteriores 

// console.log("version con for");

// var a = 0;
// var b = 1;
// var final = 0;

// console.log("numero 1",a);
// console.log("numero 2",b);

// for (var contador = 3; contador <= 10; contador++) {
//     final = a + b;
// a = b;
// b = final;
// console.log("numero " + contador,final);
// }


//Ejercicio 96

//Mostrar en consola los números de 10 en 10 desde el 0 hasta el 10000

// for (var i=0; i <= 1000; i += 10) {
//     console.log(i);
// }

//Ejercicio 97
//Mostrar en consola los números de 10 en 10 desde el 10000 hasta el 0
// También mostrar en consola los valores restantes

// for (var i=1000; i >= 0; i -= 10) {
//     console.log(i);
// }

// console.log("Los valores restantes son: ")

// for (var j = 1000; j > 0; j--) {

//     if (j % 10 !== 0) {
//     console.log(j);
//     }

// }

//Ejercicio 97 (BIS)
//Mostrar en consola los números desde el 1000 hasta el 0
//Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero**

// for (var i=1000; i >= 0; i -= 1) {
//     if (i % 10 === 0 && i !== 1000) {
//         console.log("**", i, "**");
//     } else {
//         console.log(i);
//     }
// }


//Ejercicio 98
// Sumar los números del 0 al 1000
// Cortar la ejecución si la suma es superior a 100
// Mostrar el resultado final en consola

// var suma = 0;

// for (var i = 0; i <= 1000; i++) {

//     suma += i;

//     if (suma + i > 100) {
//         break
//     }
       
// }

// console.log(suma);

//Ejercicio 99
//Sumar los números pares del 0 al 10000
//Cortar la ejecución al encontrar 10 números pares
//Mostrar en consola el resultado de los números hasta el momento del corte
// var suma = 0;

// for (var i = 0; i < 10000; i +=2) {
//     if (i >= 2 * 10) {
//          break;
//     } else {
//         suma += i;
//     }
// }
// console.log(suma);