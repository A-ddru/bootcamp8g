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
