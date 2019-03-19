//Ejercicio 1
// persona = {

// };

// console.log(persona);

//Ejercicio 2
// var sobreMi = {
//     nombre: "Marianela",
//     apellido: "Gambina",
//     edad: 30,
// }

// console.log(sobreMi);

//Ejercicio 3
// var user = {
//     fullname: "Milo Ventimiglia",
//     email:"mventimiglia@gmail.com",
//     age: 41,
// };

// console.log("Hola mi nombre es", user.fullname, "y tengo", user.age, "años");

//Ejercicio 4
// var song = {
//     title: 'Rock and Roll',
//     bandName: 'Led Zeppelin',
//     duration: 166000,
//     album: 'Led Zeppelin IV'
//   };

//   var cancion = {
//         title: 'Rock and Roll',
//         bandName: 'Led Zeppelin',
//         duration: song.duration * 0.001,
//         album: 'Led Zeppelin'
//   };


//   console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }

//Ejercicio 5
// var persona1 = {
//     id: 1,
//     nombre: "Ada Lovelace",
//     email: "ada@gmail.com",
//     telefono: "1234567890",
// }

// var persona2 = {
//     id: 2,
//     nombre: "Grace Hoper",
//     email: "grace@hotmail.com",
//     telefono: "0987654321",
// }

// var persona3 = {
//     id: 3,
//     nombre: "Hedy Lamarr",
//     email: "hedy@gmail.com",
//     telefono: "6789054321",
// }

// var persona4 = {
//     id: 4,
//     nombre: "Radia Perlman",
//     email: "radia@yahoo.com",
//     telefono: "1234509876",
// }

// var persona5 = {
//     id: 5,
//     nombre: "Sheryl Sandberg",
//     email: "Sheryl@facebook.com",
//     telefono: "5432167890",
// }

// console.log(persona1);
// console.log(persona2);
// console.log(persona3);
// console.log(persona4);
// console.log(persona5);

//Ejercicio 6
// var persona1 = {
//     id: 1,
//     nombre: "Ada Lovelace",
//     email: "ada@gmail.com",
//     telefono: "1234567890",
// }

// var persona2 = {
//     id: 2,
//     nombre: "Grace Hoper",
//     email: "grace@hotmail.com",
//     telefono: "0987654321",
// }

// var persona3 = {
//     id: 3,
//     nombre: "Hedy Lamarr",
//     email: "hedy@gmail.com",
//     telefono: "6789054321",
// }

// var persona4 = {
//     id: 4,
//     nombre: "Radia Perlman",
//     email: "radia@yahoo.com",
//     telefono: "1234509876",
// }

// var persona5 = {
//     id: 5,
//     nombre: "Sheryl Sandberg",
//     email: "Sheryl@facebook.com",
//     telefono: "5432167890",
// }

// // 1. El nombre de Ada:
// console.log(persona1.nombre);

// // 2. El ID de Grace
// console.log(persona2.id);

// // 3. El email de Hedy
// console.log(persona3.email);

// // 4. El ID y nombre de Radia
// console.log(persona4.id, persona4.nombre);

// // 5. El telefono de Sheryl
// console.log(persona5.telefono);

//Ejercicio 7
// var datos = {
//     id: 1,
//     nombre: 'Ada',
//     apellido: 'Lovelace',
//     email: 'ada.lovelace@gmail.com',
//     telefono: '1234567890',
//     edad: '29',
//     programa: true
//   }

//   datos.telefono = "0192837465";
//   datos.edad = 29;

//   console.log(datos);

//Ejercicio 8
// var datos = {
//     id: 1,
//     nombre: 'Ada',
//     apellido: 'Lovelace',
//     email: 'ada.lovelace@gmail.com',
//     telefono: '1234567890',
//     edad: 29,
//     programa: true
//   }

// if (datos.programa === true) {
//     datos.lenguajeFavorito = "Javascript"
// }

// console.log(datos);

// Ejercicio 9
// var datos = {
//     id: 1,
//     nombre: 'Ada',
//     apellido: 'Lovelace',
//     email: 'ada.lovelace@gmail.com',
//     telefono: '1234567890',
//     edad: 29,
//     programa: true,
//   };

// if (datos.programa === true) {
//     datos.lenguajeFavorito = ["Javascript", "C++"];
// }

// console.log("Hola, mi nombre es", datos.nombre, datos.apellido, "y programo en " + datos.lenguajeFavorito);

//Ejercicio 10
// var disco = {
//     id: 1,
//     nombre: 'Wasting Light',
//     anioLanzamiento: 2011,
//     cantidadDeTemas: 12,
//     banda: {
//       nombre: 'Foo Fighters',
//       anioFormacion: 1994
//     }
//   };

//   var nombreDisco = "Wasting Light";
//   var anioDisco = 2011;
//   var nombreBanda = "Foo Fighters";

//   console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);

//Ejercicio 11
// var user = {
//     id: 123456789,
//     name: 'Ada Lovelace',
//     url: 'https://www.linkedin.com/in/ada-lovelace',
//     skills: ['HTML', 'CSS', 'SASS']
//   };

//   user.skills.push("Javascript");

//   console.log(user);

//Ejercicio 12 

// var user = {
//     id: 123456789,
//     firstName: 'Ada',
//     lastName: 'Lovelace',
//     url: 'https://www.linkedin.com/in/ada-lovelace',
//     skills: ['HTML', 'CSS', 'SASS', 'JS']
//   };

//   var newUser = {
//     id: 123456789,
//     name: user.firstName,
//     url: 'https://www.linkedin.com/in/ada-lovelace',
//     skills: ['HTML', 'CSS', 'SASS', 'JS']
//   }

//   newUser.name = {
//       nombre: user.firstName,
//       apellido: user.lastName,
//   };

//   console.log(newUser);

//Ejercicio 13
// spotify = {
//     nombre: "Lista de Nirvana",
//     privada: true,
//     canciones: ["Smells Like Teen Spirit","In Bloom","As you are"],
// }

// if( spotify.privada === true) {
//  spotify.privada = "Si" 
// } else {
//     spotify.privada = "No" 
// }

// console.log(spotify.nombre);
// console.log("Privada:",spotify.privada);
// console.log("Canciones: ");
// console.log(spotify.canciones[0]);
// console.log(spotify.canciones[1]);

//Ejercicio 14
// var ganadoras = [
//     {
//       nombre: 'Bebe Zahara Benet',
//       temporada: '1',
//       foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
//     },
//     {
//       nombre: 'Tyra Sanchez',
//       temporada: '2',
//       foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
//     },
//     { nombre: 'Raja',
//       temporada: '3',
//       foto: 'http://www.nokeynoshade.party/images/raja.jpg'
//     },
//     {
//       nombre: 'Sharon Needles',
//       temporada: '4',
//       foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
//     },
//     {
//       nombre: 'Jinkx Monsoon',
//       temporada: '5',
//       foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
//     },
//     {
//       nombre: 'Bianca Del Rio',
//       temporada: '6',
//       foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
//     }
//   ];

//   ganadoras.forEach(function(item, i, array){
//     console.log(item.nombre, "gano la temporada ", item.temporada);
//   });

//Ejercicio 15
// var ganadoras = [
//     {
//       nombre: 'Bebe Zahara Benet',
//       temporada: '1',
//       foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
//     },
//     {
//       nombre: 'Tyra Sanchez',
//       temporada: '2',
//       foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
//     },
//     { nombre: 'Raja',
//       temporada: '3',
//       foto: 'http://www.nokeynoshade.party/images/raja.jpg'
//     },
//     {
//       nombre: 'Sharon Needles',
//       temporada: '4',
//       foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
//     },
//     {
//       nombre: 'Jinkx Monsoon',
//       temporada: '5',
//       foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
//     },
//     {
//       nombre: 'Bianca Del Rio',
//       temporada: '6',
//       foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
//     }
//   ];

// for (var i = 0; i < ganadoras.length; i++) {
//       console.log(ganadoras[i].nombre + " ganó la temporada " + ganadoras[i].temporada);
// }

///// RESULTADO
// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6

//Ejercicio 16
//   var nevermind = [
//     { id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
//     { id: 2, nombre: "In Bloom", duracion: 255 },
//     { id: 3, nombre: "Come As You Are", duracion: 219 },
//     { id: 4, nombre: "Breed", duracion: 184 },
//     { id: 5, nombre: "Lithium", duracion: 257 }
//   ];

//   var duracionTotal = 0;

//   for(var i = 0; i < nevermind.length; i++) {
//       duracionTotal += nevermind[i].duracion;
//   }

//   duracionPromedioPorCancion = duracionTotal / nevermind.length;

//   console.log(duracionTotal); // 1217
//   console.log(duracionPromedioPorCancion); // 243.4

//Ejercicio 17
// var bandas = [
//     { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
//     { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
//     { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
//     { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
//     { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
//   ];

//   for(var i = 0; i < bandas.length; i++) {
//       if (bandas[i].activa === true) {
//           console.log(bandas[i].nombre + " está activa desde el año " + bandas[i].fundacion);
//       } else {
//         console.log(bandas[i].nombre + " no esta activa")
//       }
//   }

///// RESULTADO
// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
// Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990

//Ejercicio 18
// var banda = {
//     name: 'Led Zeppelin',
//     year: 1968,
//     active: false,
//     thumbnail: 'http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75',
//     members: ['Jimmy Page', 'Robert Plant', 'John Paul Jones', 'John Bonham'],
//     albums: [
//         { name: 'Led Zeppelin', year: 1969, songs: ['Good Times, Bad Times', "Communication Breakdown"], duration: 2691 },
//         { name: 'Led Zeppelin II', year: 1969, songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"], duration: 2502 },
//         { name: 'Led Zeppelin III', year: 1970, songs: ["Immigrant Song"], duration: 2489 },
//         { name: 'Led Zeppelin IV', year: 1971, songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"], duration: 2559 },
//     ]
// };

// var duracionTotal = 0;
// var anioLanzamiento = banda.year;
// var cantidadMiembros = banda.members.length;
// var cantidadDiscos = banda.albums.length;
// var miembros = banda.members.toString().replace(/,/g, ", ");

// for (var i = 0; i < banda.albums.length; i++) {
//     duracionTotal += banda.albums[i].duration;
// }

// var cantidadTotalCanciones = 0;

// for (var j = 0; j < banda.albums.length; j++) {
//     cantidadTotalCanciones += banda.albums[j].songs.length;
// }

// var promedioDuracion = duracionTotal / cantidadTotalCanciones;

// console.log("Led Zeppelin se fundó en el año " + anioLanzamiento);
// console.log("Tiene " + cantidadMiembros + " miembros: " + miembros);
// console.log("Tiene en total " + cantidadDiscos + " discos");
// console.log("Tiene en total " + cantidadTotalCanciones + " canciones entre todos los discos.");
// console.log("En promedio, cada canción dura " + promedioDuracion + " segundos");
// ESPERADO
// Led Zeppelin se fundó en el año 1968
// Tiene 4 miembros: Jimmy Page, Robert Plant, John Paul Jones, John Bonham
// Tiene en total 4 discos
// Tiene en total 9 canciones entre todos los discos.
// En promedio, cada canción dura 1137.888888888889 segundos

//Ejercicio 19
// var propiedadNombre = "nombre";
// var propiedadEdad = "edad";

// persona = {
//     nombre: "Marianela",
//     edad: 30,
// }

// //Todos imprimen lo mismo
// console.log(persona.nombre);
// console.log(persona.edad);

// console.log(persona["nombre"]);
// console.log(persona["edad"]);

// console.log(persona[propiedadNombre]);
// console.log(persona[propiedadEdad]);

//Ejercicio 20
// var producto = {
//     id: 'ADA-020',
//     title: 'Gubergren sed est amet voluptua',
//     price: 123.75,
//     picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
//     condition: 'nuevo',
//     free_shipping: true,
//     location: 'Capital Federal'
//   };

//   var todasLasPropiedades = Object.keys(producto);

//   console.log(todasLasPropiedades);
// resultado esperado
// [ 'id',
//   'title',
//   'price',
//   'picture',
//   'condition',
//   'free_shipping',
//   'location' ]

//Ejercicio 21
//   var producto = {
//     id: 'ADA-020',
//     title: 'Gubergren sed est amet voluptua',
//     price: 123.75,
//     picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
//     condition: 'nuevo',
//     free_shipping: true,
//     location: 'Capital Federal'
//   };

//  var propiedades = Object.keys(producto);

//  for (var i=0; i < propiedades.length; i++) {
//      console.log("producto " + propiedades[i] + " -> " + producto[propiedades[i]]);
//  }

// RESULTADO ESPERADO
// producto['id'] -> ADA-020
// producto['title'] -> Gubergren sed est amet voluptua
// producto['price'] -> 123.75
// producto['picture'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
// producto['condition'] -> nuevo
// producto['free_shipping'] -> true
// producto['location'] -> Capital Federal

//Ejercicio 22 - Hecho en clase

//Ejercicio 23

// var user = {
//     username: 'ada_lovelace',
//     password: '1234567890!'
// };

// var user2 = {
//     username: 'grace_hopper',
//     password: '1234567890!',
//     email: 'grace@hopper.com'
// };

// function hasProperty(object, property) {
//     var propiedades = Object.keys(object);
//     for (var i = 0; i < propiedades.length; i++) {
//         if (propiedades[i] === property) {
//             return true
//         } 

//     }
//     return false
// }

// console.log(hasProperty(user, 'email')); // false
// console.log(hasProperty(user, 'password')); // true
// console.log(hasProperty(user, 'id')); // false

// console.log(hasProperty(user2, 'email')); // true
// console.log(hasProperty(user2, 'password')); // true
// console.log(hasProperty(user2, 'id')); // false

//Ejercicio 24

// var holaMundo = {
//     mostrarMensaje: function mostrarMensaje() {
//         console.log("¡Hola mundo!")
//     },
//     obtenerMensaje: function obtenerMensaje() {
//         return "¡Alo mundo!"
//     }
// }

// holaMundo.mostrarMensaje(); // ¡Hola mundo!
// console.log( holaMundo.obtenerMensaje() ); // ¡Alo mundo!

//Ejercicio 25
// var pelicula = {
//     titulo: 'The Dark Knight',
//     anio: 2008,
//     director: 'Christopher Nolan',
//     mostrarInfo: function mostrarInfo() {
//         console.log("Pelicula: " + pelicula.titulo + " - " + "Año: " + pelicula.anio)
//     }
//   }

//   pelicula.mostrarInfo();
// Película: The Dark Knight - Año: 2008

//Ejercicio 26
// var playlist = {
//     name: 'Rupaul Lipsyncs',
//     owner: 'Ada',
//     followers: 8743,
//     songs: [],
//     addSong: function addSong(song) {
//         playlist.songs.push(song)
//     }
//   }

//   playlist.addSong("Geronimo");
//   playlist.addSong("Sissy That Walk");
//   playlist.addSong("Cover Girl");

// console.log(playlist.songs); // [ 'Geronimo', 'Sissy That Walk', 'Cover Girl' ]

//Ejercicio 27
// var user = {
//     firstName: 'Hedy',
//     lastName: 'Lamarr',
//     age: 30,
//     getFullname: function getFullname(){
//         return user.firstName + " " + user.lastName
//     }
//   };

//   console.log(user.getFullname()); // Hedy Lamarr

//Ejercicio 28
// var user = {
//     name: {
//         first: 'Hedy',
//         last: 'Lamarr'
//     },
//     age: 30,
//     getFullname: function getFullname() {
//         return user.name.first + " " + user.name.last
//     }
// };

// console.log(user.getFullname()); // Hedy Lamarr

//Ejercicio 29

// var uno = {
//     id: 1,
//     title: "At vero elitr",
//     price: 320,
//     freeShipping: true
// }

// var dos = {
//     id: 2,
//     title: "Dolore ipsum est eos",
//     price: 230,
//     freeShipping: false
// }

// var tres = {
//     id: 3,
//     title: "Lorem sadipscing tempor",
//     price: 120.50,
//     freeShipping: true
// }

// var cuatro = {
//     id: 4,
//     title: "Duo invidunt accusamr",
//     price: 510,
//     freeShipping: false
// }

// var cinco = {
//     id: 5,
//     title: "Labore accusam eirmod.",
//     price: 125.99,
//     freeShipping: true
// }


// var shoppingCart = {
//     owner: {
//         id: 123,
//         name: 'Ada Lovelace'
//     },
//     products: [],
//     addProduct: function addProduct(item) {
//         shoppingCart.products.push(item)
//     },
//     getTotal: function getTotal() {
//         var getTotal = 0;
//         for (var i = 0; i < shoppingCart.products.length; i++) {
//             getTotal += shoppingCart.products[i].price;
//         }
//         return getTotal;
//     }
// };

// shoppingCart.addProduct(uno);
// shoppingCart.addProduct(dos);
// shoppingCart.addProduct(tres);
// shoppingCart.addProduct(cuatro);
// shoppingCart.addProduct(cinco);

// console.log(shoppingCart.getTotal()); // 1306.49

//Ejercicio 30

// var uno = {
//     id: 1,
//     title: "At vero elitr",
//     price: 320,
//     freeShipping: true
// }

// var dos = {
//     id: 2,
//     title: "Dolore ipsum est eos",
//     price: 230,
//     freeShipping: false
// }

// var tres = {
//     id: 3,
//     title: "Lorem sadipscing tempor",
//     price: 120.50,
//     freeShipping: true
// }

// var cuatro = {
//     id: 4,
//     title: "Duo invidunt accusamr",
//     price: 510,
//     freeShipping: false
// }

// var cinco = {
//     id: 5,
//     title: "Labore accusam eirmod.",
//     price: 125.99,
//     freeShipping: true
// }


// var shoppingCart = {
//     owner: {
//         id: 123,
//         name: 'Ada Lovelace'
//     },
//     products: [],
//     addProduct: function addProduct(item) {
//         shoppingCart.products.push(item)
//     },
//     getTotal: function getTotal() {
//         var getTotal = 0;

//         for (var i = 0; i < shoppingCart.products.length; i++) {
//             getTotal += shoppingCart.products[i].price;

//             if (shoppingCart.products[i].freeShipping === false) {
//                 getTotal += 120;
//             } 

//         }
//         return getTotal * 1.21;
//     }
// };

// shoppingCart.addProduct(uno);
// shoppingCart.addProduct(dos);
// shoppingCart.addProduct(tres);
// shoppingCart.addProduct(cuatro);
// shoppingCart.addProduct(cinco);

// console.log(shoppingCart.getTotal()); 

//Ejercicio 31
// var uno = {
//     id: 1,
//     title: "At vero elitr",
//     price: 320,
//     freeShipping: true
// }

// var dos = {
//     id: 2,
//     title: "Dolore ipsum est eos",
//     price: 230,
//     freeShipping: false
// }

// var tres = {
//     id: 3,
//     title: "Lorem sadipscing tempor",
//     price: 120.50,
//     freeShipping: true
// }

// var cuatro = {
//     id: 4,
//     title: "Duo invidunt accusamr",
//     price: 510,
//     freeShipping: false
// }

// var cinco = {
//     id: 5,
//     title: "Labore accusam eirmod.",
//     price: 125.99,
//     freeShipping: true
// }


// var shoppingCart = {
//     owner: {
//         id: 123,
//         name: 'Ada Lovelace'
//     },
//     products: [],
//     addProduct: function addProduct(item) {
//         shoppingCart.products.push(item)
//     },
//     getTotal: function getTotal() {
//         var getTotal = 0;

//         for (var i = 0; i < shoppingCart.products.length; i++) {
//             getTotal += shoppingCart.products[i].price;

//             if (shoppingCart.products[i].freeShipping === false) {
//                 getTotal += 120;
//             }
//         }
//         return getTotal * 1.21;
//     },
//     render: function render(products) {
//         console.log("Listado de productos:")
//         for (var i = 0; i < shoppingCart.products.length; i++) {
//             var plusShipping = shoppingCart.products[i].price;

//             if (shoppingCart.products[i].freeShipping === false) {
//                 plusShipping += 120;
//             }


//             console.log(shoppingCart.products[i].title + " - $" + plusShipping)
//         }
//     }
// };

// shoppingCart.addProduct(uno);
// shoppingCart.addProduct(dos);
// shoppingCart.addProduct(tres);
// shoppingCart.addProduct(cuatro);
// shoppingCart.addProduct(cinco);

// shoppingCart.render();
// console.log("Total con IVA: " + shoppingCart.getTotal()); 