"use strict";
//En TypeScript, las variables y constantes pueden tener tipos explícitos, lo que ayuda a evitar errores comunes en el manejo de datos.
// type Product = {
//     id : number,
//     name : string,
//     price : number
// }
// const product : Product = {id: 1, name: 'Product 1', price: 100}
// console.log(product);
//Los operadores en TypeScript permiten realizar operaciones matemáticas y lógicas con mayor precisión debido al tipado.
// let sum: number = 5 + 10;
// let isValid: boolean = sum > 10 && sum < 20;
// console.log(isValid);
//Implementa una función que determine si un número es par utilizando operadores aritméticos y booleanos.
// function isEven (a: number) : boolean{
//     if (a % 2 == 0) {
//         return true
//     }else{
//         return false
//     }   
// }
// console.log(isEven(5));
//Las estructuras de decisión controlan el flujo de ejecución de un programa basado en condiciones específicas.
// let value: number = 10;
// if (value > 5) {
//   console.log("Value is greater than 5");
// } else {
//   console.log("Value is 5 or less");
// }
// switch (value) {
//   case 10:
//     console.log("Value is 10");
//     break;
//   default:
//     console.log("Value is not 10");
// }
//Las estructuras de iteración(Loops, Ciclos) permiten ejecutar un bloque de código múltiples veces basándose en una condición o colección.
// let numbers: number[] = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
//Implementa una función que recorra un array de nombres y los imprima en consola.
// let names : string[] = ['Jesus','Mary','Joseph'];
// for (let i of names) {
//     console.log(i);
// }
// const nummer = [1, 2, 3, 4];
// const doubled = nummer.map(num => num * 2);
// console.log(doubled);
//Crea un array de números y calcula la suma de todos sus elementos utilizando un metodo reduce.
// let nummers : number[] = [1, 2, 3, 4, 5];
// let totalSum = nummers.reduce((acc, curr) => acc + curr, 0);
// console.log(totalSum);
//Implementa una función que reciba un array de strings y retorne la concatenación de todos los elementos.
// function nome (a: string[]) : string{
//     return  a.join('')
// }
// const a : string[] = ['Jesus', ' ', 'Mary',' ', 'Joseph'];
// console.log(nome(a));
//Define un array de objetos User con propiedades id y name, e imprime el nombre de cada usuario en consola.
// type User = {
//     id : number,
//     name : string
// }
// const users : User[] = [{
//     id: 1,
//     name: 'Marta'
// },
// {
//     id: 2,
//     name: 'Mary'
// },
// {
//     id: 3,
//     name: 'Lazarus'
// }
// ]
// const user = users.forEach(user => console.log(user.name));
//Implementa una función que reciba un array de números y retorne el mayor valor.
// function getMaxNumber(numbers : number[]) : number{
//     return Math.max(...numbers);
// }
// console.log(getMaxNumber([13,12,43,54,3]))
// type Car = {
//     brand : string;
//     model : string;
//     year : number;
// }
// let instCar : Car = {
//     brand : 'Toyota',
//     model : 'Corolla',
//     year : 2029
// }
// function plusYear(year: number) : string{
//     return  `${instCar.brand} ${instCar.model} ${instCar.year + year}`
// }
// console.log(plusYear(1));
// function validateParams(...args: [any,any]): string {
//     if (args.length < 2) {
//         throw new Error('2 parameters are required at least.');
//     }
//     const type1 = typeof args[0];
//     const type2 = typeof args[1];
//     if (type1 !== type2) {
//         throw new Error('The first 2 parameters must be of the same type.');
//     }
//     for (let i = 2; i < args.length; i++) {
//         if (typeof args[i] !== type1) {
//             throw new Error(`The parameter in the position ${i} is not of the type ${type1}.`);
//         }
//     }
//     return 'All the parameters are valid.';
// }
// console.log(validateParams(1, 3));
// function rotateMatrixClockwise(matrix: number[][]): number[][] {
//     const n = matrix.length;
//     // Crear una nueva matriz de la misma dimensión
//     const rotatedMatrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
//     // Rotar la matriz 90 grados en sentido horario
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             rotatedMatrix[j][n - 1 - i] = matrix[i][j];
//         }
//     }
//     return rotatedMatrix;
// }
// // Ejemplo de uso
// const originalMatrix: number[][] = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// const rotatedMatrix = rotateMatrixClockwise(originalMatrix);
// console.log("Original Matrix:");
// console.log(originalMatrix);
// console.log("Rotated Matrix:");
// console.log(rotatedMatrix);
//Las clases son plantillas para crear objetos que comparten propiedades y métodos
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}
let person = new Person("Juan Bosco", 23);
console.log(person.greet());
