//Funciones constructoras (Clases)


//funcion constructora
var Clase = function(){
    //propiedad - agregas un valor
this.name = "Juan"
   //metodo
this.setName = function(nombre){
     this.name = nombre;
}
     this.getName = function(){
       return this.name;
     }
}
 //instanciar objetos
 var objeto1 = new Clase();
 var objeto2 = new Clase();

objeto2.setName("Carlos");

console.log(objeto1.getName());
console.log(objeto2.getName());

document.write(objeto1.getName()+'<br>');
document.write(objeto2.getName());



//sirve como prototipo para crear nuevos ejemplos
//para acceder a alguna propiedad o metodo de esta funcion desde fuera se utiliza la palabra reservada this
//setName - Modifica el valor de una propiedad
//getName - este metodo nos va a servir para mostrar el valor de la propiedad name
// por cada objeto creado se vuelve a crear name, setName, getName el script va a tener un rendidmeinto lento y poca memoria usar la propiedad prototype
// que va a hacer que cada que instacie el objeto solaentese instancia la clase constructora y no todo lo demas

//propiedad protype nos ayuda a solucionar el problema de rendimiento cuando queramos instanciar varis objetos de una mismo clase o funcion constructora la cual ya contiene todas las propiedades o metodos declarados
//esta propiedad nos va a permitir añadir propiedades o metodos a una clase o funcion constructora

//Funcion constructora con prototype

var clase = function(){


}

  //esta es la primer proiedad declarada
clase.prototype.name = "Paulo";

clase.prototype.setName = function(nombre) {
    //primer metodo declarado
    this.name = nombre;
}
    //segundo metodo declarado
clase.prototype.getName = function(){
    return this.name;
}


//instanciar objetos
var objeto1 = new clase();
var objeto2 = new clase();

objeto2.setName("Cesar");





console.log(objeto1.getName());
console.log(objeto2.getName());

document.write(objeto1.getName()+'<br>');
document.write(objeto2.getName());




//cuandocreamos una funcion constructora java Scrip la asigna automaticamente es por eso que la podemos utilizar aunque no este declarada dentro de esta









/*

/*
Considerar el string original "La mejor forma de predecir el futuro es creándolo"
con base en dicho string, realizar lo siguiente:
1.- Regresar un nuevo string, en el cual las palabras pares esten escritas en minúscula, y las palabras nones en mayúscula
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "LA mejor FORMA de PREDECIR el FUTURO es CREÁNDOLO"
*/


/* ___________________________________________________
const words = "La mejor forma de predecir el futuro es creándolo";
var wordText = words.split(" ");

transformigText = wordText.map((word, index) => {

    if (index % 2 === 0) {
      return word.toUpperCase();
    } else {
      return word;
    } }) .join(" ");
console.log(transformigText);

___________________________________________________*/

var originalString = "La mejor forma de predecir el futuro es creándolo";
var stringArray = originalString.split(" ");

var procesedArray = stringArray.map((word, index) => index % 2 === 0 ? word.toUpperCase() : word ).join(" ")







/*
2.- Regresar un nuevo string, que sea una frase formada con todas las palabras del string original que tengan más de 5 letras
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "mejor forma predecir futuro creándolo"
*/

/*___________________________________________________
let fiveWords = wordText.filter((word) => word.length > 5).join(" ");
console.log(fiveWords);
___________________________________________________*/


/*
3.- Regresar el promedio de caracteres por palabra con base en el string original
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "La frase usa en promedio ${average} caracteres por palabra"
*/
/* ___________________________________________________
otra opcion de resolver
const averageByWord = wordText.reduce((accum, word) => {
  return accum + word.length;

  }, 0) / wordText.length;

console.log(averageByWord);
___________________________________________________*/

/* ___________________________________________________
const averageByWord = wordText.reduce((accum, word) => { accum += word.length;
    return accum;
  }, 0) / wordText.length;

console.log(`La frase usa en promedio ${averageByWord} caracteres por palabra`);
___________________________________________________*/




//CODIGO DE ISRAEL=================================================

/*Considerar el string original "La mejor forma de predecir el futuro es creándolo"
con base en dicho string, realizar lo siguiente:
1.- Regresar un nuevo string, en el cual las palabras pares esten escritas en minúscula, y las palabras nones en mayúscula
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "LA mejor FORMA de PREDECIR el FUTURO es CREÁNDOLO"
2.- Regresar un nuevo string, que sea una frase formada con todas las palabras del string original que tengan más de 5 letras
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "mejor forma predecir futuro creándolo"
3.- Regresar el promedio de caracteres por palabra con base en el string original
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "La frase usa en promedio ${average} caracteres por palabra"
*/
var originalString = "La mejor forma de predecir el futuro es creándolo";
var stringArray = originalString.split(" ");
/*
[
0: "La"
1: "mejor"
2: "forma"
3: "de"
4: "predecir"
5: "el"
6: "futuro"
7: "es"
8: "creándolo"
]
*/
var procesedArray = stringArray
                        .map( (word, index)  => index % 2 === 0 ? word.toUpperCase() : word )
                        .join(" ")
console.log(procesedArray)
/*
var filteredArray = stringArray.filter( word => {
    return word.length >= 5
}).join(" ")
*/
var filteredArray = stringArray
                        .filter( word => word.length >= 5)
                        .join(" ")
console.log(filteredArray)
/*
hola        4
koders      6
queridos    8
total = 0 + 4 = 4 +6 = 10 + 8 = 18 / 3 = 6
*/
/*
var reducedArray = stringArray.reduce( ( accum, word, index) => {
    return accum + word.length
},0) / stringArray.length
*/
var reducedArray = stringArray.reduce( ( accum, word, index) => accum + word.length, 0) / stringArray.length
console.log(reducedArray)
console.log(stringArray)
