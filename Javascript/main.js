//Funciones de cadenas

//string.replace(searchvalue, newvalue)
let cadena1 = "Hola mundo";
console.log(cadena1);
let cadena2 = cadena1.replace("Hola", "Adiós");
console.log(cadena2);

//str.includes(searchString[, position])
let boolean1 = cadena1.includes("Hola");
let boolean2 = cadena2.includes("Hola");
console.log(boolean1);
console.log(boolean2);

//str.repeat(count)
let aroundTheWorld = "Around the world\n";
console.log("Letra de Around the world de Daft Punk:");
console.log(aroundTheWorld.repeat(10));

//Number(value)
numero1 = ("1234");
console.log(numero1);
numero2 = Number(numero1);
console.log(numero2);

//parseInt(string [, radix])
numero3 = "F";
console.log(numero3);
let numero4 = parseInt(numero3, 16);
console.log(numero4);

//parseFloat(string)
numero5 = "10.";
console.log(numero5);
let numero6 = parseFloat(numero5);
console.log(numero6);

//Funciones con arreglos

//array.unshift(item1, item2, ..., itemX)
let numeros = ["Tres", "Cuatro", "Cinco", "Seis"];
numeros.unshift("Uno","Dos");
console.log(numeros);

//array.pop()
//Borra el último elemento del arreglo
numeros.pop();
console.log(numeros);

//array.shift()
//Borra el primer elemento del arreglo
const numeroUno = numeros.shift();
console.log(numeros);
console.log(numeroUno);

//let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])
numeros.splice(2, 0, "Tres punto cinto");
console.log(numeros);

//arr.reverse()
numeros.reverse();
console.log(numeros);

//arr.sort([compareFunction])
numeros.sort();
console.log(numeros);

//Scope - Alcance

var musica = "Rock";

if(musica)
{
    var musica = "Grunge";
    console.log(`Dentro del if ${musica}`);
}

console.log(`El valor de la variable música fuera del if ${musica}`);

//Object desctructuring: La forma en cómo se extraen valores de un objeto

const cliente = {
    nombre: "Mariana",
    tipo: "Premium",
    datos:{
        ubicacion:{
            ciudad: "México",
            pais: "México"
        },
        cuenta:{
            desde: "11-04-2020",
            saldo: 5000
        }
    },
    gusto:{
        deportes:["Bicicleta", "Gym", "Baile"]
    }
};

console.log(cliente);

//Forma anterior
const   nombreCliente = cliente.nombre,
        tipoCliente = cliente.tipo;

console.log(nombreCliente);
console.log(tipoCliente);

//Forma con Object Destructuring
let {nombre, tipo} = cliente;

console.log(nombre);
console.log(tipo);

let {datos:{ubicacion}} = cliente;

console.log(ubicacion);

//Object Literal Enhancement: Para unir en un objeto
const   banda = "Metallica",
        genero = "Heavy Metal",
        canciones = ["Master of Puppets",
        "Seek & Destroy", "Enter Sandman"];

/**Forma anterior
const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}
 */

//Nueva forma
const metallica = {banda, genero, canciones};
console.log(metallica);

const personas = [
    {nombre: "Antonio", edad: 42},
    {nombre: "César", edad: 21},
    {nombre: "Mariana", edad: 20},
    {nombre: "Steve", edad: 23, aprendiendo: "Javascript"},
    {nombre: "Jair", edad: 22}
];

console.log(personas);

//Obtener las personas mayores de 21 años
const mayores = personas.filter(persona => persona.edad > 21);
console.log(mayores);

//Extraer información de Mariana
const mariana = personas.find(persona => persona.nombre === "Mariana");
console.log(mariana);

//Reduce: Obtiene un acumulado de los registros
let totalR = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0); //0 es a partir de qué número voy a iniciar, se puede cambiar para ver la diferencia

console.log(totalR);

//Promedio de edad
console.log(totalR / personas.length);