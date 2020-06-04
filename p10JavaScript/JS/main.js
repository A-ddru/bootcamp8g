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

  






const createUserObject = () => {
    //let nombre = prompt("Ingresa el nombre de tu usuario")
    //let edad = parseInt(prompt("Ingresa la edad de tu usuario"))
    //let altura = parseInt(prompt("Ingresa la altura de tu usuario"))
    
    var dataArray = [
      ["Ruben", 25, 1.70],
      ["Yorch", 23, 1.80], 
      [ "Juan", 22, 1.82]
  ]    
    let userObject = {}
    userObject.Array = dataArray.map(user)
    
    
}

