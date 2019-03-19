//Ejercicio 0
// var womenInTech = ["Ada Lovelace", "Grace Hopper", "Annie Easley", "Mary Allen Wilkes", "Williamina Fleming"];
// var arrayDeNumeros = [1,2,3,4,5];

// console.log(womenInTech);
// console.log(arrayDeNumeros);

//Ejercicio 1
// var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood'];

// console.log(playlistFoo[1]);
// console.log(playlistFoo[4]);

//Ejercicio 2
// var bandas = ["Coldplay", "Attaque 77", "Ska-P", "Agustin Donati", "La Vela Puerca", "Eddie Vedder", "Molotov", "The Killers", "The Beatles", "Reincidentes"];
// var primerElemento = bandas[0];
// var tercerElemento = bandas[2];
// var sextoElemento = bandas[5];

// console.log("La banda en primer lugar es:", primerElemento);
// console.log("La banda en tercer lugar es:", tercerElemento);
// console.log("La banda en sexto lugar es:", sextoElemento);

//Ejercicio 3
// var notas = [1,2,4,3,6,6,7,8,3,10,10,9];
// var suma = notas[0] + notas [3] + notas[4] + notas[notas.length - 1];

// console.log(suma);

//Ejercicio 4
// var datos = [27, true, 'La edad de la persona es: '];

// if (datos[1] === true) {
//     console.log(datos[2],datos[0]);
// }

//Ejercicio 5
// var alumnas = [];
// alumnas[0] = "Ceci";
// alumnas[1] = "Pau";
// alumnas[2] = "Nani";
// alumnas[3] = "Sofi";
// alumnas[4] = "Mari";
// alumnas[5] = "Anto";

// for (i = 0; i < alumnas.length; i++) {
//     console.log("Indice", i,":", alumnas[i]);
// }

//Ejercicio 6
// var discoNervermind = ["Smells Like Teen Spirit", "In Bloom", "Come as you are", "Immodium", "Lithium", "Polly", "Territorial Pissings", "Drain you", "Lounge Act", "Pay to play", "On a plain", "Tim"];

// discoNervermind[3] = "Breed";
// discoNervermind[9] = "Stay away";
// discoNervermind[discoNervermind.length - 1] = "Something in the way";

// console.log(discoNervermind);

//Ejercicio 7
// var peliculas = ["Superman", "Batman Begins", "The dark Knight", "Man of Steel", "The Dark Knight Rises", "The Batman"];
// var peliculasBatman = [];

// peliculasBatman.push(peliculas[1], peliculas[2], peliculas[4], peliculas[5]);

// console.log(peliculas);
// console.log(peliculasBatman);

//Ejercicio 8
// var etiquetasHTML = ["body", "html", "button", "div", "header", "li", "ul", "ol"];

// console.log(etiquetasHTML[1].toUpperCase());
// console.log(etiquetasHTML[4].toLowerCase());
// console.log(etiquetasHTML.length);

//Ejercicio 9
// var ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];

// console.log(ganadorasRupaul[0])
// console.log(ganadorasRupaul[ganadorasRupaul.length - 1]);

//Ejercicio 10
// var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
// var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

// if (playlistNirvana.length > playlistFoo.length) {
//     console.log("La playlist de Nirvana tiene más canciones");
// } else {
//     console.log("La playlist de Foo Fighters tiene más canciones");
// }

//Ejercicio 11
// var frutas = ['Manzana', 'Banana'];

// frutas.shift();
// frutas.unshift("Sandia");

// console.log(frutas);

//Ejercicio 12
// var concreteAndGold = [];
// concreteAndGold.push("T-Shirt", "Run", "Make It Right", "The Sky Is a Neighborhood","La Dee Da", "Dirty Water", "Arrows", "Happy Ever After (Zero Hour)", "Sunday Rain", "The Line", "Concrete and Gold");

// console.log(concreteAndGold[0]);
// console.log(concreteAndGold[concreteAndGold.length - 1]);
// console.log(concreteAndGold);

//Ejercicio 13 - exactamente igual al 12

//Ejercicio 14
// var numeros = [6, 1, 2, 3, 4, 5];
// numeros.push((numeros.shift()));
// console.log(numeros);

//Ejercicio 15
// var numeros = [6, 2, 3, 4, 5, 1];
// var primerElemento = numeros.shift();
// var ultimoElemento = numeros.pop();

// numeros.push(primerElemento);
// numeros.unshift(ultimoElemento);

// console.log(numeros);

//Ejercicio 16
// var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
// var playlistEscuchada = ['School'];

// playlistEscuchada.push(playlist.shift());

// console.log(playlist);
// console.log(playlistEscuchada);

// Ejercicio 17
// var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

// playlist.forEach(function(song) {
//     console.log(song);
// });

// playlist.reverse();

// playlist.forEach(function(song) {
//     console.log(song);
// });

//Ejercicio 18
// var womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Parisa Tabriz"];

// womenInTech.sort();
// console.log(womenInTech);

// womenInTech.reverse();
// console.log(womenInTech);

// console.log(womenInTech.join(" - "));

//Ejercicio 19
// var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
// var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly']

// var playlistCompleta = playlistNirvana.concat(playlistFoo);

// console.log(playlistNirvana[0]);
// console.log(playlistNirvana[1]);
// console.log(playlistNirvana[2]);
// console.log(playlistNirvana[3]);
// console.log("aca termina la primer impresion");
// var i = 0;

// while (i < playlistFoo.length) {
//     console.log(playlistFoo[i]);
//     i++;
// }
// console.log("aca termina la segunda impresion");

// for (var j = 0; j < playlistCompleta.length; j++) {
//     console.log(playlistCompleta[j])
// }

// console.log("aca termina la tercer impresion");

//Ejercicio 20
// var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];


// // completar las dos asignaciones de abajo
// var indiceLithium = playlist.indexOf("Lithium");
// var indiceOnAPlain = playlist.indexOf("On a plain");

// console.log("El índice de la canción Lithium es:");
// console.log(indiceLithium); // deberia mostrar 3
// console.log("El índice de la canción On a Plain es:");
// console.log(indiceOnAPlain); // deberia mostrar -1

//Ejercicio 21
// var ganadorasRupaul = ["Tyra Sanchez", "Chad Michaels", "Raja", "Trixie Mattel", "Aquaria", "Bebe Zahara Benet", "Sharon Needles", "Jinkx Monsoon", "Alaska Thunderfuck 5000", "Bianca Del Rio", "Violet Chachki", "Bob the Drag Queen", "Sasha Velour"];

// // completar el código para el primero punto
// var posicionSharonNeedles = ganadorasRupaul.indexOf("Sharon Needles");
// // si Latrice Royale está en el array de ganadoras, asignamos TRUE... si no está, asignamos FALSE
// var latriceRoyaleGano = ganadorasRupaul.indexOf("Latrice Royale");

// console.log("Sharon Needles es la ganadora número:");
// console.log(posicionSharonNeedles); // deberia mostrar 5

// if (latriceRoyaleGano != -1) {
//   console.log("Latrice Royale fue ganadora de RuPaul's Drag Race");
// } else {
//   console.log("Latrice Royale NO fue ganadora de RuPaul's Drag Race");
// }
// // deberia mostrar "Latrice Royale NO fue ganadora de RuPaul's Drag Race"

//Ejercicio 22
// var womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Bill Gates"];

// womenInTech.pop();
// womenInTech.push("Parisa Tabriz");

// console.log(womenInTech);

// // completar las cuatro asignaciones de abajo
// var longitud = womenInTech.length;
// var enLaPosicion3 = womenInTech[2];

// console.log("La longitud del array es:");
// console.log(longitud);
// console.log("En la posición 3 está:");
// console.log(enLaPosicion3);

// // utilizar un for para mostrar cada nombre del array
// for( var i = 0; i < womenInTech.length; i++) {
//     console.log(womenInTech[i]);
// }

//Ejercicio 23 - INCOMPLETO
// var womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Parisa Tabriz"];
// var nombresSeparadosPorGuion = womenInTech.toString();

// console.log(nombresSeparadosPorGuion);
// deberia mostrar "Ada Lovelace - Hedy Lamarr - Grace Hopper - Radia Perlman - Janie Tsao - Sheryl Sandberg - Susan Kare - Parisa Tabriz"

//Ejercicio 24
// var numbers = [6, 1, 34, 94, 3, 17];
// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// console.log(sum);
// // deberia mostrar 155

// Ejercicio 25
// var notasDeTPs = [4, 7, 8, 5, 10];
// var notaFinal = 0;

// for (var i = 0; i < notasDeTPs.length; i++) {
//     notaFinal += notasDeTPs[i];
// }

// notaFinal = notaFinal / notasDeTPs.length;

// console.log(notaFinal);
// deberia mostrar 6.8

//Ejercicio 26
// var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
// var numerosPares = [];
// var numerosImpares = [];

// for (var i = 0; i < masNumeros.length; i++) {
//     if (masNumeros[i] % 2 === 0) {
//         numerosPares.push(masNumeros[i]);
//     } else {
//         numerosImpares.push(masNumeros[i]);
//     }
// }

// console.log("pares: ", numerosPares);
// console.log("impares: ", numerosImpares);
// // deberias tener como resultado
// // pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// // impares: [43, 11, 37, 29, 9, 3, 37, 25]

//Ejercicio 27
// var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

// playlist.forEach(function(song){
// console.log(song);
// });

//Ejercicio 28
// var librosDeJS = [
//     'JavaScript for Kids: A Playful Introduction to Programming',
//     'Composing Software',
//     'Eloquent JavaScript: A Modern Introduction to Programming',
//     'JavaScript: The Good Parts',
//     'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
//     'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
//     'JavaScript: The Definitive Guide',
//     'You Don’t Know JS',
//     'JavaScript Allongé: The Six Edition'
//   ];
  
// var totalLibros = 0;

//   librosDeJS.forEach(function(books) {
//       totalLibros += 1;
//   });
  
//   console.log('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros');
 
//Ejercicio 29
// var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];


// playlist.forEach(function (song, i) {
// song.toString();
// console.log(i + " - " + song)
// });


// resultado esperado
// 0 - Concrete and Gold
// 1 - The Line
// 2 - Sunday Rain
// 3 - Happy Ever After (Zero Hour)
// 4 - Arrows
// 5 - Dirty Water
// 6 - La Dee Da
// 7 - The Sky Is a Neighborhood
// 8 - Make It Right
// 9 - Run
// 10 - T-Shirt

//Ejercicio 30
// var numbers = [6, 1, 34, 94, 3, 17];
// var sum = 0;

// numbers.forEach(function (item) {
//  sum += item;
// });

// console.log(sum);
// deberia mostrar 155

//Ejercicio 31
// var notasDeTPs = [4, 7, 8, 5, 10];
// var notaFinal = 0;
 
// notasDeTPs.forEach( function (grade) {
//     notaFinal += grade;

// });

// notaFinal = notaFinal / notasDeTPs.length;

// console.log(notaFinal);
// deberia mostrar 6.8

//Ejercicio 32
// var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
// var numerosPares = [];
// var numerosImpares = [];

// masNumeros.forEach(function (item) {
//  if( item % 2 === 0) {
//      numerosPares.push(item)
//  } else {
//      numerosImpares.push(item)
//  }
// });

// console.log("pares: ", numerosPares);
// console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

//Ejercicio 33
// var valores = [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ];
// var dobles = [];

// valores.forEach( function (valor) {
// dobles.push(valor * 2);
// });

// console.log("valores: ", valores);
// console.log("dobles: ", dobles);
// deberias tener como resultado
// valores:  [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ]
// dobles:  [ 12, 0, 10, 4, 6, 16, 14, 8, 2, 18 ]

//Ejercicio 34
// var numeros = [1, 2, 3, 4, 5];

// var numerosMasDiez;

// numerosMasDiez = numeros.map(function (item) {
//     return item + 10;
// });


// console.log(numeros); // [1, 2, 3, 4, 5]
// console.log(numerosMasDiez); // [11, 12, 13, 14, 15]

// //Ejercicio 35
// var numeros = [3, 7, 13, 99];

// var dobles = numeros.map( function (item) {
// return item * 2;
// });


// console.log(numeros); // [3, 7, 13, 99]
// console.log(dobles); // [6, 14, 26, 198]

//Ejercicio 36
// var frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// var frasesExclamadas = frases.map( function (item) {
//  return item + "!";
// });


// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

//Ejercicio 37

// var librosDeJS = [
//     'JavaScript for Kids: A Playful Introduction to Programming',
//     'Composing Software',
//     'Eloquent JavaScript: A Modern Introduction to Programming',
//     'JavaScript: The Good Parts',
//     'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
//     'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
//     'JavaScript: The Definitive Guide',
//     'You Don’t Know JS',
//     'JavaScript Allongé: The Six Edition'
//   ];
  
//   var li = librosDeJS.map (function (libro) {
//     return "<li>" + libro + "</li>";
//   });

//   console.log("<ul>" + li + "</ul>");
  
  
  // el resultado final debería ser
  // <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>

//Ejercicio 38
// var frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// var longitudes = frases.map( function (item) {
//     return item.length
// })


// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(longitudes); // [ 17, 18, 16 ]

//Ejercicio 39
// var playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

// var orden = playlist.map (function (item, index) {
// return index + " - " + item;

// });

// console.log(orden);

// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]

//Ejercicio 40
// var costos = [ 12.5, 56, 98, 45.75 ];

// var sumarGanancia = costos.map (function (costo) {
//   return costo * 1.5;
// });

// var agregarIVA = sumarGanancia.map (function (ganancia) {
//     return ganancia * 1.21;
//   });

// preciosFinales = agregarIVA;

// console.log(preciosFinales);
// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]

//Ejercicio 41 - INCOMPLETO
// var productos = [ 'celular', 'notebook', 'monitor' ];
// var costos = [ 12.5, 56, 98 ];

// var sumarGanancia = costos.map (function (costo) {
//     return costo * 1.5;
//   });

// var agregarIVA = sumarGanancia.map(function (ganancia) {
//   return ganancia * 1.21;
// });

// var i = 0;
// var preciosFinales = agregarIVA.map(function (item){
//     return productos[i] + " " + item;
// });

// console.log(preciosFinales);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]

//Ejercicio 42
// var costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];
// var losMasCaros = costos.filter(function(precio){
//     return precio > 50;
// });

// console.log(costos);
// console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]

//Ejercicio 43

// var frases = [
//     'Ut vero.',
//     'Gubergren labore clita et duo accusam diam dolor. Ipsum nonumy et labore kasd lorem takimata ea sed dolor. Kasd no.',
//     'Diam rebum nonumy et.',
//     'Kasd stet.',
//     'Sit et dolor.',
//     'Est diam justo gubergren dolores et vero.',
//     'Et sanctus sanctus et dolor clita.',
//     'Dolores.',
//     'Diam sea takimata voluptua ipsum labore voluptua kasd. At consetetur dolore diam.'
//   ];
  
//   var frasesCortas = frases.filter(function(frase) {
//       return frase.length < 20;
//   });
  
//   console.log(frasesCortas);
  // deberia mostrar
  // [ 'Ut vero.', 'Kasd stet.', 'Sit et dolor.', 'Dolores.' ]

  //Ejercicio 44
// var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// var numerosPares = masNumeros.filter(function(par) {
// return par % 2 === 0;
// });

// var numerosImpares = masNumeros.filter(function(impar) {
//     return impar % 2 != 0;
//     });

// console.log("pares: ", numerosPares);
// console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

//Ejercicio 45
// var mix = [
//     'Ut vero.',
//     2,
//     function () { console.log('hola mundo!') },
//     56,
//     'Diam rebum nonumy et.',
//     true,
//     false,
//     'Kasd stet.',
//     'Sit et dolor.',
//     null,
//     null,
//     [ 1, 2, 3],
//     'Dolore.'
//   ];
  
//   var soloStrings = mix.filter(function(tipo) {
//     return typeof tipo === "string";
//   });
  
//   console.log(soloStrings);
  // deberia mostrar
  // [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]

//Ejercicio 46
// var playlist = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'];
// var playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']

// var playlistSinEscuchar = playlist.filter(function (song) {
//     return playlistEscuchada.indexOf(song) === -1;
// });


// console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]

//Ejercicio 47
// var numbers = [6, 1, 34, 94, 3, 17];
// var sum = 0;

// sum = numbers.reduce(function (sum, number) {
//     return sum + number;
// });

// console.log(sum);
// deberia mostrar 155

//Ejercicio 48
// var numbers = [6, 1, 34, 94, 3, 17];
// var mul = 0;

// mul = numbers.reduce(function (mul, number) {
//     return mul * number;
// });

// console.log(mul);
// deberia mostrar 977976

//Ejercicio 49
// var notasDeTPs = [4, 7, 8, 5, 10];
// var notaFinal = 0;

// notaFinal = notasDeTPs.reduce(function (notaFinal, nota) {
//     return notaFinal + nota;
// });

// notaFinal = notaFinal / notasDeTPs.length;

// console.log(notaFinal);
// deberia mostrar 6.8

//Ejercicio 50 - VER

//Ejercicio 51
// var numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];

// var sinRepetidos = numeros.filter(function(numero) {
//     return numeros.indexOf(numero) != -1;
// });

// console.log(sinRepetidos);
// deberia mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]

//Ejercicio 52
// var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// var numerosPares = [];

// var checkPares = masNumeros.reduce(function(total, item){
//   if (item % 2 === 0) {
//     numerosPares.push(item);
//   };
// });

// console.log("pares: ", numerosPares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]

//Ejercico 53
// var masNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// var numerosImpares = [];

// var checkImpares = masNumeros.reduce(function(total, item){
//   if (item % 2 != 0) {
//     numerosImpares.push(item);
//   };
// });

// console.log("impares: ", numerosImpares);
// deberias tener como resultado
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

//Ejercicio 54
// var costos = [ 12.5, 56, 98];

// var sumarGanancia = costos.map (function (costo) {
//   return costo * 1.5;
// });

// var agregarIVA = sumarGanancia.map (function (ganancia) {
//     return ganancia * 1.21;
//   });

// precioTotal = agregarIVA.reduce(function(total, item){ 
//     return total + item;
// });


// console.log(precioTotal); // 302.1975

//Ejercicio 55
// var datos = [2, -4, 6, 0, 5, -1];

// var positivos = [];

// var eliminarNegativos = datos.filter(function(item){
//   if(item > 0) {
//     return positivos.push(item);
//   }
// });

// var dobles = positivos.map(function(item){
//   return item * 2;
// });

// var total = dobles.reduce(function(total,item){
//   return total + item;
// });

// console.log(total); // 26

//Ejercicio 56 //Exite un metodo que se llama .flat() pero no funciona para todos los navegadores
var arrays = [
  [1, 2, 3],
  [4],
  [5, 6],
  [],
  [7]
];

// codear acá la solución del ejercicio
var flattenArray = arrays.flat();

console.log(flattenArray); // [ 1, 2, 3, 4, 5, 6, 7 ]