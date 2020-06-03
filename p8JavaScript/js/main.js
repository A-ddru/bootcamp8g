/*
1. 
        -Crear una función que reciba una palabra del usuario
        -Si el usuario escribe más de una palabra, indicarle que debe ingresar sólo una palabra
        -Si el usuario ingresa al menos un número dentro de la palabra, indicarle que no puede ingresar números
        -si el usuario ingresa una palabra, evaluar si esa palabra es un palíndromo, Indicar el resultado al usuario
 */ 

const getWord = () => {
  let word = prompt("Ingresa una palabra");
  let isWord = checkIsWord(word);
  let hasNoNumber = checkHasNumber(word);
  let isPalindrome = checkPalindrome(word);

  if (isWord == true && hasNoNumber == true) {
    word == isPalindrome
      ? alert(`La palabra ${word} es palindromo`)
      : alert(`La palabra ${word} no es palindromo`);
  } else {
    alert("Introduce una nueva palabra");
    getWord();
  }
};

const checkIsWord = (word) => {
  word = word.split(" ");
  if (word.length === 1) {
    return true;
  } else {
    alert(`Debe ser una palabra, no una frase`);
    return false;
  }
};

const checkHasNumber = (word) => {
  let isNumber = word.search(/[0123456789]/g);
  let isString = true;
  isNumber == -1
    ? isString == true
    : (alert("No debe incluir números"), (isString = false));
  return isString;
};

const checkPalindrome = (word) => {
  let palindrome = word.split("").reverse().join("");
  return palindrome;
};

getWord();

/* 2.
        -crear una función que reciba un número del usuario
        -si el usuario ingresa algo diferente a un número, indicarle que debe ingresar un número
        -si el usuario ingresa más de un número ( por ejemplo 22 10, ó 25,15,89) indicarle que debe ingresar únicamente un número
        -si el usuario ingresa un número, descomponer ese número en sus factores primos 
 */

const getNumber = () => {
  let number = prompt("Ingresa un número");
  let isNaN = checkIsNumber(number);
  let justOne = checkIsJustNumber(number);

  if (isNaN == false && justOne == true) {
    checkPrimeNumber(number);
  } else if (isNaN == true) {
    alert(" Deber ser un número");
    getNumber;
  }
  console.log(isNaN);
  console.log(justOne);
};

const checkIsNumber = (number) => {
  checkIsNoNumber = isNaN(number);
  return checkIsNoNumber;
};

const checkIsJustNumber = (number) => {
  number = number.split(" ");
  if (number.length === 1) {
    return true;
  } else {
    alert(`Debe ser solo un número`);
    return false;
  }
};

const checkPrimeNumber = (number) => {
  let arrPrimeNumber = [];
  for (let i = 0; i < number; i++) {
    console.log("i" + i);
    for (let j = 1; j < number; j++) {
      console.log(j);
    }
  }
};

//getNumber();
